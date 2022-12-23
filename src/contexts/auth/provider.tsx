import { PropsWithChildren, useContext, useMemo, useReducer } from "react";
import { AuthContext } from "./context";
import { reducer } from "./reducer";
import { initialState } from "./reducer";

export const AuthContextProvider = (props: PropsWithChildren) => {
    const [authState, authDispatch] = useReducer(reducer, initialState);
 
    const value = useMemo(() => ({
        authState,
        authDispatch
    }), [authState, authDispatch]);

    return <AuthContext.Provider value={value} {...props} />
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used inside an AuthContextProvider.");
    }
    return context;
};