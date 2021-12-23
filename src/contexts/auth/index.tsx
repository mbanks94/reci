import { createContext, useReducer } from "react";
import { IContext, IProviderProps } from "..";
import { AuthAction } from "./actions";
import { authReducer, AuthState, initialState } from "./reducer";

const AuthContext = createContext<IContext<AuthState, AuthAction>>({
    state: initialState,
    dispatch: () => null,
});

const AuthProvider = ({ children }: IProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
export { login, logout } from "./actions";