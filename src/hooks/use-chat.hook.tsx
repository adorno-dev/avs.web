import { useCallback } from "react";
import { ChatService } from "../services/chat.service";

export const useChat = () => {
    const getChatByContact = useCallback((id: string) => ChatService.getChatByContact(id), [])
    const sendMessage = useCallback((to: string, body: string) => ChatService.sendMessage(to, body), [])
    return {
        getChatByContact,
        sendMessage
    }
}