import { replaceInCollection } from "../../helpers";
import { Recipe } from "../../models";
import { RecipeAction, RecipeActionType } from "./actions";

export interface RecipeState {
  recipes: Recipe[];
}

export const recipeReducer = (
  state: RecipeState,
  action: RecipeAction
): RecipeState => {
  const { type, payload } = action;
  switch (type) {
    case RecipeActionType.RECIPE_CREATED:
      return {
        ...state,
        recipes: sortRecipes([...state.recipes, payload as Recipe]),
      };
    case RecipeActionType.RECIPE_DELETED:
      const ogRecipe = state.recipes.find(
        ({ id }) => id === (payload as Recipe).id
      );
      return {
        ...state,
        recipes: replaceRecipeInCollection(
          state.recipes,
          ogRecipe!,
          payload as Recipe
        ),
      };
    case RecipeActionType.RECIPE_EDITED:
      return {
        ...state,
        recipes: replaceRecipeInCollection(
          state.recipes,
          (payload as Recipe[])[0],
          (payload as Recipe[])[1]
        ),
      };
    case RecipeActionType.RECIPES_FETCHED:
      return {
        ...state,
        recipes: sortRecipes([...(payload as Recipe[])]),
      };
    default:
      return state;
  }
};

const compareRecipes = (a: Recipe, b: Recipe): number =>
  a.name.localeCompare(b.name);

const sortRecipes = (recipes: Recipe[]): Recipe[] => {
  return recipes.sort(compareRecipes);
};

const replaceRecipeInCollection = (
  recipes: Recipe[],
  ogRecipe: Recipe,
  newRecipe: Recipe
): Recipe[] => {
  return replaceInCollection(recipes, ogRecipe, newRecipe, compareRecipes);
};
