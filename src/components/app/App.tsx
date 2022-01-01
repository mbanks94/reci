import { Login, Recipes, NavBar } from "..";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import _ from "lodash";

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

  return (
    <>
      <NavBar />
      <div className="app-container">
        <Router>
          <Routes>
            <Route path="/auth" element={<Login />} />
            <Route index element={<Recipes />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};
