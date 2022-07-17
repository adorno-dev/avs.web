import { FormEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthentication } from "../hooks/use-authentication.hook"

export const SignUp = () =>
{
    const {token, signUp} = useAuthentication()
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const navigate = useNavigate()
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (await signUp({username, email, password, confirmPassword}))
            navigate("/signin")
    }
    useEffect(() => token && navigate("/"))
    return (
        <form className="signUpForm" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text" 
                name="username" 
                required placeholder="Username" 
                autoComplete="off" />
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                name="email" 
                required placeholder="Email" 
                autoComplete="off" />
            <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                name="password" 
                required placeholder="Password" 
                autoComplete="off" />
            <input 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password" 
                name="confirm_password" 
                required placeholder="Confirm Password" 
                autoComplete="off" />
            <label>Already have an account? <Link to="/signin">Sign In</Link> now.</label>
            <button type="submit">Sign Up</button>
        </form>
    )
}