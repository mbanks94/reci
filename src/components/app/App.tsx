import { Login, Recipes, ResponsiveNavBar } from "..";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTheme } from "../../contexts/theme";

export const App = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="App">
        <ResponsiveNavBar />
        <div className="App-content">
          <div className={theme.toLowerCase()}>
            <Router>
              <Routes>
                <Route path="/auth" element={<Login />} />
                <Route index element={<Recipes />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </>
  );
};
