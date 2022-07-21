import { Tokens } from "../types/authentication.context.type";
import { ApiService } from "./api.service";

export class ChatService extends ApiService {
    constructor(tokens?: Tokens) {
        super(tokens)
    }
    async getChat(contactId: string) {
        try {
            return (await this.api.get(`chats/contact/${contactId}`)).data
        } catch (exception) {
            console.error(exception)
        }
    }
    async sendMessage(to: string, body: string) {
        try {
            return (await this.api.post("message", {to, body}))
        } catch (exception) {
            console.error(exception)
        }
    }
}