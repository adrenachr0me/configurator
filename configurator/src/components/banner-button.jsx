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
function Button() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(<Configurator />)}>
      Get to configurator
    </button>
  );
}
export default Button;
