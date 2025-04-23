import React from "react";
import "../index.css";
import Button from "./banner-button";
import bannerimage from "../assets/banner.png";

console.log(bannerimage);

const BannerSection2 = () => {
  return (
    <div>
      <img src={bannerimage} alt="banner-image" />;
      <Button />
    </div>
  );
};

export default BannerSection2;
