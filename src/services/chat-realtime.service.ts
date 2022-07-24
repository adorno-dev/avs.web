import * as signalr from "@microsoft/signalr"
import { Tokens } from "../types/authentication.context.type"
import {Message} from "../types/chat.type"

export class ChatRealtimeService {
    public connection: signalr.HubConnection
    constructor(tokens?: Tokens, onReceiveMessage?: any) {
        this.connection = new signalr.HubConnectionBuilder()
            .withUrl("https://localhost:5000/chatHub", { 
                skipNegotiation: true, 
                transport: signalr.HttpTransportType.WebSockets, 
                // withCredentials: true,
                accessTokenFactory() {
                    return tokens?.token as string
                },
            })
            .withAutomaticReconnect()
            .build()

            // this.connection.on("ReceivedMessage", (message: Message) => {
            //     console.log(message)
            // })

            if (onReceiveMessage)
                this.connection.on("ReceivedMessage", onReceiveMessage)
    }
    // async onReceivedMessage(message: Message) {
    //     console.log("[chat-realtime.service.ts]", message)
    // }
    async start() {
        if (this.connection.state == "Disconnected")
            await this.connection
                .start()
                .catch((err)=>console.error(err))
    }
    async stop() {
        await this.connection
            .stop()
    }
    async send(message: Message) {
        await this.connection
            .send("NewMessage", message)
    }
}