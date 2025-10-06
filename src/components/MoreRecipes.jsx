import moreRecipesImg2 from "../assets/moreRecipesImg2.jpg";
import user from "../assets/user.svg";
import timer from "../assets/timer.svg";
import food from "../assets/food.svg";

const MoreRecipes = () => {
  return (
    <>
      <div className="p-2 shadow-lg rounded-2xl bg-white flex flex-col min-h-[550px] w-[360px]">
        <img
          src={moreRecipesImg2}
          alt="Recipe"
          className="rounded-lg w-full h-[300px] object-cover"
        />
        <h2 className="text-[20px] font-medium text-[#163A34] my-2 leading-tight">
          Spaghetti Carbonara
        </h2>
        <p className="text-[#395852]">
          This is a short description of the recipe overview.
        </p>

        <div className="text-sm text-gray-700 my-4">
          <div className="flex items-center gap-6 mb-2">
            <div className="flex items-center gap-2">
              <img src={user} alt="user icon" className="w-5 h-5" />
              <span className="text-[#163A34]">Servings: 4</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={timer} alt="timer icon" className="w-5 h-5" />
              <span className="text-[#163A34]">Prep: 15 mins</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img src={food} alt="food icon" className="w-5 h-5" />
            <span className="text-[#163A34]">Cook: 30 mins</span>
          </div>
        </div>

        <button className="mt-auto block text-center mb-2 bg-[#163A34] w-full h-12 rounded-full text-white font-bold">
          View Recipe
        </button>
      </div>
    </>
  );
};

export default MoreRecipes;
