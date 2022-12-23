import { AuthActions } from "./actions";
import { AuthActionType } from "./actions";
import { AuthState } from "./context";

export const initialState: AuthState = {
    accessToken: ""
};

export const reducer = (
    state: AuthState,
    { type, payload }: AuthActions
): AuthState => {
    switch (type) {
        case AuthActionType.SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: payload ?? "",
            };
        case AuthActionType.SET_USER:
            return {
                ...state,
                user: payload,
            };
        case AuthActionType.SUCCESSFUL_LOGIN:
            return {
                ...state,
                accessToken: payload.accessToken,
                user: payload.user,
            };
        default:
            return state;
    }
};