import React from "react";
import "../index.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

function SocialNetworks() {
  return (
    <div className="social-networks">
      <img src={twitter} alt="Twitter"></img>
      <img src={facebook} alt="Facebook"></img>
      <img src={instagram} alt="Instagram"></img>
    </div>
  );
}

export default SocialNetworks;
