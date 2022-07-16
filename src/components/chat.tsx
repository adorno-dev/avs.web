import { FormEvent, useMemo, useState } from "react"
import { useChat } from "../hooks/use-chat.hook"
import { Message } from "../types/chat.type"
import { Contact } from "../types/contact.type"
import { Window, Titlebar, Body, Footer, MessageReceived, MessageSent } from "../styles/components/chat.style"

export const Chat = ({contact, setContact}: {contact: Contact, setContact: (contact: Contact) => void}) =>
{
    const service = useChat()

    const [message, setMessage] = useState<string>("")

    const [messages, setMessages] = useState<Message[]>([])

    const handleSendMessage = (e: FormEvent) => {
        e.preventDefault()
        service.sendMessage(contact.id, message)
        // setMessages((previous) => [...previous, {body: message} as Message])
        setMessage("")
    }

    // const fetchData = () => {
    //     // if (contact?.id) {
    //         service.getChatByContact(contact.id).then((ms) => setMessages(ms))
    //     // }
    // }

    // useEffect(() => {
    //     if (contact?.id)
    //         service.getChatByContact(contact.id)
    //                .then((messages) => setMessage(messages))
    // }, [service, contact?.id])

    // useEffect(() => fetchData(), [])

    useMemo(() => {
        service.getChatByContact(contact.id).then((chat) => setMessages(chat.messages))
    }, [contact.id])

    return (
        <Window>
            <Titlebar>
                <h3>{contact?.username}</h3>
                <h3 style={{cursor: "pointer"}} onClick={()=>setContact({id: "", username: ""})}>X</h3>
            </Titlebar>
            <Body>
                {messages?.map(m => m.sender_id !== contact?.id ? 
                    <MessageSent key={m.id}>{m.body}</MessageSent> :
                    <MessageReceived key={m.id}>{m.body}</MessageReceived>
                    )}
            </Body>
            <Footer>
                <input type="text" placeholder="Your message..." value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={handleSendMessage}>Send</button>
            </Footer>
        </Window>
    )
}