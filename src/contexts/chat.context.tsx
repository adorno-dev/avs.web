import { HubConnection } from "@microsoft/signalr";
import { createContext, ReactNode } from "react";

connection: HubConnection

export const ChatContext = createContext({})

export const ChatProvider = ({children}:{children: ReactNode}) => {
    return (
        <ChatContext.Provider value={{}}>
            {children}
        </ChatContext.Provider>
    )
}