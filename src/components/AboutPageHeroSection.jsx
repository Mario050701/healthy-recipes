import React from "react";
import AboutPageImg from "./assets/AboutPageImg.svg";

const AboutPageHeroSection = () => {
  return (
    <div className="flex items-start justify-between px-[124px] mt-[80px] gap-[64px]">
      <div className="flex flex-col mt-[247px]">
        <span className="bg-orange-600 w-[107px] h-[28px] text-center rounded-[10px] font-bold text-[#163A34] mb-[24px]">
          Our mission
        </span>
        <h2 className="font-extrabold text-[48px] text-[#163A34] ">
          Help more people <br /> cook nourishing meals, <br /> more often.
        </h2>
        <p className="text-[#395852] mt-[24px] text-[20px] ">
          Healthy Recipe Finder was created to prove that healthy <br />
          eating can be convenient, affordable, and genuinely delicious.
        </p>
        <p className="text-[#395852] mt-[16px] text-[20px]">
          We showcase quick, whole-food dishes that anyone can <br />
          master—no fancy equipment, no ultra-processed shortcuts <br />
          —just honest ingredients and straightforward steps.
        </p>
      </div>

      <img
        className="rounded-[10px] w-[850px] h-auto"
        src={AboutPageImg}
        alt="About"
      />
    </div>
  );
};

export default AboutPageHeroSection;
