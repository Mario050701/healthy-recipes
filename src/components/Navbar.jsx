import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import logo1 from "../assets/logo1.svg";
import burgerMenu from "../assets/burgerMenu.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between mx-[60px] px-8 max-sm:mx-[16px] md:mx-[32px] lg:mx-[60px] relative">
        <div className="flex items-center gap-2 mt-8">
          <img className="h-[32px] w-[27px]" src={logo1} alt="Logo 1" />
          <img className="h-[28px] w-[200px]" src={logo} alt="Main Logo" />
        </div>

        <ul className="flex gap-[40px] text-[18px] font-semibold font-main mt-[32px] cursor-pointer lg:flex hidden">
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
          className="w-[167px] h-[52px] font-main rounded-[10px] bg-primary text-white font-bold text-xl mt-[20px] flex justify-center items-center transition-colors duration-300 hover:bg-btn-hover lg:flex hidden"
        >
          Browse recipes
        </NavLink>

        <div className="relative lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center mt-6 relative z-50 "
          >
            <img src={burgerMenu} alt="Menu" className="w-[40px] h-[40px]" />
          </button>

          <div
            className={`absolute top-[60px] right-0 bg-white border border-line-color rounded-xl shadow-xl p-6 flex flex-col items-start gap-5 z-40 transform transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-5 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col items-start gap-4 text-[18px] font-semibold font-main cursor-pointer 4">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
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
                  onClick={() => setIsOpen(false)}
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
                  onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
              className="w-[167px] h-[52px] font-main rounded-[10px] bg-primary text-white font-bold text-xl flex justify-center items-center transition-colors duration-300 hover:bg-btn-hover self-start"
            >
              Browse recipes
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="border mt-8 border-line-color"></div>
    </>
  );
};

export default Navbar;
