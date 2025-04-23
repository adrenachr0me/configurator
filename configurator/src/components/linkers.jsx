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
import Button from "./banner-button";

function Linkers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/configurator" element={<Configurator />} />
      </Routes>
    </Router>
  );
}

export default Linkers;
