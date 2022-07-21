import { Tokens } from "../types/authentication.context.type";
import { SignInRequest, SignUpRequest } from "../types/authentication.type";
import { ApiService } from "./api.service";

export class AuthenticationService extends ApiService {
    constructor(tokens?: Tokens) {
        super(tokens)
    }
    async signIn(signInRequest: SignInRequest) {
        try {
            return (await this.api.post("sign-in", signInRequest)).data
        } catch (exception) {
            return exception
        }
    }
    async signUp(signUpRequest: SignUpRequest) {
        try {
            return (await this.api.post("sign-up", signUpRequest)).data
        } catch (exception) {
            return exception
        }
    }
}