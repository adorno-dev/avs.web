import { FormEvent, useCallback, useEffect, useRef, useState } from "react"
import { Message } from "../types/chat.type"
import { Contact } from "../types/contact.type"
import { Window, Titlebar, Body, Footer, MessageReceived, MessageSent } from "../styles/components/chat.style"
import { useDraggable } from "../utils/use-draggable"
import { ChatService } from "../services/chat.service"
import { ChatRealtimeService } from "../services/chat-realtime.service"
import { TokenService } from "../services/token.service"

const chatService = new ChatService()
const chatRealtimeService = new ChatRealtimeService(TokenService.getTokenLocalStorage())

export const Chat = ({contact, setContact}: {contact: Contact, setContact: (contact: Contact) => void}) =>
{
    const refWindow = useRef<HTMLDivElement>(null)

    const refMessages = useRef<HTMLDivElement>(null)

    const [message, setMessage] = useState<string>("")

    const [messages, setMessages] = useState<Message[]>([])

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault()
        await chatService
            .sendMessage(contact.id, message)
            .then(getMessages)
        
        await chatRealtimeService.send({timestamp: new Date(Date.now()), id: "12323", sender_id: contact.id, body: message})

        setMessage("")
    }

    const scrollToBottom = () => refMessages.current?.scrollIntoView({behavior: 'smooth'})

    const getMessages = useCallback(async () => {
        await chatService
            .getChat(contact.id)
            .then((chat) => setMessages(chat.messages))
    }, [contact.id])

    useDraggable(refWindow)

    useEffect(() => {
        async function watch() {
            await chatRealtimeService
            .start()
        }

        watch()
    }, [])

    useEffect(() => {
        getMessages()
    }, [getMessages])

    useEffect(() => scrollToBottom())

    return (
        <Window ref={refWindow}>
            <Titlebar className="draggable-header">
                <h3>{contact?.username}</h3>
                <h3 style={{cursor: "pointer"}} onClick={()=>setContact({id: "", username: ""})}>X</h3>
            </Titlebar>
            <Body>
                {messages?.map(m => m.sender_id !== contact?.id ? 
                    <MessageSent key={m.id}>{m.body}</MessageSent> :
                    <MessageReceived key={m.id}>{m.body}</MessageReceived>
                    )}
                <div ref={refMessages} />
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