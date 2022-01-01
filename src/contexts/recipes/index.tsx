import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { IProviderProps } from "..";
import { Recipe } from "../../models";
import { RecipeActionType } from "./actions";
import { recipeReducer, RecipeState } from "./reducer";

const initialState: RecipeState = {
  recipes: [],
};

interface IRecipeContext {
  recipeState: RecipeState;
  getRecipes: () => void;
  createRecipe: () => void;
  deleteRecipe: () => void;
  editRecipe: () => void;
}

const RecipeContext = createContext<IRecipeContext>({} as IRecipeContext);

const RecipeProvider = ({ children }: IProviderProps) => {
  const [recipeState, dispatch] = useReducer(recipeReducer, initialState);

  const getRecipes = useCallback(async () => {
    const recipes: Recipe[] = await fetch("recipes.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());

    dispatch({
      type: RecipeActionType.RECIPES_FETCHED,
      payload: recipes,
    });
  }, []);
  
  const createRecipe = useCallback(() => {}, []);
  const deleteRecipe = useCallback(() => {}, []);
  const editRecipe = useCallback(() => {}, []);

  const value = useMemo(
    () => ({
      recipeState,
      getRecipes,
      createRecipe,
      deleteRecipe,
      editRecipe,
    }),
    [recipeState, getRecipes, createRecipe, deleteRecipe, editRecipe]
  );

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
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
