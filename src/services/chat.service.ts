import { Api } from "./api.service"

const allChats = async () => {
    try {
        return (await Api.get("chats")).data
    } catch (exception) {
        return exception
    }
}

const postChatMessage = async () => {
    try {
        return (await Api.post("chats", {})).data
    } catch (exception) {
        return exception
    }
}

export const ChatService = {
    allChats
}