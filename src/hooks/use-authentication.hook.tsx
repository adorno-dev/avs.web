import { useContext } from "react";
import { AuthenticationContext } from "../contexts/authentication.context";
import { Authentication } from "../types/authentication.context.type";

export const useAuthentication = () => useContext(AuthenticationContext) as Authentication