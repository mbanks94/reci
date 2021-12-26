import { replaceInCollection } from "../../helpers";
import { Recipe } from "../../models";
import { RecipeAction, RecipeActionType } from "./actions";

export interface RecipeState {
  recipe?: Recipe;
  recipes: Recipe[];
}

export const initialState: RecipeState = {
  recipes: [
    {
      id: 0,
      url: "",
      name: "Fish Tacos",
      short_description: "",
      long_description: "",
      nutritional_facts: [],
      ingredients: [],
      steps: [],
      notes: [],
    },
    {
      id: 1,
      url: "",
      name: "Pork Chops",
      short_description: "",
      long_description: "",
      nutritional_facts: [],
      ingredients: [],
      steps: [],
      notes: [],
    },
    {
      id: 2,
      url: "",
      name: "Chicken Nuggets",
      short_description: "",
      long_description: "",
      nutritional_facts: [],
      ingredients: [],
      steps: [],
      notes: [],
    },
    {
      id: 3,
      url: "",
      name: "Brava Sauce",
      short_description: "",
      long_description: "",
      nutritional_facts: [],
      ingredients: [],
      steps: [],
      notes: [],
    },
  ],
};

export const recipeReducer = (
  state: RecipeState,
  action: RecipeAction
): RecipeState => {
  const { type, payload } = action;
  switch (type) {
    case RecipeActionType.RECIPE_CREATED:
      return {
        ...state,
        recipe: payload as Recipe,
        recipes: [...state.recipes, payload as Recipe],
      };
    case RecipeActionType.RECIPE_DELETED:
      return {
        ...state,
        recipe: undefined,
        recipes: [
          ...state.recipes.filter(({ id }) => id !== (payload as Recipe).id),
        ],
      };
    case RecipeActionType.RECIPE_EDITED:
      return {
        ...state,
        recipe: undefined,
        recipes: replaceInCollection(
          state.recipes,
          (payload as Recipe[])[0],
          (payload as Recipe[])[1],
          (a, b) => a.name.localeCompare(b.name)
        ),
      };
    case RecipeActionType.RECIPE_FETCHED:
      return {
        ...state,
        recipe: payload as Recipe,
      };
    case RecipeActionType.RECIPES_FETCHED:
      return {
        ...state,
        recipes: payload as Recipe[],
      };
    default:
      return state;
  }
};
