import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Menu_icon from "./menu-icon";
import "../index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import UserIcon from "./user-icon";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Link to="/">
        <h1>HiConfig</h1>
      </Link>

      <Menu_icon />
    </div>
  );
}

export default Header;
