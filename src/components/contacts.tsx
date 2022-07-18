import { useCallback, useMemo, useState } from "react"
import { useContact } from "../hooks/use-contact.hook"
import { ContactList, ContactListItem } from "../styles/components/contacts.style"
import { Contact } from "../types/contact.type"

export const Contacts = ({setContact}: {setContact: (contact: Contact) => void}) =>
{
    const [contactList, setContactList] = useState<Array<Contact>>([])

    const {allContacts} = useContact()

    const getContacts = useCallback(async () => {
        allContacts().then((contacts) => setContactList(contacts))
    }, [allContacts])

    useMemo(()=>
    {
        getContacts()
    }, [getContacts])

    return (
        <ContactList>
            <h3>Contacts</h3>
            <div>
                {
                    contactList !== undefined && contactList.length > 0 && contactList.map(m =>
                        <ContactListItem onClick={()=>setContact(m)} key={m.id}>
                            {m.username}
                        </ContactListItem>)
                }
            </div>
        </ContactList>
    )
}