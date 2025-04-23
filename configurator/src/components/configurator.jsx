import React from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./header";
import ConfigMain from "./config-main";
import Footer from "./footer";
import ButtonCart from "./cart-button";

function Configurator() {
  return (
    <div>
      <Header />
      <ConfigMain />
      <ButtonCart />
      <Footer />
    </div>
  );
}
export default Configurator;
