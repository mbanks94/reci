import { useRecipes } from "../../contexts/recipes";

export const RecipeDisplay = () => {
  const { recipes } = useRecipes().state;
  return (
    <>
      {!!recipes &&
        recipes.map(recipe => {
          return <div key={recipe.id}>{recipe.name}</div>;
        })}
    </>
  );
};
