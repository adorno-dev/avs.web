import { FormEvent, useCallback, useEffect, useState } from "react"
import { useChat } from "../hooks/use-chat.hook"
import { Message } from "../types/chat.type"
import { Contact } from "../types/contact.type"
import { Window, Titlebar, Body, Footer, MessageReceived, MessageSent } from "../styles/components/chat.style"

export const Chat = ({contact, setContact}: {contact: Contact, setContact: (contact: Contact) => void}) =>
{
    const {getChatByContact, sendMessage} = useChat()

    const [message, setMessage] = useState<string>("")

    const [messages, setMessages] = useState<Message[]>([])

    const handleSendMessage = (e: FormEvent) => {
        e.preventDefault()
        sendMessage(contact.id, message).then(getMessages)
        setMessage("")
    }

    const getMessages = useCallback(() => {
        getChatByContact(contact.id).then((chat) => setMessages(chat.messages))
    }, [getChatByContact, contact.id])

    useEffect(() => {
        getMessages()
    }, [getMessages])

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
                <form>
                    <input type="text" placeholder="Your message..." value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button disabled={message.length === 0} onClick={handleSendMessage}>Send</button>
                </form>
            </Footer>
        </Window>
    )
}