import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { userAuthenticationChecker, UserContext } from "../contexts/UserContext"

export const Authorized = () =>
{
    const context = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=> {
        context.authentication = userAuthenticationChecker();
        context.authentication === undefined && navigate("/signin");
        return;
    }, [context, navigate])

    return <></>
}