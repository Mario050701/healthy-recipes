import { Link } from "react-router-dom";
import path178 from "../assets/path178.svg";
import path176 from "../assets/path176.svg";
import knife from "../assets/knife.svg";
import fork from "../assets/fork.svg";

const ReadyToCook = () => {
  return (
    <section className="mt-[85px] px-[124px] flex-1 relative max-sm:px-4">
      <div className="relative bg-div-main flex flex-col rounded-[16px] px-[124px] overflow-hidden max-sm:px-4">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col max-sm:hidden">
          <img
            src={fork}
            alt="Decorative fork illustration"
            className="w-[200px] h-[230px] scale-150 translate-y-[100px] translate-x-[20px]"
          />
          <img
            src={path178}
            alt="Decorative path element"
            className="w-[150px] mt-[-10px] relative top-[-50px]"
          />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-end max-sm:hidden">
          <img
            src={knife}
            alt="Decorative knife illustration"
            className="w-[200px] h-[230px] scale-150 translate-y-[75px] translate-x-[-50px]"
          />
          <img
            src={path176}
            alt="Decorative path element"
            className="w-[200px] mt-[-10px] relative top-[-60px]"
          />
        </div>
        <h1 className="text-[72px] font-extrabold font-main text-primary text-center mt-[96px] max-sm:text-[52px] max-sm:text-center max-sm:mx-0">
          Ready to cook smarter?
        </h1>
        <p className="text-xl font-nunitoSans text-secondary mt-[12px] mb-[40px] text-center max-sm:text-center">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
        <div className="flex justify-center max-sm:justify-center">
          <Link to="/recipes">
            <button className="w-[176px] h-[57px] cursor-pointer transition-colors duration-300 hover:bg-btn-hover bg-primary text-white font-bold text-[18px] font-main rounded-[10px] max-sm:mb-5">
              Browse recipes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReadyToCook;
