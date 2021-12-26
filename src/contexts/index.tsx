import { Dispatch, ReactNode } from "react";
import { AuthProvider } from "./auth";
import { RecipeProvider } from "./recipes";
import { ThemeProvider } from "./theme";

export interface IAction<TAction, TModel> {
  type: TAction;
  payload?: TModel | TModel[];
}

export interface IContext<TState, TAction> {
  state: TState;
  dispatch: Dispatch<TAction>;
}

export interface IProviderProps {
  children?: ReactNode | undefined;
}

export const withAppContext = ({ children }: IProviderProps) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RecipeProvider>
          {children}
        </RecipeProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
