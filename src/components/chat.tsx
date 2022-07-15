import { useMemo, useState } from "react"
import { useChat } from "../hooks/use-chat.hook"
import { Message } from "../types/chat.type"
import { Contact } from "../types/contact.type"
import { Window, Titlebar, Body, Footer, MessageInfo } from "./chat.style"

export const Chat = ({contact, setContact}: {contact?: Contact, setContact: (contact: Contact) => void}) =>
{
    const service = useChat()

    const [message, setMessage] = useState<string>("")

    const [messages, setMessages] = useState<Message[]>()

    const getData = async () => {
        if (contact?.id) {
            const data = await service.getChatByContact(contact.id)
            setMessages(data.messages)
        }
        
    }

    const handleSendMessage = () => {
        if (contact?.id) {
            service.sendMessage(contact.id, message)
            setMessage("")
            getData()
        }
    }

    useMemo(() => {
        getData()
    }, [])

    return (
        <Window>
            <Titlebar>
                <h3>{contact?.username}</h3>
                <h3 style={{cursor: "pointer"}} onClick={()=>setContact({id: "", username: ""})}>X</h3>
            </Titlebar>
            <Body>
                {messages?.map(m => <MessageInfo key={m.id}>{m.body}</MessageInfo>)}
            </Body>
            <Footer>
                <input type="text" placeholder="Your message..." value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={handleSendMessage}>Send</button>
            </Footer>
        </Window>
    )
}