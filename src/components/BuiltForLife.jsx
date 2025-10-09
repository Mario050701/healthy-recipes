import builtForLifeImg from "../assets/buildForLifeImg.svg";

const BuiltForLife = () => {
  return (
    <section className="px-[124px] max-sm:px-4 max-md:px-8 mt-20">
      <div className="border-t border-line-color mb-[85px] mt-[96px]"></div>

      <div className="flex items-center justify-between gap-[40px] max-sm:flex-col max-sm:items-start max-sm:gap-8 max-md:flex-col max-md:items-start max-md:gap-10">
        <div className="flex flex-col max-sm:w-full max-md:w-full">
          <h3 className="text-5xl font-extrabold font-main text-primary mb-[20px] max-sm:text-4xl max-md:text-4xl">
            Built for real life
          </h3>
          <p className="text-xl font-nunitoSans text-secondary mb-4 relative max-sm:text-left max-md:text-left">
            Cooking shouldn’t be complicated. These recipes come in <br /> under{" "}
            <span className="relative inline-block">
              <span className="absolute left-0 bottom-0 h-[15px] w-full bg-orange rounded-[5px] -z-10 translate-y-[-10%]"></span>
              30 minutes
            </span>{" "}
            of active time, fit busy schedules, and <br /> taste good enough to
            repeat.
          </p>

          <p className="text-xl mt-[20px] font-nunitoSans text-secondary max-sm:text-left max-md:text-left">
            Whether you’re new to the kitchen or just need fresh <br /> ideas,
            we’ve got you covered.
          </p>
        </div>

        <div className="max-sm:w-full max-md:w-full max-sm:mt-6 max-md:mt-6">
          <img
            src={builtForLifeImg}
            alt="Quick healthy meal example"
            className="rounded-[10px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default BuiltForLife;
