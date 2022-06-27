import { createContext, FormEvent, ReactNode } from "react";
import { signin, signup } from "../hooks/useapi";

type User = {
    authentication: Authentication | undefined,
    exception: Exception | undefined,
    signin: (event: FormEvent<HTMLFormElement>) => void,
    signup: (event: FormEvent<HTMLFormElement>) => void,
    signout: () => void
}

type Authentication = {
    token: string,
    refreshToken: string
}

export type Exception = {
    errors?: string[],
    message: string
}

export const userAuthenticationChecker = () => {
    const authentication = localStorage.getItem("authentication")
    
    if (authentication === null) return undefined

    if (authentication.indexOf("token") > -1)
        return JSON.parse(authentication) as Authentication
}

export const userExceptionChecker = () => {
    const exception = localStorage.getItem("exception")

    if (exception === null) return undefined

    if (exception.indexOf("message") > -1)
        return JSON.parse(exception) as Exception
}

const userDataHandler = (event: FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    event.preventDefault();
    return Object.fromEntries(data.entries());
}

const state: User = {
    authentication: undefined,
    exception: undefined,
    signin: async (event: FormEvent<HTMLFormElement>) => {
        await signin(userDataHandler(event)).then(async response =>
            {
                if (response.status == 200) {
                    state.authentication = await response.json();
                    localStorage.setItem("authentication", JSON.stringify(state.authentication));

                    state.exception = undefined;
                    localStorage.removeItem("exception");
                } else {
                    state.exception = await response.json();
                    localStorage.setItem("exception", JSON.stringify(state.exception));
                }
            });
    },
    signup: async (event: FormEvent<HTMLFormElement>) => {
        await signup(userDataHandler(event))
            .then(async (response) => {
                if (response.status != 204) {
                    state.exception = await response.json();
                    localStorage.setItem("exception", JSON.stringify(state.exception));
                } else {
                    state.exception = undefined;
                    localStorage.removeItem("exception");
                }
            })
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