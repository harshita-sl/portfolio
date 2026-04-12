import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">HS</div>
      <div className="nav-right">
        <div className="nav-links">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#timeline" className="nav-link">Timeline</a>
          <a href="#skills-section" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
