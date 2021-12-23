import { useContext, useState } from "react";
import { Toggle } from "..";
import { setThemeType, ThemeContext } from "../../../contexts/theme";
import { ThemeType } from "../../../models";
import { Moon, Sun } from "../../icons";

export const ThemeToggle = () => {
    const { state, dispatch } = useContext(ThemeContext);
    const [isToggled, setIsToggled] = useState(state.themeType === ThemeType.DARK);

    const toggleTheme = () => {
        setIsToggled(!isToggled);
        setThemeType(dispatch);
    }

    return (
        <>
            <Sun />
            <div className="spacer"/>
            <Toggle isOn={isToggled} onClick={toggleTheme} />
            <div className="spacer"/>
            <Moon />
        </>
    );
};