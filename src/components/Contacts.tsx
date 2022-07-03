import { useEffect, useState } from "react"
import { getContactList } from "../hooks/UseAPI"
import { Contact } from "../types/Compose"
import { ContactList, ContactListItem } from "./Contacts.style"

export const Contacts = ({setContact}: {setContact: (contact: Contact) => void}) =>
{
    const [contactList, setContactList] = useState<Array<Contact>>([])

    const fetch = async () => setContactList(await getContactList())

    useEffect(()=>
    {
        fetch()
    }, [])

    return <>
        <ContactList>
            <h3>Contacts</h3>
            <div>
                {contactList.map(m =><ContactListItem onClick={()=>setContact(m)} key={m.id}>{m.username}</ContactListItem>)}
            </div>
        </ContactList>
    </>
}