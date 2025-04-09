import React from "react";
import "../index.css";
import SponsorsImage from "./sponsors-image";

function Sponsors() {
  return (
    <div className="sponsors">
      <h2>Our Sponsors</h2>
      <p>
        Thanks to the support of our sponsors, we offer the best components and
        builds at great prices!
      </p>
      <SponsorsImage />
    </div>
  );
}

export default Sponsors;
