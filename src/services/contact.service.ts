import { AxiosError } from "axios";
import { Tokens } from "../types/authentication.context.type";
import { ErrorResponse } from "../types/authentication.type";
import { ApiService } from "./api.service";

export class ContactService extends ApiService {
    constructor(tokens?: Tokens) {
        super(tokens)
    }
    async getContacts() {
        try {
            return (await this.api.get("contacts")).data
        } catch (exception) {
            return ((exception as AxiosError).response)?.data as ErrorResponse
        }
    }
}