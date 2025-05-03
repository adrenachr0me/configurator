import React, { useState } from "react";
import "../index.css";
import Menu from "./menu";

function Menu_icon() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <p
        onClick={handleClick}
        style={{ fontSize: "35px", cursor: "pointer", color: "white" }}
      >
        ≡
      </p>
      {showMenu && <Menu />}
    </div>
  );
}

export default Menu_icon;
