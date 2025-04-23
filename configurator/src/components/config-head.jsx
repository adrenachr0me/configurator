import React from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import configurator from "./configurator";
function Headerconf() {
  return (
    <div className="config-head">
      <h1>Configurator</h1>
    </div>
  );
}

export default Headerconf;
