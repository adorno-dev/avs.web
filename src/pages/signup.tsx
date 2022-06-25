import { FormEvent, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { userAuthenticationChecker, UserContext } from "../contexts/user-context"

export const SignUp = () =>
{
    const context = useContext(UserContext);
    const navigate = useNavigate();
    const handle = async (e: FormEvent<HTMLFormElement>) => {
        await context.signup(e);

        if (context.authentication !== undefined)
            if (!context.authentication.hasOwnProperty("errors")) 
                navigate("/signin");

        e.currentTarget.reset();
        
        navigate("/signup");
    }
    useEffect(()=>{
        context.authentication = userAuthenticationChecker()
        if (context.authentication !== undefined)
            navigate("/")
    }, [context, navigate])
    return (
        <form onSubmit={handle}>
            <h1>Sign Up</h1>
            <input type="text" name="username" required placeholder="Username" autoComplete="off" />
            <input type="email" name="email" required placeholder="Email" autoComplete="off" />
            <input type="password" name="password" required placeholder="Password" autoComplete="off"/>
            <input type="password" name="confirm_password" required placeholder="Confirm Password" autoComplete="off" />
            <label>Already have an account? <Link to="/signin">Sign In</Link> now.</label>
            <button type="submit">Sign Up</button>
        </form>
    )
}