import { createContext, ReactNode, useMemo, useState } from "react";
import { AuthenticationService as authService } from "../services/authentication.service"
import { TokenService as tokenService } from "../services/token.service"
import { Authentication, Token } from "../types/authentication.context.type"
import { SignUpRequest, SignInRequest } from "../types/authentication.type"

export const AuthenticationContext = createContext<Authentication | undefined>(undefined)

export const AuthenticationProvider = ({children}: {children: ReactNode}) => {
    const {getTokenLocalStorage, setTokenLocalStorage} = tokenService
    const [token, setToken] = useState<Token>()
    const setUndefinedToken = () => {
        setToken(undefined)
        setTokenLocalStorage(undefined)
    }
    const signIn = async (signInRequest: SignInRequest) => {
        const accessToken = await authService.signIn(signInRequest) as Token
        if (Object.hasOwn(accessToken, "token")) {
            setToken(accessToken)
            setTokenLocalStorage(accessToken)
            return true
        } else {
            setUndefinedToken()
            return false
        }
    }
    const signUp = async (signUpRequest: SignUpRequest) => {
        return !Object.hasOwn(await authService.signUp(signUpRequest), "message")
    }
    const signOut = () => setUndefinedToken()
    useMemo(() => setToken(getTokenLocalStorage()), [getTokenLocalStorage])
    return (
        <AuthenticationContext.Provider value={{token, signUp, signIn, signOut}}>
            {children}
        </AuthenticationContext.Provider>
    )
}