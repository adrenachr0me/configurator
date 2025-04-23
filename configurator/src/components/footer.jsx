import SocialNetworks from "./social-networks";
import React from "react";
import "../index.css";
function Footer() {
  return (
    <div className="footer">
      <p style={{ textAlign: "left", float: "left" }}>
        &copy; 2025 HiConfig. All rights reserved.
      </p>
      <SocialNetworks />
    </div>
  );
}

export default Footer;
