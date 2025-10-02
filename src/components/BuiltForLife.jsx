import React from "react";
import BuiltForLifeImg from "./assets/BuiltForLifeImg.svg";

const BuiltForLife = () => {
  return (
    <section className="px-[124px] mt-20">
      <div className="border-t border-gray-300 mb-[85px] mt-[96px]"></div>

      <div className="flex items-center justify-between gap-[40px]">
        <div className="flex flex-col">
          <h3 className="text-5xl font-extrabold text-[#163A34] mb-[20px] ">
            Built for real life
          </h3>
          <p className="text-xl text-[#395852] mb-4">
            Cooking shouldn’t be complicated. These recipes come in <br /> under
            30 minutes of active time, fit busy schedules, and <br /> taste good
            enough to repeat.
          </p>
          <p className="text-xl mt-[20px] text-[#395852]">
            Whether you’re new to the kitchen or just need fresh <br /> ideas,
            we’ve got you covered.
          </p>
        </div>

        <div>
          <img
            src={BuiltForLifeImg}
            alt=""
            className="rounded-[10px] w-[750px]"
          />
        </div>
      </div>
    </section>
  );
};

export default BuiltForLife;
