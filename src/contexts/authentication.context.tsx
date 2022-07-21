import { createContext, ReactNode, useEffect, useState } from "react";
import { AuthenticationService, AuthenticationService as authService } from "../services/authentication.service"
import { TokenService } from "../services/token.service";
import { Authentication, Tokens } from "../types/authentication.context.type"
import { SignUpRequest, SignInRequest } from "../types/authentication.type"

export const AuthenticationContext = createContext<Authentication | undefined>(undefined)

export const AuthenticationProvider = ({children}: {children: ReactNode}) => {

    const authenticationService = new AuthenticationService()

    const {getTokenLocalStorage, setTokenLocalStorage} = TokenService

    const [tokens, setTokens] = useState<Tokens>()

    const signIn = async (signInRequest: SignInRequest) => {
        const receivedToken = await authenticationService.signIn(signInRequest)
        if (Object.hasOwn(receivedToken, "token")) {
            setTokens(receivedToken)
            setTokenLocalStorage(receivedToken)
            return true
        } else {
            setTokens(undefined)
            setTokenLocalStorage(undefined)
            return false
        }
    }

    const signUp = async (signUpRequest: SignUpRequest) => {
        let signedUp = false;
        await authenticationService
            .signUp(signUpRequest)
            .then(() => signedUp = true)
            .catch(() => signedUp = false)
        return signedUp
    }

    const signOut = () => {
        setTokens(undefined)
        setTokenLocalStorage(undefined)
    }

    // useEffect(() => setTokens(getTokenLocalStorage()))

    return (
        <AuthenticationContext.Provider value={{tokens, signUp, signIn, signOut}}>
            {children}
        </AuthenticationContext.Provider>
    )
}