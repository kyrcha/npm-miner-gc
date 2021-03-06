import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="/logo_white_colour.png" height="110%" alt="npm-miner" />
          </Link>

          <button
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div className="navbar-end">
          <Link className="navbar-item" to="/stats">
            Stats
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <a
            className="navbar-item"
            href="https://github.com/kyrcha/npm-miner-gc"
          >
            GitHub*
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
