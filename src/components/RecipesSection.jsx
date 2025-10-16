import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";

const RecipesSection = () => {
  return (
    <section className="mt-20 px-4 lg:px-[124px]">
      <h3 className="text-[48px] font-extrabold text-primary font-main mt-[96px] mb-[48px] text-left lg:text-center">
        What you’ll get
      </h3>

      <div className="flex flex-col gap-10 items-start md:flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col items-start text-left">
          <div className="border border-line-color rounded-[10px] w-[60px] h-[60px] flex justify-center items-center bg-white mb-[24px]">
            <img src={img1} alt="" className="w-[23px] h-[32px]" />
          </div>
          <h2 className="text-[32px] mb-[12px] font-main text-primary font-bold">
            Whole-food recipes
          </h2>
          <p className="text-xl font-nunitoSans text-secondary">
            Each dish uses everyday, unprocessed <br /> ingredients.
          </p>
        </div>

        <div className="flex flex-col items-start text-left">
          <div className="border border-line-color rounded-[10px] w-[60px] h-[60px] flex justify-center items-center bg-white mb-[24px]">
            <img src={img2} alt="" className="w-[23px] h-[32px]" />
          </div>
          <h2 className="text-[32px] font-main mb-[12px] text-primary font-bold">
            Minimum fuss
          </h2>
          <p className="text-xl font-nunitoSans text-secondary">
            All recipes are designed to make eating <br /> healthy quick and
            easy.
          </p>
        </div>

        <div className="flex flex-col items-start text-left">
          <div className="border border-line-color rounded-[10px] w-[60px] h-[60px] flex justify-center items-center bg-white mb-[24px]">
            <img src={img3} alt="" className="w-[23px]h-[32px]" />
          </div>
          <h2 className="text-[32px] font-main mb-[12px] text-primary font-bold">
            Search in seconds
          </h2>
          <p className="text-xl text-secondary font-nunitoSans">
            Filter by name or ingredient and jump <br /> straight to the recipe
            you need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
