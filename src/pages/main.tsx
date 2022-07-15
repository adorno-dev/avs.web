import { useState } from "react"
import { Link } from "react-router-dom"
import { Authorized } from "../components/authorized.component"
import { Chat } from "../components/chat"
import { Contacts } from "../components/contacts"
import { useAuthentication } from "../hooks/use-authentication.hook"
import { Contact } from "../types/contact.type"
import { Brand, Container, Navbar, Placeholder, Search, Toolbar } from "./main.style"

export const Main = () =>
{
    const context = useAuthentication()
    const [contact, setContact] = useState<Contact>()
    return <>
        <Authorized>
            <Container>
                <Navbar>
                    <Brand>AVS</Brand>
                    <Search placeholder="Search..." />
                    <Toolbar>
                        <Link to="/signin" onClick={context.signOut}>Sign Out</Link>
                    </Toolbar>
                </Navbar>
                <Placeholder>
                    <Contacts setContact={setContact} />
                </Placeholder>
                {
                    contact?.id && <Chat contact={contact} setContact={setContact} />
                }
            </Container>
        </Authorized>
    </>
}