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
function ButtonCart() {
  const navigate = useNavigate();
  return (
    <Link to="/cart">
      <button id="cartbut">Get to cart</button>
    </Link>
  );
}
export default ButtonCart;
