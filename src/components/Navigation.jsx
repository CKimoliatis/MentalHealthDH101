// components/Navigation.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const closeMenu = () => setMobileMenuOpen && setMobileMenuOpen(false);
  const toggleMenu = () =>
    setMobileMenuOpen && setMobileMenuOpen(prev => !prev);

  const desktopClass = ({ isActive }) =>
    `nav-link ${isActive ? "nav-link-active" : ""}`;
  const mobileClass = ({ isActive }) =>
    `mobile-menu-item ${isActive ? "mobile-menu-item-active" : ""}`;

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo acts like your old button to go home */}
        <NavLink to="/narrative" className="logo" onClick={closeMenu}>
          Project:Mind
        </NavLink>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          <NavLink to="/narrative" className={desktopClass} onClick={closeMenu}>
            Narrative
          </NavLink>
          <NavLink to="/data" className={desktopClass} onClick={closeMenu}>
            The Data
          </NavLink>
          <NavLink to="/resources" className={desktopClass} onClick={closeMenu}>
            Resources
          </NavLink>
          <NavLink to="/about" className={desktopClass} onClick={closeMenu}>
            About Us
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <button onClick={toggleMenu} className="menu-icon" aria-label="Menu">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <NavLink to="/narrative" className={mobileClass} onClick={closeMenu}>
            Narrative
          </NavLink>
          <NavLink to="/data" className={mobileClass} onClick={closeMenu}>
            The Data
          </NavLink>
          <NavLink to="/resources" className={mobileClass} onClick={closeMenu}>
            Resources
          </NavLink>
          <NavLink to="/about" className={mobileClass} onClick={closeMenu}>
            About Us
          </NavLink>
        </div>
      )}
    </header>
  );
}
