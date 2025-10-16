import BeyondThePlateImg from "../assets/BeyondThePlateImg.svg";

const BeyondThePlate = () => {
  return (
    <>
      <div className="border-t border-line-color mb-[85px] mt-[96px]"></div>

      <section className="flex justify-between items-center px-[124px] mt-[96px] mb-[85px] gap-[64px] max-sm:flex-col max-sm:px-4 max-md:flex-col max-md:items-start max-md:px-[32px]">
        <div className="flex-1">
          <h2 className="text-[48px] font-extrabold font-main text-primary mb-6 max-md:text-[44px]">
            Help more people <br className="max-md:hidden" />
            cook nourishing meals, <br className="max-md:hidden" />
            more often.
          </h2>

          <p className="text-[20px] font-nunitoSans text-secondary mb-6 ">
            We believe food is a catalyst for <br className="max-md:hidden" />
            community and well-being. By sharing{" "}
            <br className="max-md:hidden" />
            approachable recipes, we hope to:
          </p>

          <ul className="list-disc pl-6 text-[20px] font-nunitoSans text-secondary space-y-3 w-full max-md:px-[32px]">
            <li>
              Encourage family dinners and social{" "}
              <br className="max-md:hidden" /> cooking.
            </li>
            <li>
              Reduce reliance on single-use <br className="max-md:hidden" />{" "}
              packaging and delivery waste.
            </li>
            <li>
              Spark curiosity about seasonal produce{" "}
              <br className="max-md:hidden" />
              and local agriculture.
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={BeyondThePlateImg}
            alt="Sharing healthy food and community"
            className="rounded-[20px] w-[750px] h-[500px] object-cover max-sm:w-full max-sm:h-auto max-sm:rounded-3xl"
          />
        </div>
      </section>
    </>
  );
};

export default BeyondThePlate;
