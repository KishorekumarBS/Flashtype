import React from "react";
import logo from "./../../assets/logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img src={logo} alt="Flash logo" className="flash-logo" />
        <p className="flash-logo-text">FlashType</p>
      </div>
      <div className="nav-right">
        <a
          target="_blank"
          href="https://kishoreportfolio.vercel.app/"
          className="nav-git-link"
          rel="noreferrer"
        >
          Portfolio
        </a>
      </div>
    </div>
  );
};

export default Nav;
