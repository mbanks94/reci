import { IProviderProps } from "../../contexts";

export const RecipeBox = ({ children }: IProviderProps) => {
  return <div className="recipe-box">{children}</div>;
};
