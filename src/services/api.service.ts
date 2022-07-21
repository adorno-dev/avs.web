import axios, { AxiosError } from "axios";
import { Tokens } from "../types/authentication.context.type";
import { TokenService as tokenService } from "./token.service";

export class ApiService {
    protected api = axios.create({
        baseURL: "https://localhost:5000/api/"
    })
    constructor(tokens?: Tokens) {
        tokens = tokenService.getTokenLocalStorage()
        this.api.interceptors.request.use((config) => {
            if (tokens) 
                config.headers = {"Authorization":`Bearer ${tokens.token}`}
            return config
        })
        this.api.interceptors.response.use(
            undefined, (exception: AxiosError) => {
                if (exception.response?.status === 401) {
                    console.log(exception.response)
                    // tokenService.setTokenLocalStorage(undefined)
                    // window.location.href = "/signin"
                }
            }
        )
    }
}