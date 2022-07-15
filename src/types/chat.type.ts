export type Chat = {
    id: string,
    users: string[],
    messages: Message[]
}

export type Message = {
    timestamp: Date,
    id: string,
    sender_id: string,
    body: string
}