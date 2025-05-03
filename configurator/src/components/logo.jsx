import React from "react";
import "../index.css";
const Logo = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="6" />
    <rect
      x="30"
      y="30"
      width="40"
      height="40"
      fill="#1a1a1a"
      stroke="black"
      strokeWidth="3"
    />
    <path d="M40 40 L60 60 M60 40 L40 60" stroke="#00ffcc" strokeWidth="3" />
  </svg>
);

export default Logo;
