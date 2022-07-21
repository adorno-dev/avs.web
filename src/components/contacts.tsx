import { useCallback, useEffect, useState } from "react"
import { ContactService } from "../services/contact.service"
import { ContactList, ContactListItem } from "../styles/components/contacts.style"
import { Contact } from "../types/contact.type"

export const Contacts = ({setContact}: {setContact: (contact: Contact) => void}) =>
{    
    const [contacts, setContacts] = useState<Array<Contact>>([])

    const contactService = new ContactService()

    const getContacts = useCallback(() => {
        contactService
            .getContacts()
            .then(receivedContacts => setContacts(receivedContacts))
    }, [])

    useEffect(() => {
        getContacts()
    }, [getContacts])

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