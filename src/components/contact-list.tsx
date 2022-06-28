import styled from "styled-components"
import { useEffect, useState } from "react"
import { contactList } from "../hooks/useapi"
import { Link } from "react-router-dom"

type Contact = {
    id: string,
    username: string
}

export const ContactList = () =>
{
    const [contacts, setContacts] = useState<Array<Contact>>([])
    const fetch = async () => setContacts(await contactList())

    useEffect(()=>
    {
        fetch()
    }, [])

    return <>
        <Contacts>
            <h3>Contacts</h3>
            <div>
                {contacts.map(m => <Link to="/" key={m.id}>{m.username}</Link>)}
            </div>
        </Contacts>
    </>
}

const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    background: lightgray;
    width: 300px;
    bottom: 0;
    height: calc(100vh - 65px);
    position: absolute;
    right: 0;

    div {
        overflow: auto;
        display: flex;
        flex-direction: column;
    }

    h3 {
        border-top-left-radius: 10px;
        background: #000;
        color: #fff;
        padding: 10px 20px;
        border-bottom: 1px solid black;
    }

    a {
        padding: 10px 20px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
`