import React from "react";
import "../index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Configurator from "./configurator";
/*************  ✨ Windsurf Command 🌟  *************/
function Button() {
  const navigate = useNavigate();
  return (
    <Link to="/configurator">
      <button>Get to configurator</button>
    </Link>
  );
}
export default Button;
