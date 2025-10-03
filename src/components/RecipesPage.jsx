import React from "react";
import RecipesSection from "./RecipesSection";

const RecipesPage = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">All Recipes</h1>
      <RecipesSection />
    </main>
  );
};

export default RecipesPage;
