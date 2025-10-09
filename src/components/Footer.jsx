import butterflyIcon from "../assets/butterflyIcon.svg";
import tiktok from "../assets/tiktok.svg";
import instaIcon from "../assets/instaIcon.svg";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between px-[124px] mt-[40px] mb-[40px] lg:px-[124px] md:px-[32px] max-sm:flex-col max-sm:items-center max-sm:gap-4">
        <ul className="flex gap-[24px] max-sm:order-1">
          <li>
            <img
              className="cursor-pointer w-[22px] h-[22px]"
              src={instaIcon}
              alt="Instagram Logo"
            />
          </li>
          <li>
            <img
              className="cursor-pointer w-[22px] h-[22px]"
              src={butterflyIcon}
              alt="Butterfly Icon"
            />
          </li>
          <li>
            <img
              className="cursor-pointer w-[22px] h-[22px]"
              src={tiktok}
              alt="TikTok Logo"
            />
          </li>
        </ul>

        <span className="font-nunitoSans font-semibold text-secondary max-sm:order-2 max-sm:mt-2 text-center">
          Made with 💘 and 🥑
        </span>
      </div>
    </footer>
  );
};

export default Footer;
