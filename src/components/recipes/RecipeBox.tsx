import { useState } from "react";

export const RecipeBox = () => {
  // const { getRecipes, recipeState } = useRecipes();
  // const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [lidState, setLidState] = useState<"open" | "closed">("closed");

  // useEffect(() => {
  //   getRecipes();
  // }, [getRecipes]);

  // useEffect(() => {
  //   setRecipes(recipeState.recipes);
  // }, [recipeState]);

  const handleLidClick = () => {
    if (lidState === "closed") {
      setLidState("open");
    } else {
      setLidState("closed");
    }
  };

  return (
    <>
      <div className="scene mt-100" onClick={handleLidClick}>
        <div className="box">
          <div className={`box-lid lid-${lidState}`}>
            <div className="face lid front" />
            <div className="face lid back" />
            <div className="face lid right" />
            <div className="face lid left" />
            <div className="face lid top" />
          </div>

          <div className="box-btm">
            <div className="face btm front" />
            <div className="face btm back" />
            <div className="face btm right" />
            <div className="face btm left" />
            <div className="face btm bottom" />
          </div>
        </div>
      </div>
      {/* <div className="recipe-box mt-25">
        <div className="box-lid"></div>
        <div className="box-bottom">
          {recipes.map((recipe, i) => {
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
      </div> */}
    </>
  );
};
