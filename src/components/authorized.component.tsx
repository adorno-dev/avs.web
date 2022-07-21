import { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthentication } from "../hooks/use-authentication.hook"

export const Authorized = ({children}: {children: ReactNode}) => {
    const {tokens} = useAuthentication()
    const navigate = useNavigate()
    useEffect(() => {
        function hasToken() {
            tokens === undefined && navigate("signin")
        }
        hasToken()
    }, [tokens, navigate])
    return <>{children}</>
}