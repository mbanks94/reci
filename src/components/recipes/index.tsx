import { RecipeBox } from "./RecipeBox";
import { AddButton } from "../common";

export const Recipes = () => {
  const addRecipe = () => {
    console.log("add");
  };

  return (
    <>
      <RecipeBox />
      {/* <div className="add-container mt-50">
        <AddButton onClick={addRecipe} text="Add a recipe" />
      </div> */}
    </>
  );
};
