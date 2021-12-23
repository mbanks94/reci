import { Children, useContext } from "react";
import { ThemeContext } from "../../../contexts/theme";
import { getTheme } from "../../../helpers";

interface ThemedProps {
    children: JSX.Element | JSX.Element[];
}

export const Themed = ({ children }: ThemedProps) => {
    const { state } = useContext(ThemeContext);

    return (
        <div className={getTheme(state.themeType)}>
            {children}
        </div>
    );
};