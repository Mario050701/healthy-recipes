import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import logo1 from "../assets/logo1.svg";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between mx-[60px]">
        <div className="flex items-center gap-2 mt-8">
          <img className="h-[32px] w-[27px]" src={logo1} alt="Logo 1" />
          <img className="h-[28px] w-[200px]" src={logo} alt="Main Logo" />
        </div>

        <ul className="flex gap-[40px] text-[18px] font-semibold font-main mt-[32px] cursor-pointer">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-orange decoration-3 underline-offset-4"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-orange decoration-3 underline-offset-4"
                  : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-orange decoration-3 underline-offset-4"
                  : ""
              }
            >
              Recipes
            </NavLink>
          </li>
        </ul>

        <NavLink
          to="/recipes"
          className="w-[167px] h-[52px] font-main rounded-[10px] bg-primary text-white font-bold text-xl mt-[20px] flex justify-center items-center transition-colors duration-300 hover:bg-btn-hover"
        >
          Browse recipes
        </NavLink>
      </nav>

      <div className="border mt-8 border-line-color"></div>
    </>
  );
};

export default Navbar;
