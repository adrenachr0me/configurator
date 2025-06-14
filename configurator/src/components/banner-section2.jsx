import React from "react";
import "../index.css";
import banner from "../assets/banner.png";

const BannerSection2 = () => {
  return (
    <div className="banner-image">
      <div className="image-container">
        <div className="glow-effect"></div>
        <div className="image-card">
          <img
            src={banner || "/placeholder.svg"}
            alt="Gaming PC"
            className="pc-image"
          />
          <div className="image-overlay">
            <div className="image-overlay-title">Mid-Range Gaming PC</div>
            <div className="image-overlay-footer">
              <span className="price">From $1,020</span>
              <span className="tag">Best Seller</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection2;
