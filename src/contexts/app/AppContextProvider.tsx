import { combineComponents } from "../../helpers";
import { AuthContextProvider } from "../auth";
import { HttpContextProvider } from "../http";
import { ThemeProvider } from "../theme";

const providers = [
    ThemeProvider,
    AuthContextProvider,
    HttpContextProvider,
];

export const AppContextProvider = combineComponents(...providers);