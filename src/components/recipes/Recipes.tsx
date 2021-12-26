import Container from "react-bootstrap/esm/Container";
import { RecipeDisplay } from "./RecipeDisplay";
import Row from "react-bootstrap/esm/Row";
import { AddButton } from "../common";

export const Recipes = () => {
  const addRecipe = () => {
    console.log("add");
  };

  return (
    <>
      <Container>
        <Row>
          <RecipeDisplay />
        </Row>
        <Row>
          <div>
            <AddButton onClick={addRecipe} text="+" />
          </div>
        </Row>
      </Container>
    </>
  );
};
