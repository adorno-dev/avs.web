import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Authorized } from "../components/Authorized"
import { Chat } from "../components/Chat"
import { Contacts } from "../components/Contacts"
import { UserContext } from "../contexts/UserContext"
import { Contact } from "../types/Compose"
import { Brand, Container, Navbar, Placeholder, Search, Toolbar } from "./Main.style"

export const Main = () =>
{
    const context = useContext(UserContext);
    const navigate = useNavigate();
    
    const [contact, setContact] = useState<Contact>();

    useEffect(()=>
    {
        console.log(context.authentication);
        if (context.authentication === undefined)
            console.log('caiu');
    }, [])

    return <>
        <Container>
            <Authorized />
            <Navbar>
                <Brand>AVS</Brand>
                <Search placeholder="Search..." />
                <Toolbar>
                    <Link to="/signin" onClick={context.signout}>Sign Out</Link>
                </Toolbar>
            </Navbar>
            <Placeholder>
                <Contacts setContact={setContact} />
            </Placeholder>
            {
                contact?.id && <Chat contact={contact} setContact={setContact} />
            }
        </Container>
    </>
}