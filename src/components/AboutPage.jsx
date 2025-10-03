import React from "react";
import ReadyToCook from "./ReadyToCook";
import AboutPageHeroSection from "./AboutPageHeroSection";
import WhyWeExist from "./WhyWeExist";
import OurFood from "./OurFood";
import BeyondThePlate from "./BeyondThePlate";

const AboutPage = () => {
  return (
    <>
      <AboutPageHeroSection />

      <WhyWeExist />
      <OurFood />
      <BeyondThePlate />
      <ReadyToCook />
    </>
  );
};

export default AboutPage;
