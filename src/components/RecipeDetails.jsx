import React from "react";
import { useLocation } from "react-router-dom";
import userIcon from "./assets/user.svg";
import timerIcon from "./assets/timer.svg";
import foodIcon from "./assets/food.svg";
import right from "./assets/right.svg";

import MoreRecipes from "./MoreRecipes";

const RecipeDetails = () => {
  const { state: recipe } = useLocation();

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <>
      <div className="relative py-12">
        <p className="text-gray-400 -mb-4 text-[18px] ml-[124px]">
          Recipes /{" "}
          <span className="font-semibold  text-[#163A34]">{recipe.title}</span>
        </p>

        <img
          src={recipe.image}
          alt=""
          className="absolute left-[124px] top-[91px] w-[580px] h-[580px] rounded-lg object-cover"
        />

        <div className="ml-[748px] flex flex-col">
          <h1 className="text-[48px] font-extrabold text-[#163A34] mb-5">
            {recipe.title}
          </h1>

          <p className="text-[#395852] text-[20px] mb-6">{recipe.overview}</p>

          <div className="flex gap-[16px] mb-6">
            <div className="flex items-center gap-2 font-semibold text-[18px] text-[#163A34]">
              <img
                src={userIcon}
                alt="Servings"
                className="w-[20px] h-[20px]"
              />
              <span>Servings: {recipe.servings} </span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-[18px] text-[#163A34]">
              <img src={timerIcon} alt="Prep" className="w-[20px] h-[20px]" />
              <span>Prep: {recipe.prepMinutes} mins</span>
            </div>
            <div className="flex items-center gap-4 font-semibold text-[18px] text-[#163A34]">
              <img src={foodIcon} alt="Cook" className="w-[20px] h-[20px]" />
              <span>Cook: {recipe.cookMinutes} mins</span>
            </div>
          </div>

          {/* Ingredients */}

          <h2 className="text-[24px] font-bold text-[#163A34] mb-[16px]">
            Ingredients:
          </h2>
          <ul className="space-y-[8px]">
            {recipe.ingredients?.map((ing, idx) => (
              <li
                key={idx}
                className="flex items-center text-[#395852] text-[20px] gap-2"
              >
                <img src={right} alt="icon" className="w-[20px] h-[20px]" />
                <span>{ing}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-[24px] font-bold text-[#163A34] mt-[20px] mb-[16px]">
            Instructions:
          </h2>
          <ul className=" space-y-2">
            {recipe.instructions?.map((step, idx) => (
              <li
                key={idx}
                className="flex items-center text-[#395852] text-[20px] gap-2"
              >
                <img src={right} alt="icon" className="w-[20px] h-[20px]" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="border-t border-gray-300 mb-[85px] mt-[96px]"></div>

          <h2 className="text-[32px] ml-[124px]  font-bold text-[#163A34] ">
            More Recipes
          </h2>
          <div className="flex px-[132px] justify-between mt-8">
            <MoreRecipes />
            <MoreRecipes />
            <MoreRecipes />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
