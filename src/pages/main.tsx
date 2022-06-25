import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Authorized } from "../components/authorized"
import { Chat } from "../components/chat"
import { ContactList } from "../components/contact-list"
import { UserContext } from "../contexts/user-context"

export const Main = () =>
{
    const context = useContext(UserContext);
    return (
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
                <ContactList />
            </Placeholder>
            <Chat />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
    background: #000;
    color: #fff;
    box-shadow: 0 0 25px rgba(0,0,0,.2);
`

const Brand = styled.div`
    display: inline-block;
    font-weight: bold;
    margin: 0 20px;
    /* padding: 0 20px; */
    font-size: 1.6em;
`

const Search = styled.input`
    font-size: 1em;
    display: inline-block;
    margin: 10px 20px;
    padding: 0 25px;
    height: 40px;
    width: 50%;
    outline: none;
    border: none;
    border-radius: 18px;
`

const Toolbar = styled.div`
    display: inline-block;
    margin: 0 20px;
    /* padding: 0 20px; */

    a {
        background: #fff;
        /* margin: 10px 20px; */
        padding: 10px 20px;
        height: 40px;
        border-radius: 20px;
    }
`

const Placeholder = styled.div`
    margin: 10px 20px;
`