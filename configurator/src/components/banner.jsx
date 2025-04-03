import Button from "./banner-button";
import "../index.css";
import React from "react";
import TextBanner from "./banner-section1";

function Banner() {
  return (
    <div className="banner">
      <TextBanner />
      <Button />
    </div>
  );
}

export default Banner;
