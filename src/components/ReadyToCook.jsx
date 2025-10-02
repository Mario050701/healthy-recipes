import React from "react";

const ReadyToCook = () => {
  return (
    <section className="mt-20 px-[124px] flex-1">
      <div className=" bg-[#E9EDE8] flex flex-col rounded-[16px] px-[124px] ">
        <h3 className="text-5xl font-extrabold text-[#163A34] text-center mt-[96px]">
          Ready to cook smarter?
        </h3>
        <p className="text-xl text-[#395852] mt-[12px] text-center">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
        <div className="items-center flex justify-center mt-[40px]">
          <button className="w-[176px] h-[57px] bg-[#163A34] text-white font-bold rounded-[10px] mb-[96px]">
            Browse recipes
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToCook;
