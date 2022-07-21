import { Tokens } from "../types/authentication.context.type";
import { ApiService } from "./api.service";

export class ContactService extends ApiService {
    constructor(tokens?: Tokens) {
        super(tokens)
    }
    async getContacts() {
        return await this.api.get("contacts")
            .then(res => res.data)
            .catch(err => err.response)
    }
}