import { Tokens } from "../types/authentication.context.type"

const getTokenLocalStorage = () => {
    const token = localStorage.getItem("t")
    return token ? 
        JSON.parse(token) as Tokens : undefined
}

const setTokenLocalStorage = (token: Tokens | undefined) => {
    token ?
        localStorage.setItem("t", JSON.stringify(token)) :
        localStorage.removeItem("t")
}

export const TokenService = {
    getTokenLocalStorage,
    setTokenLocalStorage
}