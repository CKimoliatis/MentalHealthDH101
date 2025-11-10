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
        {/* Logo goes to Home */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          Project:Mind
        </NavLink>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          <NavLink to="/" className={desktopClass} onClick={closeMenu}>
            Home
          </NavLink>
          <div className="nav-dropdown">
            <button type="button" className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
              Narrative <span className="caret">▾</span>
            </button>
            <div className="dropdown-menu" role="menu">
              <NavLink to="/narrative/introduction" className="dropdown-item" onClick={closeMenu}>Introduction</NavLink>
              <NavLink to="/narrative/literature" className="dropdown-item" onClick={closeMenu}>Literature Review</NavLink>
              <NavLink to="/narrative/significance" className="dropdown-item" onClick={closeMenu}>Significance</NavLink>
              <NavLink to="/narrative/map2" className="dropdown-item" onClick={closeMenu}>Map</NavLink>
              <NavLink to="/narrative/visualization" className="dropdown-item" onClick={closeMenu}>Data Visualization</NavLink>
              <NavLink to="/narrative/conclusion" className="dropdown-item" onClick={closeMenu}>Conclusion</NavLink>
              <NavLink to="/narrative/future" className="dropdown-item" onClick={closeMenu}>Future Research</NavLink>
            </div>
          </div>
          <div className="nav-dropdown">
            <button type="button" className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
              Data <span className="caret">▾</span>
            </button>
            <div className="dropdown-menu" role="menu">
              <NavLink to="/data-critique" className="dropdown-item" onClick={closeMenu}>Data Critique</NavLink>
              <NavLink to="/sources" className="dropdown-item" onClick={closeMenu}>Sourcing, Processing, & Presenting</NavLink>
              <NavLink to="/bibliography" className="dropdown-item" onClick={closeMenu}>Bibliography</NavLink>
            </div>
          </div>
          <div className="nav-dropdown">
            <button type="button" className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
              About Us <span className="caret">▾</span>
            </button>
            <div className="dropdown-menu" role="menu">
              <NavLink to="/team" className="dropdown-item" onClick={closeMenu}>Our Team</NavLink>

              <NavLink to="/acknowledgements" className="dropdown-item" onClick={closeMenu}>Acknowledgements</NavLink>
            </div>
          </div>
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
          <NavLink to="/" className={mobileClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/narrative/introduction" className={mobileClass} onClick={closeMenu}>Narrative — Introduction</NavLink>
          <NavLink to="/narrative/literature" className={mobileClass} onClick={closeMenu}>Narrative — Literature Review</NavLink>
          <NavLink to="/narrative/significance" className={mobileClass} onClick={closeMenu}>Narrative — Significance</NavLink>
          <NavLink to="/narrative/map2" className={mobileClass} onClick={closeMenu}>Narrative — Map 2</NavLink>
          <NavLink to="/narrative/visualization" className={mobileClass} onClick={closeMenu}>Narrative — Data Visualization</NavLink>
          <NavLink to="/narrative/conclusion" className={mobileClass} onClick={closeMenu}>Narrative — Conclusion</NavLink>
          <NavLink to="/narrative/future" className={mobileClass} onClick={closeMenu}>Narrative — Future Research</NavLink>
          <NavLink to="/data-critique" className={mobileClass} onClick={closeMenu}>
            Data — Critique
          </NavLink>
          <NavLink to="/visualizations" className={mobileClass} onClick={closeMenu}>
            Data — Visualizations
          </NavLink>
          <NavLink to="/about" className={mobileClass} onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/team" className={mobileClass} onClick={closeMenu}>
            • Our Team
          </NavLink>
          <NavLink to="/sources" className={mobileClass} onClick={closeMenu}>
            • Sourcing, Processing, & Presenting
          </NavLink>
          <NavLink to="/bibliography" className={mobileClass} onClick={closeMenu}>
            • Bibliography
          </NavLink>
          <NavLink to="/acknowledgements" className={mobileClass} onClick={closeMenu}>
            • Acknowledgements
          </NavLink>
        </div>
      )}
    </header>
  );
}
