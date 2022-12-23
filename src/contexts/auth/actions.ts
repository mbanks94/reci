import { User } from "../../models";

export enum AuthActionType {
    SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN",
    SET_USER = "SET_USER",
    SUCCESSFUL_LOGIN = "SUCCESSFUL_LOGIN",
}

export type SetAccessTokenAction = {
    type: AuthActionType.SET_ACCESS_TOKEN,
    payload?: string;
}

export type SetUserAction = {
    type: AuthActionType.SET_USER,
    payload?: User;
}

export type SuccessfulLoginAction = {
    type: AuthActionType.SUCCESSFUL_LOGIN,
    payload: { accessToken: string; user: User; };
}

export type AuthActions = SetAccessTokenAction | SetUserAction | SuccessfulLoginAction;