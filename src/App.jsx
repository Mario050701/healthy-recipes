import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AboutPage from "./pages/AboutPage";
import RecipesPage from "./pages/RecipesPage";

import RecipeDetails from "./components/RecipeDetails";
import Home from "./pages/Home";


//!CODE REVIEW
// 1. Sufficient React imports
// 2. No variables used
// 3. No appropriate font
// 4. Structure - components, pages, assets
// 5. Images naming convention - lowerCase
// 6. Missing alt on images
// 7. Missing pattern on Hero on Homepage
// 8. Could use NavLink instead of Link
// 9. Responsive


const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
