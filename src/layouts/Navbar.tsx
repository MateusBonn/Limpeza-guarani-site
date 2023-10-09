import React, { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import '../styles/navbar.scss'
import { Link  } from 'react-router-dom'
import { Logo } from "../components/logo";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
    <nav className="navbar">
      <Link className="logo" to="/">
        <Logo />
      </Link>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <button onClick={toggleMenu} className="menu-button">
          <AiFillAppstore />
        </button>
        {isMenuOpen && (
        <ul>
          <li>
            <Link to="/ourService" onClick={closeMenu}>
              Our Service
            </Link>
          </li>
          <li>
            <Link to="/howWeWork" onClick={closeMenu}>
              How We Work
            </Link>
          </li>
        </ul>
        )}
      </div>
    </nav>
    <div className="line" />
    </div>
  );
}

export default Navbar;
