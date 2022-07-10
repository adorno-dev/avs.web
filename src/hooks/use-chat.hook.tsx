import { useCallback } from "react";
import { ChatService } from "../services/chat.service";

export const allChats = useCallback(() => ChatService.allChats(), [])