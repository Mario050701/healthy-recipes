import { Link } from "react-router-dom";
import path178 from "../assets/path178.svg";
import path176 from "../assets/path176.svg";
import knife from "../assets/knife.svg";
import fork from "../assets/fork.svg";

const ReadyToCook = () => {
  return (
    <section className="mt-[85px] px-[124px] flex-1 relative">
      <div className="relative bg-div-main flex flex-col rounded-[16px] px-[124px] overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col">
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

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-end">
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

        <h3 className="text-5xl font-extrabold font-main text-primary text-center mt-[96px]">
          Ready to cook smarter?
        </h3>
        <p className="text-xl font-nunitoSans text-secondary mt-[12px] mb-[40px] text-center">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>

        <div className="items-center flex justify-center mt-[10px] mb-[96px]">
          <Link to="/recipes">
            <button className="w-[176px] h-[57px] cursor-pointer transition-colors duration-300 hover:bg-btn-hover bg-primary text-white font-bold text-[18px] font-main rounded-[10px]">
              Browse recipes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReadyToCook;
