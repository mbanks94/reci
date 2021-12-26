import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/esm/Navbar";
import { useTheme } from "../../contexts/theme";
import { Brand, ThemeToggle } from "../common";

export const ResponsiveNavBar = () => {
  const { theme } = useTheme();
  return (
    <Navbar expand="lg" className="nav-bar" style={{ padding: 0 }}>
      <Container className={theme.toLowerCase()} fluid>
        <Navbar.Brand href="/">
          <Brand />
        </Navbar.Brand>

        <div className="themetoggle">
          <ThemeToggle />
        </div>
      </Container>
    </Navbar>
  );
};
