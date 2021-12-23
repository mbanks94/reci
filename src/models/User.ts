import { Credentials } from "./Credentials";

export interface User {
    name: string;
    email: string;
    credentials: Credentials;
}