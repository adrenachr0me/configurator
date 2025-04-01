import Button from "./banner-button";
import "../index.css";
import React from "react";

function Banner() {
  return (
    <div className="banner">
      <h1>Thinking about diving in wonderful world of games?</h1>
      <p>Are you looking for the best components and builds at great prices?</p>
      <p>
        Working and gaming stations made with determenation and extra love are
        allready waiting for you.
      </p>
      <Button />
    </div>
  );
}

export default Banner;
