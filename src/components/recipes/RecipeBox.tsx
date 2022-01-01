import { useRecipes } from "../../contexts/recipes";

export const RecipeBox = () => {
  const { recipes } = useRecipes().state;
  return (
    <>
      <div className="recipe-box">
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
      </div>
    </>
  );
};
