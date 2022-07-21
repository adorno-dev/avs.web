import { useEffect, useState } from "react"
import { ContactService } from "../services/contact.service"
import { ContactList, ContactListItem } from "../styles/components/contacts.style"
import { Contact } from "../types/contact.type"

const contactService = new ContactService()

export const Contacts = ({setContact}: {setContact: (contact: Contact) => void}) =>
{
    const [contacts, setContacts] = useState<Array<Contact>>([])

    useEffect(() => {
        contactService
            .getContacts()
            .then(setContacts)
    }, [])

    return (
        <ContactList>
            <h3>Contacts</h3>
            <div>
                {
                    contacts !== undefined && contacts.length > 0 && contacts.map(m =>
                        <ContactListItem onClick={()=>setContact(m)} key={m.id}>
                            {m.username}
                        </ContactListItem>)
                }
            </div>
        </ContactList>
    )
}