import React from 'react';
import './Navigation.css';

const Navigation = ({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = [
    { id: 'narrative', label: 'Narrative' },
    { id: 'data', label: 'The Data' },
    { id: 'resources', label: 'Resources' },
    { id: 'about', label: 'About Us' },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <button
          onClick={() => setCurrentPage('narrative')}
          className="logo"
        >
          Project:Mind
        </button>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`nav-link ${currentPage === item.id ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="menu-icon"
          >
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`mobile-menu-item ${currentPage === item.id ? 'mobile-menu-item-active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navigation;