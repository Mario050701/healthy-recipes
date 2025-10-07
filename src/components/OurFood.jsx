const OurFood = () => {
  return (
    <>
      <div className="border-t border-gray-300 mb-[85px] mt-[96px]"></div>
      <section className="flex justify-between items-start px-[124px] mt-[96px] mb-[85px]">
        <div>
          <h2 className="text-[48px] font-extrabold text-[#163A34]">
            Our food philosophy
          </h2>
        </div>

        <div className="text-[#395852]">
          <h4 className="text-xl font-bold">Whole ingredients first.</h4>
          <p className="mt-[12px] text-[#395852]">
            Fresh produce, grains, legumes, herbs, and quality fats form the
            backbone of <br />
            every recipe.
          </p>

          <h4 className="text-xl font-bold mt-[48px]">
            Flavor without compromise.
          </h4>
          <p className="mt-[12px] text-[#395852]">
            Spices, citrus, and natural sweetness replace excess salt, sugar,
            and additives.
          </p>

          <h4 className="text-xl font-bold mt-[48px]">Respect for time.</h4>
          <p className="mt-[12px] text-[#395852]">
            Weeknight meals should slot into real schedules; weekend cooking can
            be <br /> leisurely but never wasteful.
          </p>
          <h4 className="text-xl font-bold mt-[48px]">Sustainable choices.</h4>
          <p className="mt-[12px] text-[#395852]">
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
