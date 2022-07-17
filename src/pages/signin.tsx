import { FormEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthentication } from "../hooks/use-authentication.hook"

export const SignIn = () =>
{
    const {token, signIn} = useAuthentication()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (await signIn({email, password}))
            navigate("/")
    }
    useEffect(() => token && navigate("/"))
    return (
        <form className="signInForm" onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                name="email" required 
                placeholder="Email" 
                autoComplete="off" />
            <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                name="password" 
                required placeholder="Password" 
                autoComplete="off" />
            <label>Don't have an account? <Link to="/signup">Sign Up</Link> now.</label>
            <button type="submit">Sign In</button>
        </form>
    )
}