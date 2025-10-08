import BeyondThePlateImg from "../assets/BeyondThePlateImg.svg";

const BeyondThePlate = () => {
  return (
    <>
      <div className="border-t border-line-color mb-[85px] mt-[96px]"></div>

      <section className="flex justify-between items-center px-[124px] mt-[96px] mb-[85px] gap-[64px]">
        <div className="flex-1">
          <h2 className="text-[48px] font-extrabold font-main text-primary mb-6">
            Beyond the plate
          </h2>
          <p className="text-[20px] font-nunitoSans text-secondary mb-6">
            We believe food is a catalyst for <br />
            community and well-being. By sharing <br />
            approachable recipes, we hope to:
          </p>
          <ul className="list-disc pl-6 text-[20px] font-nunitoSans text-secondary space-y-3">
            <li>
              Encourage family dinners and social <br /> cooking.
            </li>
            <li>
              Reduce reliance on single-use <br /> packaging and delivery waste.
            </li>
            <li>
              Spark curiosity about seasonal produce <br />
              and local agriculture.
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={BeyondThePlateImg}
            alt="Sharing healthy food and community"
            className="rounded-[20px] w-[750px] h-[500px]"
          />
        </div>
      </section>
    </>
  );
};

export default BeyondThePlate;
