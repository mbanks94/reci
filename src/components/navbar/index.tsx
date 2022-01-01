import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/esm/Navbar";
import { Brand, SearchBar } from "../common";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="nav-bar">
      <Container fluid>
        <Navbar.Brand href="/">
          <Brand />
        </Navbar.Brand>

        <SearchBar />
      </Container>
    </Navbar>
  );
};
