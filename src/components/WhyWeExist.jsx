import rightArrow from "../assets/right.svg";

const WhyWeExist = () => {
  return (
    <>
      <div className="border-t border-line-color mb-[85px] mt-[96px]"></div>
      <section className="flex justify-between items-start px-[124px] mt-[96px] mb-[85px]">
        <div>
          <h2 className="text-[48px] font-extrabold font-main text-primary">
            Why we exist
          </h2>
        </div>

        <div className="text-secondary font-nunitoSans">
          <div className="flex items-center gap-[20px]">
            <img src={rightArrow} alt="arrow" className="w-[32px] h-[32px]" />
            <h4 className="text-xl text-[24px] text-primary font-bold font-main">
              Cut through the noise.
            </h4>
          </div>
          <p className="mt-[12px] text-[20px]">
            The internet is bursting with recipes, yet most busy cooks still
            default to take <br />
            -away or packaged foods. We curate a tight collection of fool-proof
            dishes so you <br /> can skip the scrolling and start cooking.
          </p>

          <div className="flex items-center gap-[20px] mt-[48px]">
            <img src={rightArrow} alt="arrow" className="w-[32px] h-[32px]" />
            <h4 className="text-xl text-[24px] text-primary font-bold font-main">
              Empower home kitchens.
            </h4>
          </div>
          <p className="mt-[12px] text-[20px]">
            When you control what goes into your meals, you control how you
            feel. Every <br /> recipe is built around unrefined ingredients and
            ready in about half an hour of <br /> active prep.
          </p>

          <div className="flex items-center gap-[20px] mt-[48px]">
            <img src={rightArrow} alt="arrow" className="w-[32px] h-[32px]" />
            <h4 className="text-xl text-[24px] text-primary font-bold font-main">
              Make healthy look good.
            </h4>
          </div>
          <p className="mt-[12px] text-[20px]">
            High-resolution imagery shows you exactly what success looks
            like—because <br /> we eat with our eyes first, and confidence
            matters.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyWeExist;
