import { createContext, useReducer } from "react";
import { IContext, IProviderProps } from "..";
import { ThemeAction } from "./actions";
import { initialState, themeReducer, ThemeState } from "./reducer";

const ThemeContext = createContext<IContext<ThemeState, ThemeAction>>({
    state: initialState,
    dispatch: () => null,
});

const ThemeProvider = ({ children }: IProviderProps) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
export { setThemeType } from "./actions";