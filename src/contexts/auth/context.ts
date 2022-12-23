import { createContext, Dispatch } from "react";
import { User } from "../../models";
import { AuthActions } from "./actions";

export type AuthState = {
    accessToken: string,
    user?: User,
};

type AuthContext = {
    authState: AuthState,
    authDispatch: Dispatch<AuthActions>,
};

export const AuthContext = createContext<AuthContext | undefined>(undefined);