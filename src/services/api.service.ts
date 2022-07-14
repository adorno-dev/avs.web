import axios, { AxiosError } from "axios";
import { TokenService } from "./token.service";

export const Api = axios.create({
    baseURL: "https://localhost:5000/api/"
})

Api.interceptors.request.use((config) => {
    const authorization = TokenService.getTokenLocalStorage()
    if (authorization?.token)
        config.headers = {
            "Authorization": `Bearer ${authorization.token}`
        }

    return config
})

Api.interceptors.response.use(undefined, (err: AxiosError) => {
    if (err.response?.status === 401)
        TokenService.setTokenLocalStorage(undefined)
})