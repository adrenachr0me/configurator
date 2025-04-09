import React from "react";
import "../index.css";
import Menu from "./menu";
function Menu_icon() {
  return (
    <div>
      <p
        onClick={<Menu />}
        style={{ fontSize: "35px", cursor: "pointer", color: "white" }}
      >
        ≡
      </p>
    </div>
  );
}
export default Menu_icon;
