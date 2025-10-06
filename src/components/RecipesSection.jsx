import React from "react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";

const RecipesSection = () => {
  return (
    <>
      <section className="mt-20 px-[120px]">
        <h3 className="text-5xl font-extrabold text-[#163A34] mt-[96px] mb-[48px] text-center">
          What you’ll get
        </h3>

        <div className="flex justify-between px-[120px] ">
          <div className="flex flex-col">
            <div className="border border-gray-300 rounded-[10px] w-[60px] h-[60px] flex justify-center items-center bg-[#FFFFFF]">
              <img src={img1} alt="" className="w-[20px] h-[26px]" />
            </div>
            <h2 className="text-[32px] text-[#163A34] font-bold">
              Whole-food recipes
            </h2>
            <p className="text-xl text-[#395852]">
              All recipes are designed to make eating <br /> healthy quick and
              easy.
            </p>
          </div>

          <div className=" flex flex-col">
            <div className="border border-gray-300 rounded-[10px] w-[60px] h-[60px] flex justify-center items-center bg-[#FFFFFF]">
              <img src={img2} alt="" className="w-[20px] h-[26px]" />
            </div>
            <h2 className="text-[32px] text-[#163A34] font-bold">
              Minimum fuss
            </h2>
            <p className="text-xl text-[#395852]">
              All recipes are designed to make eating <br /> healthy quick and
              easy.
            </p>
          </div>

          <div className=" flex flex-col">
            <div className="border border-gray-300 rounded-[10px] w-[60px] h-[60px] flex justify-center items-center bg-[#FFFFFF]">
              <img src={img3} alt="" className="w-[20px] h-[26px]" />
            </div>
            <h2 className="text-[32px] text-[#163A34] font-bold">
              Search in seconds
            </h2>
            <p className="text-xl text-[#395852]">
              Filter by name or ingredient and jump <br /> straight to the
              recipe you need.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipesSection;
