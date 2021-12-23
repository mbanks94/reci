import { User } from "../../models";
import { AuthAction, AuthActionType } from "./actions";

export interface AuthState {
    user: User | undefined;
}

export const initialState: AuthState = {
    user: undefined
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    const { type, payload } = action;
    switch (type) {
        case AuthActionType.USER_LOGGED_IN:
            return {
                ...state,
                user: payload as User,
            };
        case AuthActionType.USER_LOGGED_OUT:
            return {
                ...state,
                user: undefined,
            };
        default:
            return state;
    }
};