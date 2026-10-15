import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className="navbar">
      <a href="#hero" className="nav-logo" onClick={() => setOpen(false)}>HS</a>
      <div className="nav-right">
        <ThemeToggle />
        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label="Toggle navigation menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav id="nav-menu" className={`nav-links ${open ? 'open' : ''}`} aria-label="Main navigation">
        <a href="#hero" className="nav-link" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" className="nav-link" onClick={() => setOpen(false)}>About</a>
        <a href="#timeline" className="nav-link" onClick={() => setOpen(false)}>Timeline</a>
        <a href="#skills-section" className="nav-link" onClick={() => setOpen(false)}>Skills</a>
        <a href="#contact" className="nav-link" onClick={() => setOpen(false)}>Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
