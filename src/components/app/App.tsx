import { Login, Recipes } from '..';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { withRecipeContext as WithRecipeContext } from '../../contexts';
import { NavBar } from '..';

const RecipeContext = (): JSX.Element => (
  <WithRecipeContext>
    <Recipes />
  </WithRecipeContext>
);

export const App = () => {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="App-content">
          <Router>
            <Routes>
              <Route path="/auth" element={<Login />} />
              <Route index element={RecipeContext()} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}
