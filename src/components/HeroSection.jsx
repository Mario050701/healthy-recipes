import { Link } from "react-router-dom";
import HeroSectionImg from "../assets/HeroSectionImg.svg";
import Path54 from "../assets/path54.svg";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center max-sm:items-start max-sm:text-left max-sm:mx-4">
      <h1 className="text-[72px] font-extrabold font-main mt-[80px] mb-[12px] text-primary relative inline-block max-sm:text-[52px]">
        <span className="relative inline-block">
          <span className="absolute left-0 bottom-0 h-[39px] w-full bg-[rgba(254,159,107,0.5)] rounded-[5px] -z-10 translate-y-[-35%]"></span>
          Healthy
        </span>{" "}
        meals, zero fuss
      </h1>

      <h3 className="text-[20px] font-nunitoSans text-secondary">
        Discover eight quick, whole-food recipes that you can cook tonight{" "}
        <br />
        —no processed junk, no guesswork.
      </h3>

      <Link to="/recipes">
        <button className="bg-primary h-[60px] w-[198px] text-xl font-bold font-main mt-[40px] rounded-[10px] text-white cursor-pointer transition-colors duration-300 max-sm:self-start">
          Start exploring
        </button>
      </Link>

      <div className="relative w-full mt-[80px]">
        <div className="px-[120px] max-sm:px-4 w-full relative">
          <img
            src={Path54}
            alt="Decorative background path"
            className="absolute -bottom-[300px] left-0 w-full h-auto -z-10 max-sm:-bottom-20 md:-top-30"
          />
          <img
            className="w-full max-w-full rounded-[10px] shadow-[0_0_0_12px_white] max-sm:shadow-[0_0_0_4px_white] "
            src={HeroSectionImg}
            alt="Fresh healthy meals on a table"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
