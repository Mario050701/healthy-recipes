import React, { useState, useEffect } from "react";
import user from "./assets/user.svg";
import timer from "./assets/timer.svg";
import food from "./assets/food.svg";
import arrowDown from "./assets/arrowDown.svg";
import Search from "./assets/Search.svg";

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [prepFilter, setPrepFilter] = useState("");
  const [cookFilter, setCookFilter] = useState("");
  const [showPrep, setShowPrep] = useState(false);
  const [showCook, setShowCook] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://recipes-api-cmg9.vercel.app/api/recipes")
      .then((res) => res.json())
      .then(setRecipes)
      .catch((err) => console.error(err));
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const prepOk =
      prepFilter === "" || recipe.prepMinutes <= Number(prepFilter);
    const cookOk =
      cookFilter === "" || recipe.cookMinutes <= Number(cookFilter);
    const searchOk =
      search === "" ||
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.ingredients?.some((ing) =>
        ing.toLowerCase().includes(search.toLowerCase())
      );
    return prepOk && cookOk && searchOk;
  });

  return (
    <>
      <div className="flex gap-4 mb-[24px] px-[132px] ">
        <div>
          <button
            onClick={() => setShowPrep(!showPrep)}
            className="bg-white mt-[64px] rounded-lg p-4 w-[181px] h-[47px] flex justify-between items-center"
          >
            <span className="font-semibold text-[#163A34]">
              {prepFilter || "Max Prep Time"}
            </span>
            <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
          </button>

          {showPrep && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg p-4 z-10">
              {["0", "5", "10"].map((time) => (
                <label key={time} className="flex items-center gap-2 mb-2">
                  <input
                    type="radio"
                    name="prep"
                    value={time}
                    checked={prepFilter === time}
                    onChange={(e) => setPrepFilter(e.target.value)}
                  />
                  {time} minutes
                </label>
              ))}
              <label className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                <input
                  type="radio"
                  name="prep"
                  value=""
                  checked={prepFilter === ""}
                  onChange={() => setPrepFilter("")}
                />
                Clear
              </label>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setShowCook(!showCook)}
            className="bg-white mt-[64px] w-[181px] h-[47px] shadow rounded-lg p-4 flex justify-between items-center"
          >
            <span className="font-semibold text-[#163A34]">
              {cookFilter || "Max Cook Time"}
            </span>
            <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
          </button>

          {showCook && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg p-4 z-10">
              {["0", "5", "10", "15", "20"].map((time) => (
                <label key={time} className="flex items-center gap-2 mb-2">
                  <input
                    type="radio"
                    name="cook"
                    value={time}
                    checked={cookFilter === time}
                    onChange={(e) => setCookFilter(e.target.value)}
                  />
                  {time} minutes
                </label>
              ))}
              <label className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                <input
                  type="radio"
                  name="cook"
                  value=""
                  checked={cookFilter === ""}
                  onChange={() => setCookFilter("")}
                />
                Clear
              </label>
            </div>
          )}
        </div>

        <div className="mt-[64px] ml-auto w-[310px] h-[27px]">
          <div className="flex items-center border border-gray-200 rounded-lg px-[16px] py-[14px] focus-within:ring-2 focus-within:ring-[#163A34]">
            <img
              src={Search}
              alt="Search icon"
              className="w-[17px] h-[17px] mr-2"
            />
            <input
              type="text"
              placeholder="Search by name or ingredient..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none text-[#163A34] font-semibold"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[40px] px-[132px]">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe._id}
            className="p-2 shadow-lg rounded-2xl bg-white flex flex-col min-h-[550px]"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-lg w-full h-[300px] object-cover"
            />
            <h2 className="text-[20px] font-medium text-[#163A34] my-2 leading-tight">
              {recipe.title}
            </h2>
            <p className="text-[#395852]">{recipe.overview}</p>

            <div className="text-sm text-gray-700 my-4">
              <div className="flex items-center gap-6 mb-2">
                <div className="flex items-center gap-2">
                  <img src={user} alt="user icon" className="w-5 h-5" />
                  <span className="text-[#163A34]">
                    Servings: {recipe.servings}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={timer} alt="timer icon" className="w-5 h-5" />
                  <span className="text-[#163A34]">
                    Prep: {recipe.prepMinutes} mins
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img src={food} alt="food icon" className="w-5 h-5" />
                <span className="text-[#163A34]">
                  Cook: {recipe.cookMinutes} min
                </span>
              </div>
            </div>

            <button className="mt-auto cursor-pointer mb-2 bg-[#163A34] w-full h-12 rounded-full text-white font-bold">
              View Recipe
            </button>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-300  mt-[96px]"></div>
    </>
  );
};

export default RecipesList;
