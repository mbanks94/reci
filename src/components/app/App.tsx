import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import _ from "lodash";
import { Login, NavBar } from "..";
import { Home } from "../home/Home";
import { useAuth } from "../../contexts/auth";

export const App = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  window.addEventListener("resize", () => {
    vh = window.innerHeight * 0.01;
    debouncedSetViewportHeight(vh);
  });
  const debouncedSetViewportHeight = _.debounce((vh: number) => {
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, 100);

  const { authState: { accessToken } } = useAuth();
  if (!accessToken) {
    return <Login />;
  }

  return (
    <>
      <NavBar />
      <div className="app-container">
        <Router>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};
