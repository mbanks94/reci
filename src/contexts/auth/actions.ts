import { IAction } from "..";
import { User } from "../../models";

export enum AuthActionType {
    USER_LOGGED_IN = "USER_LOGGED_IN",
    USER_LOGGED_OUT = "USER_LOGGED_OUT",
}

export interface AuthAction
    extends IAction<AuthActionType, User> { }

export const login = (user: User, dispatch: (action: AuthAction) => void) => {
    dispatch({
        type: AuthActionType.USER_LOGGED_IN,
        payload: user,
    });
};

export const logout = (user: User, dispatch: (action: AuthAction) => void) => {
    dispatch({
        type: AuthActionType.USER_LOGGED_OUT,
        payload: user,
    });
};