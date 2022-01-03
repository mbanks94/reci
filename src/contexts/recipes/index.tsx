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
import { useFetch } from "../../hooks";

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
  const { fetchState, setUrl, get } = useFetch<Recipe>("recipes.json");

  const getRecipes = useCallback(async () => {
    await get();

    if (!fetchState.isError) {
      dispatch({
        type: RecipeActionType.RECIPES_FETCHED,
        payload: fetchState.data,
      });
    }
  }, [fetchState, get]);

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
