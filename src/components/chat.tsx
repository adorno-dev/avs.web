import { Contact } from "../types/compose.type"
import { Window, Titlebar, Body, Footer } from "./chat.style"

export const Chat = ({contact, setContact}: {contact?: Contact, setContact: (contact: Contact) => void}) =>
{
    return (
        <Window>
            <Titlebar>
                <h3>{contact?.username}</h3>
                <h3 style={{cursor: "pointer"}} onClick={()=>setContact({id: "", username: ""})}>X</h3>
            </Titlebar>
            <Body>
                ..
            </Body>
            <Footer>
                <input type="text" placeholder="Your message..." />
                <button>Toggle</button>
            </Footer>
        </Window>
    )
}