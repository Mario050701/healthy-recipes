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
          alt="Recipe Image"
          className="rounded-lg w-full h-[300px] object-cover"
        />
        <h2 className="text-[20px] font-bold font-main text-primary my-2 leading-tight">
          Spaghetti Carbonara
        </h2>
        <p className="font-nunitoSans text-secondary">
          This is a short description of the recipe overview.
        </p>

        <div className="text-sm my-4 font-nunitoSans">
          <div className="flex items-center gap-6 mb-2">
            <div className="flex items-center gap-2">
              <img src={user} alt="User Icon" className="w-5 h-5" />
              <span className="text-primary">Servings: 4</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={timer} alt="Timer Icon" className="w-5 h-5" />
              <span className="text-primary">Prep: 15 mins</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img src={food} alt="Food Icon" className="w-5 h-5" />
            <span className="text-primary">Cook: 30 mins</span>
          </div>
        </div>

        <button className="mt-auto block text-center mb-2 bg-primary w-full h-12 rounded-full text-white font-bold font-main">
          View Recipe
        </button>
      </div>
    </>
  );
};

export default MoreRecipes;
