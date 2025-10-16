import aboutPageImg from "../assets/AboutPageImg.svg";

const AboutPageHeroSection = () => {
  return (
    <div className="flex items-start justify-between px-[124px] mt-[80px] gap-[64px] max-md:flex-col max-md:-mt-16 max-md:px-[32px] max-sm:px-[16px]">
      <div className="flex flex-col mt-[155px]">
        <span className="bg-orange w-[119px] h-[32px] font-main rounded-[6px] font-bold text-primary mb-[24px] flex justify-center items-center">
          Our mission
        </span>

        <h2 className="font-extrabold leading-[1.2] text-[48px] font-main text-primary max-sm:text-[40px]  ">
          Help more people <br /> cook nourishing meals, <br /> more often.
        </h2>
        <p className="text-secondary leading-[1.5] mt-[24px] font-nunitoSans text-[20px] ">
          Healthy Recipe Finder was created to prove that healthy <br />
          eating can be convenient, affordable, and genuinely delicious.
        </p>
        <p className="text-secondary leading-[1.5]  font-nunitoSans  mt-[16px] text-[20px]">
          We showcase quick, whole-food dishes that anyone can <br />
          master—no fancy equipment, no ultra-processed shortcuts <br />
          —just honest ingredients and straightforward steps.
        </p>
      </div>

      <img
        className="rounded-[20px] w-[850px] mt-[80px]  max-sm:w-auto max-sm:mt-[40px]"
        src={aboutPageImg}
        alt="People cooking healthy meals"
      />
    </div>
  );
};

export default AboutPageHeroSection;
