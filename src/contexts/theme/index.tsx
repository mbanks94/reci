import { createContext, useContext, useState } from "react";
import { IProviderProps } from "..";
import { ThemeType } from "../../models";

interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContext);

const ThemeProvider = ({ children }: IProviderProps) => {
  const [theme, setTheme] = useState(ThemeType.LIGHT);
  const toggleTheme = () => {
    switch (theme) {
      case ThemeType.LIGHT:
        setTheme(ThemeType.DARK);
        break;
      case ThemeType.DARK:
      default:
        setTheme(ThemeType.LIGHT);
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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

export { ThemeProvider, useTheme };
