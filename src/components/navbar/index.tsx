import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/esm/Navbar";
import { Brand } from "../common";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="nav-bar">
      <Container style={{ display: "flex", justifyContent: "center" }} fluid>
        <Navbar.Brand href="/">
          <Brand />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
