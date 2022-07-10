import { Api } from "./api.service"

const allContacts = async () => {
    try {
        return (await Api.get("contacts")).data
    } catch (exception) {
        return exception
    }
}

export const ContactService = {
    allContacts
}