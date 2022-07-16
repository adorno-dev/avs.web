import { useCallback, useMemo, useState } from "react"
import { useContact } from "../hooks/use-contact.hook"
import { ContactList, ContactListItem } from "../styles/components/contacts.style"
import { Contact } from "../types/contact.type"

export const Contacts = ({setContact}: {setContact: (contact: Contact) => void}) =>
{
    const [contactList, setContactList] = useState<Array<Contact>>([])

    const {allContacts} = useContact()

    const getData = useCallback(async () => setContactList(await allContacts()), [allContacts])

    useMemo(()=>
    {
        getData()
    }, [getData])

    return <>
        <ContactList>
            <h3>Contacts</h3>
            <div>
                {contactList.map(m =><ContactListItem onClick={()=>setContact(m)} key={m.id}>{m.username}</ContactListItem>)}
            </div>
        </ContactList>
    </>
}