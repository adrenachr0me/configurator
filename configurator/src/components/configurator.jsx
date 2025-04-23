import React from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Headerconf from "./config-head";
import ConfigMain from "./config-main";
import Footer from "./footer";

function Configurator() {
  return (
    <div>
      <Headerconf />
      <ConfigMain />
      <Footer />
    </div>
  );
}
export default Configurator;
