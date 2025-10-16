import rightArrow from "../assets/right.svg";

const OurFood = () => {
  return (
    <>
      <div className="border-t border-line-color mb-[85px] mt-[96px]"></div>
      <section className="flex justify-between items-start px-[124px] mt-[96px] mb-[85px] max-sm:flex-col max-sm:px-4  max-md:flex-col  max-md:px-[32px]">
        <div>
          <h2 className="text-[48px] font-extrabold font-main text-primary  max-sm:mb-10 max-sm:text-[40px]  max-md:mb-10">
            Our food <br /> philosophy
          </h2>
        </div>

        <div className="text-secondary font-nunitoSans">
          <div className="flex items-center gap-[20px] mt-0">
            <img
              src={rightArrow}
              alt="Right arrow icon"
              className="w-[32px] h-[32px]"
            />
            <h4 className="text-xl text-[24px] font-bold font-main text-primary">
              Whole ingredients first.
            </h4>
          </div>
          <p className="mt-[12px] text-[20px]">
            Fresh produce, grains, legumes, herbs, and quality fats form the
            backbone of <br />
            every recipe.
          </p>

          <div className="flex items-center gap-[20px] mt-[48px]">
            <img
              src={rightArrow}
              alt="Right arrow icon"
              className="w-[32px] h-[32px]"
            />
            <h4 className="text-xl text-[24px] font-bold font-main text-primary">
              Flavor without compromise.
            </h4>
          </div>
          <p className="mt-[12px] text-[20px]">
            Spices, citrus, and natural sweetness replace excess salt, sugar,
            and additives.
          </p>

          <div className="flex items-center gap-[20px] mt-[48px]">
            <img
              src={rightArrow}
              alt="Right arrow icon"
              className="w-[32px] h-[32px]"
            />
            <h4 className="text-xl text-[24px] font-bold font-main text-primary">
              Respect for time.
            </h4>
          </div>
          <p className="mt-[12px] text-[20px]">
            Weeknight meals should slot into real schedules; weekend cooking can
            be <br /> leisurely but never wasteful.
          </p>

          <div className="flex items-center gap-[20px] mt-[48px]">
            <img
              src={rightArrow}
              alt="Right arrow icon"
              className="w-[32px] h-[32px]"
            />
            <h4 className="text-xl text-[24px] font-bold font-main text-primary">
              Sustainable choices.
            </h4>
          </div>
          <p className="mt-[12px] text-[20px]">
            Short ingredient lists cut down on food waste and carbon footprint,
            while plant- <br />
            forward dishes keep things planet-friendly.
          </p>
        </div>
      </section>
    </>
  );
};

export default OurFood;
