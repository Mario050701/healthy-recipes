import React from "react";
import butterflyIcon from "./assets/butterflyIcon.svg";
import tiktok from "./assets/tiktok.svg";
import instaIcon from "./assets/instaIcon.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex justify-between px-[124px] mt-[40px]  mb-[40px] ">
          <span>Made with ❤ and 🥑</span>

          <ul className="flex gap-[24px]">
            <li>
              <img src={instaIcon} alt="" />
            </li>
            <li>
              <img src={butterflyIcon} alt="" />
            </li>

            <li>
              <img src={tiktok} alt="" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
