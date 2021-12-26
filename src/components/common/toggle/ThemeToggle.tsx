import { useState } from "react";
import { Toggle } from "..";
import { useTheme } from "../../../contexts/theme";
import { ThemeType } from "../../../models";
import { Moon, Sun } from "../../icons";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isToggled, setIsToggled] = useState(theme === ThemeType.DARK);

  const toggled = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <>
      <Sun />
      <div className="spacer" />
      <Toggle isOn={isToggled} onClick={toggled} />
      <div className="spacer" />
      <Moon />
    </>
  );
};
