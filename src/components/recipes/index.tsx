import { RecipeBox } from "./RecipeBox";
import { AddButton } from "../common";
import { useRecipes } from "../../contexts/recipes";
import { useEffect, useState } from "react";
import { Recipe } from "../../models";
import { RecipeCard } from "./RecipeCard";

export const Recipes = () => {
  const { getRecipes, recipeState } = useRecipes();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  useEffect(() => {
    setRecipes(recipeState.recipes);
  }, [recipeState]);

  const addRecipe = () => {
    console.log("add");
  };

  return (
    <>
      <RecipeBox>
        {recipes.map((recipe, i) => {
          return <RecipeCard key={i} id={i} recipe={recipe} />;
        })}
      </RecipeBox>
      {/* <div className="add-container mt-50">
        <AddButton onClick={addRecipe} text="Add a recipe" />
      </div> */}
    </>
  );
};
