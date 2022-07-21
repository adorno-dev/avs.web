import { useNavigate } from "react-router-dom"
import { ReactNode, useEffect } from "react"
import { useAuthentication } from "../hooks/use-authentication.hook"

export const Authorized = ({children}: {children: ReactNode}) => {
    const context = useAuthentication()
    const navigate = useNavigate()
    useEffect(() => {
        context.tokens === undefined && navigate("signin")
    }, [context, navigate])
    return <>{children}</>
}