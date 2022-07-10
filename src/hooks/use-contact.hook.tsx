import { useCallback } from "react"
import { ContactService } from "../services/contact.service"

export const useContact = () => {
    const allContacts = useCallback(() => ContactService.allContacts(), [])
    return {
        allContacts
    }
}