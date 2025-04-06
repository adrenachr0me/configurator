import AboutsUs from "./abouts-us";
import SocialNetworks from "./social-networks";
import React from "react";
import "../index.css";
function Footer() {
  return (
    <div className="footer">
      <p style={{ float: "left", textAlign: "left", width: "30%" }}>
        &copy; 2025 HiConfig. All rights reserved.
      </p>
      <SocialNetworks />
      <AboutsUs />
    </div>
  );
}

export default Footer;
