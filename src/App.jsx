import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import BuiltForLife from "./components/BuiltForLife";
import ReadyToCook from "./components/ReadyToCook";
import AboutPage from "./components/AboutPage";
import RecipesPage from "./components/RecipesPage";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <BuiltForLife />
                <ReadyToCook />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
