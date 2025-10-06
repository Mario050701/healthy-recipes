import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.svg";
import timer from "../assets/timer.svg";
import food from "../assets/food.svg";
import arrowDown from "../assets/arrowDown.svg";
import Search from "../assets/Search.svg";

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [prepFilter, setPrepFilter] = useState("");
  const [cookFilter, setCookFilter] = useState("");
  const [showPrep, setShowPrep] = useState(false);
  const [showCook, setShowCook] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);


  // could use custom hook
  useEffect(() => {
    setLoading(true);
    fetch("https://recipes-api-cmg9.vercel.app/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
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

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen -mt-80">
        <div className="w-20 h-20 border-5 border-t-[#163A34] border-gray-200 rounded-full animate-spin"></div>
        <p className="mt-5 text-[#163A34] font-bold text-lg">
          Loading recipes...
        </p>
      </div>
    );
  }

  const renderFilterDropdown = (
    filter,
    setFilter,
    show,
    setShow,
    options,
    label
  ) => (
    <div className="relative">
      <button
        onClick={() => setShow(!show)}
        className="bg-white mt-[64px] rounded-lg p-4 w-[181px] h-[47px] flex justify-between items-center"
      >
        <span className="font-semibold text-[#163A34]">{filter || label}</span>
        <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
      </button>
      {show && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg p-4 z-10">
          {options.map((time) => (
            <label
              key={time}
              className="flex items-center gap-2 mb-2 cursor-pointer"
            >
              <input
                type="radio"
                name={label}
                value={time}
                checked={filter === time}
                onChange={(e) => setFilter(e.target.value)}
              />
              {time} minutes
            </label>
          ))}
          <label className="flex items-center gap-2 text-xs text-gray-500 mt-2 cursor-pointer">
            <input
              type="radio"
              name={label}
              value=""
              checked={filter === ""}
              onChange={() => setFilter("")}
            />
            Clear
          </label>
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="flex gap-4 mb-[24px] px-[132px]">
        {renderFilterDropdown(
          prepFilter,
          setPrepFilter,
          showPrep,
          setShowPrep,
          ["0", "5", "10"],
          "Max Prep Time"
        )}
        {renderFilterDropdown(
          cookFilter,
          setCookFilter,
          showCook,
          setShowCook,
          ["0", "5", "10", "15", "20"],
          "Max Cook Time"
        )}

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
        {filteredRecipes.length === 0 ? (
          <p className="col-span-3 text-center text-[#163A34] font-semibold text-lg mt-10">
            No recipes found
          </p>
        ) : (
          filteredRecipes.map((recipe) => (
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

              <Link
                to={`/recipe/${recipe._id}`}
                state={recipe}
                className="mt-auto block text-center mb-2 bg-[#163A34] w-full h-12 rounded-full text-white font-bold leading-12"
              >
                View Recipe
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="border-t border-gray-300 mt-[96px]"></div>
    </>
  );
};

export default RecipesList;
