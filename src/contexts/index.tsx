import { Dispatch, ReactNode } from "react";
import { RecipeProvider } from "./recipes";

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
