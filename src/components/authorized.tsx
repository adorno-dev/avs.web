import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { userAuthenticationChecker, UserContext } from "../contexts/user-context"

export const Authorized = () =>
{
    const context = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=> {
        context.authentication = userAuthenticationChecker();
        context.authentication === undefined && navigate("/signin");
    }, [context, navigate])

    return <></>
}