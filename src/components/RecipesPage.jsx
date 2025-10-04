import React from "react";
import RecipesSection from "./RecipesSection.jsx";
import RecipesHeroSection from "./RecipesHeroSection.jsx";
import RecipesList from "./RecipesList.jsx";

const RecipesPage = () => {
  return (
    <>
      <RecipesHeroSection />
      <RecipesList />
    </>
  );
};

export default RecipesPage;
