import { AxiosError } from "axios";
import { ErrorResponse, SignInRequest, SignInResponse, SignUpRequest } from "../types/authentication.type";
import { Api } from "./api.service";

const signIn = async (signInRequest: SignInRequest) => {
    try {
        return (await Api.post("sign-in", signInRequest)).data as SignInResponse
    } catch (exception) {
        return ((exception as AxiosError).response)?.data as ErrorResponse
    }
}

const signUp = async (signUpRequest: SignUpRequest) => {
    try {
        return (await Api.post("sign-up", signUpRequest)).data as SignUpRequest
    } catch (exception) {
        return ((exception as AxiosError).response)?.data as ErrorResponse
    }
}

export const AuthenticationService = {
    signIn,
    signUp
}