import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Menu_icon from "./menu-icon";
import "../index.css";

function Header() {
  return (
    <div className="header">
      <Logo />
      <h1>HiConfig</h1>
      <Menu_icon />
    </div>
  );
}

export default Header;
