import { SignInRequest, SignInResponse, SignUpRequest } from "./authentication.type"

export type Authentication = {
    tokens?: Tokens,
    signUp: (signUpRequest: SignUpRequest) => Promise<boolean>,
    signIn: (signInRequest: SignInRequest) => Promise<boolean>,
    signOut: () => void,
}

export interface Tokens extends SignInResponse {}