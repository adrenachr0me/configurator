import React from "react";
import BannerContent from "./banner-content";
import BannerImage from "./banner-image";
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
