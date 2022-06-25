import styled from "styled-components"
import { useEffect, useState } from "react"
import { contactList } from "../hooks/useapi"

type Contact = {
    id: string,
    username: string
}

export const ContactList = () =>
{
    // const [contactList, setContactList] = useState<Array<Contact>>([])
    // const load = async () => setContactList(await contacts())

    const [contacts, setContacts] = useState<Array<Contact>>([])
    const fetch = async () => setContacts(await contactList())

    useEffect(()=>
    {
        fetch()
    }, [])

    return <>
        <Contacts>
            <h3>Contacts</h3>
            {contacts.map(m => <a key={m.id}>{m.username}</a>)}
        </Contacts>
    </>
}

const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    background: lightgray;
    width: 300px;
    height: 100vh;
    position: absolute;
    right: 0;

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

// const Contacts = styled.ul`
//     position: absolute;
//     right: 0;
//     height: 100vh;
//     list-style: none;
//     display: flex;
//     flex-direction: column;
//     width: 300px;
//     background: #f3f3f3;
//     li {
//         padding: 10px;
//         border-bottom: 1px solid rgba(0,0,0,0.2);
//     }
// `