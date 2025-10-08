import butterflyIcon from "../assets/butterflyIcon.svg";
import tiktok from "../assets/tiktok.svg";
import instaIcon from "../assets/instaIcon.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex justify-between px-[124px] mt-[40px] mb-[40px]">
          <span className="font-nunitoSans font-semibold text-secondary">
            Made with 💘 and 🥑
          </span>

          <ul className="flex gap-[24px]">
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
