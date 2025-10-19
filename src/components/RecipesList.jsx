import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.svg";
import timer from "../assets/timer.svg";
import food from "../assets/food.svg";
import arrowDown from "../assets/arrowDown.svg";
import search from "../assets/search.svg";

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [prepFilter, setPrepFilter] = useState("");
  const [cookFilter, setCookFilter] = useState("");
  const [showPrep, setShowPrep] = useState(false);
  const [showCook, setShowCook] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

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
      searchValue === "" ||
      recipe.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      recipe.ingredients?.some((ing) =>
        ing.toLowerCase().includes(searchValue.toLowerCase())
      );
    return prepOk && cookOk && searchOk;
  });

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen -mt-80">
        <div className="w-20 h-20 border-5 border-t-primary border-line-color rounded-full animate-spin"></div>
        <p className="mt-5 text-primary font-bold text-lg font-main">
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
        className="bg-white mt-[64px] border border-line-color rounded-lg p-4 w-[181px] h-[47px] flex justify-between items-center font-nunitoSans text-secondary"
      >
        <span className="font-semibold text-primary">{filter || label}</span>
        <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
      </button>
      {show && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg p-4 z-10">
          {options.map((time) => (
            <label
              key={time}
              className="flex items-center gap-2 mb-2 cursor-pointer font-nunitoSans text-secondary"
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
          <label className="flex items-center gap-2 text-xs text-secondary mt-2 cursor-pointer font-nunitoSans">
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
      <div className="flex flex-col lg:flex-row gap-4 mb-[24px] px-[132px] max-md:-gap-[20px]">
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

        <div className="w-full lg:w-[310px] lg:ml-auto mt-4 lg:mt-[64px]">
          <div className="flex items-center border border-line-color rounded-lg px-[16px] py-[14px] focus-within:ring-2 focus-within:ring-primary bg-white">
            <img
              src={search}
              alt="Search icon"
              className="w-[17px] h-[17px] mr-2"
            />
            <input
              type="text"
              placeholder="Search by name or ingredient..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1 outline-none text-primary font-semibold font-nunitoSans"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 max-md:grid-cols-1  lg:grid-cols-3 gap-[40px] px-[132px] ">
        {filteredRecipes.length === 0 ? (
          <p className="col-span-3 text-center text-primary font-semibold text-lg font-main mt-10">
            No recipes found
          </p>
        ) : (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe._id}
              className="shadow-lg rounded-2xl bg-white p-3 flex flex-col min-h-[550px]"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded-lg w-full h-[300px] object-cover"
              />
              <h2 className="text-[20px] font-bold text-primary my-2 leading-tight font-main">
                {recipe.title}
              </h2>
              <p className="text-secondary font-semibold font-nunitoSans">
                {recipe.overview}
              </p>

              <div className="text-sm text-gray-700 my-4 font-nunitoSans">
                <div className="flex items-center gap-6 mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={user}
                      alt="Servings icon"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="text-primary font-semibold">
                      Servings: {recipe.servings}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={timer}
                      alt="Prep icon"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="text-primary font-semibold">
                      Prep: {recipe.prepMinutes} mins
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src={food}
                    alt="Cook icon"
                    className="w-[20px] h-[20px]"
                  />
                  <span className="text-primary font-semibold">
                    Cook: {recipe.cookMinutes} mins
                  </span>
                </div>
              </div>

              <Link
                to={`/recipe/${recipe._id}`}
                state={recipe}
                className="mt-auto mb-2 bg-primary w-full h-12 rounded-full text-white font-bold font-main flex items-center justify-center transition-colors duration-300 hover:bg-btn-hover"
              >
                View Recipe
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="border-t border-line-color mt-[96px]"></div>
    </>
  );
};

export default RecipesList;
