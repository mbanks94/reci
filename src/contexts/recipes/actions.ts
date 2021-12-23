import { IAction } from "..";
import { Recipe } from "../../models";

export enum RecipeActionType {
    RECIPE_CREATED = "RECIPE_CREATED",
    RECIPE_DELETED = "RECIPE_DELETED",
    RECIPE_EDITED = "RECIPE_EDITED",
    RECIPE_FETCHED = "RECIPE_FETCHED",
    RECIPES_FETCHED = "RECIPES_FETCHED",
}

export interface RecipeAction
    extends IAction<RecipeActionType, Recipe> { }

export const createRecipe = (recipe: Recipe, dispatch: (action: RecipeAction) => void) => {
    dispatch({
        type: RecipeActionType.RECIPE_CREATED,
        payload: recipe,
    });
};

export const deleteRecipe = (recipe: Recipe, dispatch: (action: RecipeAction) => void) => {
    dispatch({
        type: RecipeActionType.RECIPE_DELETED,
        payload: recipe,
    });
};

export const editRecipe = (recipes: Recipe[], dispatch: (action: RecipeAction) => void) => {
    dispatch({
        type: RecipeActionType.RECIPE_EDITED,
        payload: recipes,
    });
};

export const fetchRecipe = (recipe: Recipe, dispatch: (action: RecipeAction) => void) => {
    dispatch({
        type: RecipeActionType.RECIPE_FETCHED,
        payload: recipe,
    });
};

export const fetchRecipes = (recipes: Recipe[], dispatch: (action: RecipeAction) => void) => {
    dispatch({
        type: RecipeActionType.RECIPES_FETCHED,
        payload: recipes,
    });
};