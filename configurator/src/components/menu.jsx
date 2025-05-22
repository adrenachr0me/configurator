"use client";
import { Link } from "react-router-dom";

const Menu = ({ toggleMenu }) => {
  return (
    <div className="mobile-menu">
      <ul>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/configurator" onClick={toggleMenu}>
            Configurator
          </Link>
        </li>
        <li>
          <Link to="/featured-builds" onClick={toggleMenu}>
            Ready Builds
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={toggleMenu}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={toggleMenu}>
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
