// components/Navigation.jsx
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const closeMenu = () => setMobileMenuOpen && setMobileMenuOpen(false);
  const toggleMenu = () =>
    setMobileMenuOpen && setMobileMenuOpen(prev => !prev);

  // Mobile submenu expand/collapse state per main section
  const [mobileSections, setMobileSections] = useState({
    narrative: false,
    data: false,
    about: false,
  });

  const toggleSection = key =>
    setMobileSections(prev => ({ ...prev, [key]: !prev[key] }));

  // Collapse subsections when the menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileSections({ narrative: false, data: false, about: false });
    }
  }, [mobileMenuOpen]);

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
          {/* Collapsible mobile sections mirroring desktop */}
          {/* Narrative */}
          <button
            type="button"
            className="mobile-section-toggle"
            aria-expanded={mobileSections.narrative}
            onClick={() => toggleSection("narrative")}
          >
            Narrative <span className={`caret ${mobileSections.narrative ? "open" : ""}`}>▾</span>
          </button>
          {mobileSections.narrative && (
            <div className="mobile-submenu" role="group" aria-label="Narrative">
              <NavLink to="/narrative/introduction" className={mobileClass} onClick={closeMenu}>Introduction</NavLink>
              <NavLink to="/narrative/literature" className={mobileClass} onClick={closeMenu}>Literature Review</NavLink>
              <NavLink to="/narrative/significance" className={mobileClass} onClick={closeMenu}>Significance</NavLink>
              <NavLink to="/narrative/map2" className={mobileClass} onClick={closeMenu}>Map</NavLink>
              <NavLink to="/narrative/visualization" className={mobileClass} onClick={closeMenu}>Data Visualization</NavLink>
              <NavLink to="/narrative/conclusion" className={mobileClass} onClick={closeMenu}>Conclusion</NavLink>
              <NavLink to="/narrative/future" className={mobileClass} onClick={closeMenu}>Future Research</NavLink>
            </div>
          )}

          {/* Data */}
          <button
            type="button"
            className="mobile-section-toggle"
            aria-expanded={mobileSections.data}
            onClick={() => toggleSection("data")}
          >
            Data <span className={`caret ${mobileSections.data ? "open" : ""}`}>▾</span>
          </button>
          {mobileSections.data && (
            <div className="mobile-submenu" role="group" aria-label="Data">
              <NavLink to="/data-critique" className={mobileClass} onClick={closeMenu}>Data Critique</NavLink>
              <NavLink to="/sources" className={mobileClass} onClick={closeMenu}>Sourcing, Processing, & Presenting</NavLink>
              <NavLink to="/bibliography" className={mobileClass} onClick={closeMenu}>Bibliography</NavLink>
            </div>
          )}

          {/* About Us */}
          <button
            type="button"
            className="mobile-section-toggle"
            aria-expanded={mobileSections.about}
            onClick={() => toggleSection("about")}
          >
            About Us <span className={`caret ${mobileSections.about ? "open" : ""}`}>▾</span>
          </button>
          {mobileSections.about && (
            <div className="mobile-submenu" role="group" aria-label="About Us">
              <NavLink to="/team" className={mobileClass} onClick={closeMenu}>Our Team</NavLink>
              <NavLink to="/acknowledgements" className={mobileClass} onClick={closeMenu}>Acknowledgements</NavLink>
            </div>
          )}
          
        </div>
      )}
    </header>
  );
}
