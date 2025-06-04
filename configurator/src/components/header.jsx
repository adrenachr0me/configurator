"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import MenuIcon from "./menu-icon";
import Menu from "./menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <Logo />
          <h1>HiConfig</h1>
        </Link>

        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/configurator">Configurator</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cart" className="cart-icon">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <span className="cart-count">0</span>
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={toggleMenu} className="menu-button">
          <MenuIcon />
        </button>
      </div>

      {menuOpen && <Menu toggleMenu={toggleMenu} />}
    </header>
  );
};

export default Header;
