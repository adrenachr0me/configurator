import React from "react";
import "../index.css";
import hyperx from "../assets/hyperX-logo.png";
import nvidia from "../assets/NVIDIA-logo.png";
import samsung from "../assets/Samsung-Logo.png";

const SponsorsImage = () => {
  return (
    <div className="sponsors-image">
      <img src={hyperx} alt="1sponsor" />;
      <img src={nvidia} alt="2sponsor" />;
      <img src={samsung} alt="3sponsor" />;
    </div>
  );
};

export default SponsorsImage;
