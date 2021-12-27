import Container from "react-bootstrap/esm/Container";
import { RecipeDisplay } from "./RecipeDisplay";
import Row from "react-bootstrap/esm/Row";
import { AddButton, SearchBar } from "../common";
import Col from "react-bootstrap/esm/Col";

// contains search bar, add button, and recipe cards
export const Recipes = () => {
  const addRecipe = () => {
    console.log("add");
  };

  return (
    <>
      <Container className="pt-4">
        <Row className="mb-5">
          <Container>
            <Row>
              <Col>
                <SearchBar />
              </Col>
              <Col>
                <AddButton onClick={addRecipe} text="+" />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="mb-4 mt-4">
          <RecipeDisplay />
        </Row>
      </Container>
    </>
  );
};
