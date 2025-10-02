import React from "react";
import logo from "./assets/logo.svg";
import vector from "./assets/vector.svg";
import vector2 from "./assets/vector2.svg";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between mx-[60px]">
        <div className="flex items-center gap-2 mt-8 relative">
          <img className="absolute -left-4 top-0.5 " src={vector2} alt="" />
          <img className="w-[18px] h-[34px] gap-[10px]" src={vector} alt="" />
          <img className="w-[200px] h-[28px] " src={logo} alt="" />
        </div>

        <ul className="flex gap-[40px] text-[18px] font-semibold mt-8 cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Recipes</li>
        </ul>

        <button className="w-[167px] h-[52px] rounded-[10px] bg-[#163A34] cursor-pointer text-white font-bold text-xl mt-8">
          Browse recipes
        </button>
      </nav>

      <div className="border mt-8 border-gray-200 "></div>
    </>
  );
};

export default Navbar;
