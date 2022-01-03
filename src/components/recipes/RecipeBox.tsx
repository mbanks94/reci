import { ReactNode, useState } from "react";

interface IRecipeBox {
  children: ReactNode;
}

export const RecipeBox = ({ children }: IRecipeBox) => {
  const [lidState, setLidState] = useState<"open" | "closed">("closed");

  const handleLidClick = () => {
    if (lidState === "closed") {
      setLidState("open");
    } else {
      setLidState("closed");
    }
  };

  return (
    <>
      <div className="scene mt-100">
        <div className="box">
          <div className={`box-lid lid-${lidState}`} onClick={handleLidClick}>
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

            <div className="recipe-cards">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
