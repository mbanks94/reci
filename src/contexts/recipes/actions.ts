import { IAction } from "..";
import { Recipe } from "../../models";

export enum RecipeActionType {
  RECIPE_CREATED = "RECIPE_CREATED",
  RECIPE_DELETED = "RECIPE_DELETED",
  RECIPE_EDITED = "RECIPE_EDITED",
  RECIPE_FETCHED = "RECIPE_FETCHED",
  RECIPES_FETCHED = "RECIPES_FETCHED",
}

export interface RecipeAction extends IAction<RecipeActionType, Recipe> {}
