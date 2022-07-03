import { FormEvent, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import { userAuthenticationChecker, UserContext } from "../contexts/UserContext"

export const SignIn = () =>
{
    const context = useContext(UserContext)
    const navigate = useNavigate()
    const handle = async (e: FormEvent<HTMLFormElement>) => {
        await context.signin(e);
        if (context.authentication !== undefined)
            if (context.authentication.hasOwnProperty("token")) 
                navigate("/")
    }
    useEffect(()=>{
        context.authentication = userAuthenticationChecker()
        if (context.authentication !== undefined)
            navigate("/")
    }, [context, navigate])
    return (
        <form onSubmit={handle}>
            <h1>Sign In</h1>
            <input type="email" name="email" required placeholder="Email" autoComplete="off" />
            <input type="password" name="password" required placeholder="Password" autoComplete="off" />
            <label>Don't have an account? <Link to="/signup">Sign Up</Link> now.</label>
            <button type="submit">Sign In</button>
        </form>
    )
}