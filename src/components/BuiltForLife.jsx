import builtForLifeImg from "../assets/buildForLifeImg.svg";

const BuiltForLife = () => {
  return (
    <section className="px-[124px] mt-20">
      <div className="border-t border-line-color mb-[85px] mt-[96px]"></div>

      <div className="flex items-center justify-between gap-[40px]">
        <div className="flex flex-col">
          <h3 className="text-5xl font-extrabold  font-main text-primary mb-[20px] ">
            Built for real life
          </h3>
          <p className="text-xl font-nunitoSans text-secondary mb-4 relative">
            Cooking shouldn’t be complicated. These recipes come in <br /> under{" "}
            <span className="relative inline-block">
              <span className="absolute left-0 bottom-0 h-[15px] w-full bg-orange rounded-[5px] -z-10 translate-y-[-10%]"></span>
              30 minutes
            </span>{" "}
            of active time, fit busy schedules, and <br /> taste good enough to
            repeat.
          </p>

          <p className="text-xl mt-[20px] font-nunitoSans text-secondary">
            Whether you’re new to the kitchen or just need fresh <br /> ideas,
            we’ve got you covered.
          </p>
        </div>

        <div>
          <img src={builtForLifeImg} alt="" className="rounded-[10px] " />
        </div>
      </div>
    </section>
  );
};

export default BuiltForLife;
