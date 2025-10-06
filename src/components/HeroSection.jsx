import HeroSectionImg from "../assets/HeroSectionImg.svg";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center  mt-[50px] text-center px-4">
      <h1 className="text-[72px] font-extrabold mt-[80px] mb-3 text-[#163A34] ">
        Healthy meals, zero fuss
      </h1>
      <h3 className="text-xl text-[#395852]">
        Discover eight quick, whole-food recipes that you can cook tonight{" "}
        <br />
        —no processed junk, no guesswork.
      </h3>

      <button className="bg-[#163A34] h-[60px] w-[198px] text-xl font-bold mt-[56px] rounded-[10px] text-[#FFFFFF] cursor-pointer ">
        Start exploring
      </button>
      <div className="px-[120px]">
        <img
          className="mt-[80px] w-full rounded-[10px] "
          src={HeroSectionImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
