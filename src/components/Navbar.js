import React from 'react';

const Navbar = ({ scrollToSection }) => (
  <nav className="navbar">
    <h1 className="nav-logo">$GRIT</h1>
    <div className="nav-links">
      <button className="nav-btn animate-btn" onClick={() => scrollToSection('presale')}>
        Presale
      </button>
      <button className="nav-btn animate-btn" onClick={() => scrollToSection('tokenomics')}>
        Tokenomics
      </button>
      <button className="nav-btn animate-btn" onClick={() => scrollToSection('roadmap')}>
        Roadmap
      </button>
      <button className="nav-btn animate-btn" onClick={() => scrollToSection('why-grit')}>
        Why $GRIT
      </button>
    </div>
  </nav>
);

export default Navbar;