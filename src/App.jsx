import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import RecipesSection from "./components/RecipesSection";
import BuiltForLife from "./components/BuiltForLife";
import ReadyToCook from "./components/ReadyToCook";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RecipesSection />
      <BuiltForLife />
      <ReadyToCook />
      <Footer />
    </>
  );
};

export default App;
