import { createContext, useContext, useReducer } from "react";
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

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("Theme Context is undefined");
    }
    return context;
};

export { ThemeContext, ThemeProvider, useTheme };
export { setThemeType } from "./actions";