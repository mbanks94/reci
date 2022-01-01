import { RecipeBox } from "./RecipeBox";
import { AddButton } from "../common";

export const Recipes = () => {
  const addRecipe = () => {
    console.log("add");
  };

  return (
    <>
      <div className="add-container">
        <AddButton onClick={addRecipe} text="Add a recipe" />
      </div>
      <RecipeBox />
    </>
  );
};
