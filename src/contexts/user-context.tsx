import { createContext, FormEvent, ReactNode } from "react";
import { signin, signup } from "../hooks/useapi";

type User = {
    authentication: AuthenticationSuccess | AuthenticationFailure | undefined
    signin: (event: FormEvent<HTMLFormElement>) => void,
    signup: (event: FormEvent<HTMLFormElement>) => void,
    signout: () => void
}

type AuthenticationSuccess = {
    token: string,
    refreshToken: string
}

export type AuthenticationFailure = {
    errors: string[],
    message: string
}

export const userAuthenticationChecker = () => {
    const authentication = localStorage.getItem("authentication")
    
    if (authentication === null) return undefined

    if (authentication.indexOf("token") > -1)
        return JSON.parse(authentication) as AuthenticationSuccess

    else if (authentication.indexOf("errors") > -1)
        return JSON.parse(authentication) as AuthenticationFailure
}

const userDataHandler = (event: FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    event.preventDefault();
    return Object.fromEntries(data.entries());
}

const state: User = {
    authentication: undefined,
    signin: async (event: FormEvent<HTMLFormElement>) => {
        await signin(userDataHandler(event)).then(response =>
            {
                if (response.token !== undefined && response.refreshToken !== undefined)
                {
                    state.authentication = {token: response.token, refreshToken: response.refreshToken};
                    localStorage.setItem("authentication", JSON.stringify(state.authentication));
                }
                else
                {
                    state.authentication = {message: response.message || response.title, errors: response.errors || undefined};
                    // console.log(state.authentication);
                }
            });
    },
    signup: async (event: FormEvent<HTMLFormElement>) => {
        await signup(userDataHandler(event)).then(response =>
            {
                if (response.token !== undefined && response.refreshToken !== undefined)
                {
                    state.authentication = {token: response.token, refreshToken: response.refreshToken};
                    localStorage.setItem("authentication", JSON.stringify(state.authentication));
                }
                else
                {
                    state.authentication = {message: response.message || response.title, errors: response.errors || undefined};
                    // console.log(state.authentication);
                }
            });
    },
    signout: async () => {
        state.authentication = undefined;
        localStorage.removeItem("authentication");
    }
}

export const UserContext = createContext<User>(state);

export const UserContextProvider = (children: ReactNode) => {
    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}