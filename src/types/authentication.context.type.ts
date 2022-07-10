import { SignInRequest, SignInResponse, SignUpRequest } from "./authentication.type"

export type Authentication = {
    token?: Token,
    signUp: (signUpRequest: SignUpRequest) => Promise<boolean>,
    signIn: (signInRequest: SignInRequest) => Promise<boolean>,
    signOut: () => void
}

export interface Token extends SignInResponse {}