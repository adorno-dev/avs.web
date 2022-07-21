import { FormEvent, useCallback, useEffect, useRef, useState } from "react"
import { Message } from "../types/chat.type"
import { Contact } from "../types/contact.type"
import { Window, Titlebar, Body, Footer, MessageReceived, MessageSent } from "../styles/components/chat.style"
import { useDraggable } from "../utils/use-draggable"
import { ChatService } from "../services/chat.service"

export const Chat = ({contact, setContact}: {contact: Contact, setContact: (contact: Contact) => void}) =>
{
    const chatService = new ChatService()

    const {dragElement} = useDraggable()

    const [message, setMessage] = useState<string>("")

    const [messages, setMessages] = useState<Message[]>([])

    const handleSendMessage = (e: FormEvent) => {
        e.preventDefault()
        chatService
            .sendMessage(contact.id, message)
            .then(getMessages)
            .then(() => setMessage(""))
    }

    const refWindow = useRef<HTMLDivElement>(null)

    const refMessages = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        const timeout = setTimeout(() => {
            refMessages.current?.scrollIntoView({behavior: 'smooth'})
            clearTimeout(timeout)
        }, 1)        
    }

    const getMessages = useCallback(async () => {
        chatService
            .getChat(contact.id)        
            .then(chat => setMessages(chat.messages))

        scrollToBottom()
        dragElement(refWindow.current as HTMLElement)

    }, [])

    useEffect(() => {
        getMessages()
    }, [getMessages])

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