import { useEffect, useState } from "react"
import { useContact } from "../hooks/use-contact.hook"
import { Contact } from "../types/contact.type"
import { ContactList, ContactListItem } from "./contacts.style"

export const Contacts = ({setContact}: {setContact: (contact: Contact) => void}) =>
{
    const [contactList, setContactList] = useState<Array<Contact>>([])

    const {allContacts} = useContact()

    const getData = async () => setContactList(await allContacts())

    useEffect(()=>
    {
        getData()
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