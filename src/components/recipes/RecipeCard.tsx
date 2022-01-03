import { Recipe } from "../../models";

interface IRecipeCard {
  id: number;
  recipe: Recipe;
}

export const RecipeCard = ({ id, recipe }: IRecipeCard) => {
  return (
    <div
      className={"recipe-card"}
      style={{  bottom: id * -10, width: 100 - id * 0.5 + "%" }}
    >
      {recipe.name}
    </div>
  );
};
