import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import leaf from "./images/leaf.png";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const navHandle = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <nav>
      <div className="logo">
        <img src={leaf} alt="Logo" />
        <h3>
          <span>Plant</span>Nurtures
        </h3>
      </div>
      <div
        onClick={navHandle}
        className={isChecked ? "hamburger toggle" : "hamburger"}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={isChecked ? "nav-links open" : "nav-links"}>
        <li className={isChecked ? "fade" : ""}>
          <a
            href="/"
            className={activeLink === "/" ? "active" : ""}
          >
            Home
          </a>
        </li>
        <li className={isChecked ? "fade" : ""}>
          <a
            href="/about"
            className={activeLink === "/about" ? "active" : ""}
          >
            About Us
          </a>
        </li>
        <li className={isChecked ? "fade" : ""}>
          <a
            href="/contact"
            className={activeLink === "/contact" ? "active" : ""}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
