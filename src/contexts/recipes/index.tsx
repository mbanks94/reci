import { createContext, useContext, useReducer } from "react";
import { IContext, IProviderProps } from "..";
import { RecipeAction } from "./actions";
import { initialState, recipeReducer, RecipeState } from "./reducer";

const RecipeContext = createContext<IContext<RecipeState, RecipeAction>>({
  state: initialState,
  dispatch: () => null,
});

const RecipeProvider = ({ children }: IProviderProps) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);
  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error("Recipe Context is undefined");
  }
  return context;
};

export { RecipeProvider, useRecipes };
export {
  createRecipe,
  deleteRecipe,
  editRecipe,
  fetchRecipe,
  fetchRecipes,
} from "./actions";
