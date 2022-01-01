import { useState } from "react";

export const RecipeBox = () => {
  // const { getRecipes, recipeState } = useRecipes();
  // const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [boxLid, setBoxLid] = useState("closed");

  // useEffect(() => {
  //   getRecipes();
  // }, [getRecipes]);

  // useEffect(() => {
  //   setRecipes(recipeState.recipes);
  // }, [recipeState]);

  const handleLidClick = () => {
    if (boxLid === "closed") {
      setBoxLid("open");
    } else {
      setBoxLid("closed");
    }
  };

  return (
    <>
      <div className="scene mt-25">
        <div className={`box-lid ${boxLid}`} onClick={handleLidClick}>
          <div className="face lid front">click me</div>
          <div className="face lid back" />
          <div className="face lid right" />
          <div className="face lid left" />
          <div className="face lid top" />
        </div>

        <div className="box-btm">
          <div className="face btm front" />
          <div className="face btm" />
          <div className="face btm right" />
          <div className="face btm left" />
          <div className="face btm bottom" />
        </div>
        {/* <div className="box">  
        </div> */}
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
