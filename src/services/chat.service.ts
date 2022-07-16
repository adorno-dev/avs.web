import { Api } from "./api.service"

const getChatByContact = async (id: string) => {
    try {
        return (await Api.get(`chats/contact/${id}`)).data
    } catch (exception) {
        return exception
    }
}

const sendMessage = async (to: string, body: string) => {
    try {
        return (await Api.post("message", {to, body})).data
    } catch (exception) {
        return exception
    }
}

export const ChatService = {
    getChatByContact,
    sendMessage
}