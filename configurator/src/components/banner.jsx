import React from "react";
import BannerContent from "./banner-section1";
import BannerImage from "./banner-section2";
import "../index.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <BannerContent />
        <BannerImage />
      </div>
    </div>
  );
};

export default Banner;
