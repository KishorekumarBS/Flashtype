import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <a
        href="https://github.com/KishorekumarBS"
        className="profile"
        rel="noreferrer"
        target="_blank"
      >
        Checkout my Github
      </a>
      <div className="myinfo">
        <p>&copy; {currentYear} Kishorekumar. All rights reserved.</p>
        <p>Built with React, JavaScript (ES6), CSS, and integrated APIs.</p>
      </div>
      <p>
        Contact me:{" "}
        <a href="mailto:hksankaran@gmail.com">hksankaran@gmail.com</a>
      </p>
    </div>
  );
};

export default Footer;
