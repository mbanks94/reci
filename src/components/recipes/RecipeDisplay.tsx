import { useRecipes } from "../../contexts/recipes";
import { RecipeBox } from "./RecipeBox";

export const RecipeDisplay = () => {
  const { recipes } = useRecipes().state;
  return (
    <>
      <RecipeBox>
        {!!recipes &&
          recipes.map((recipe, i) => {
            return (
              <div
                className={"recipe"}
                style={{ bottom: i * 195, width: 80 - i * 2 + "vm" }}
                key={recipe.id}
              >
                {recipe.name}
              </div>
            );
          })}
      </RecipeBox>
    </>
  );
};
