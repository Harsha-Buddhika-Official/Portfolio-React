import React, { useState } from 'react';
import './navigationStyle.css';
import DarkMode from './DarkMode/DarkMode';

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <div className="navbar-logo">
            <a href="/">Portfolio</a>
          </div>
          {!isMenuOpen && (
            <button className="hamburger-menu" onClick={toggleMenu} aria-label="Open menu">
              <div className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          )}
        </div>
        
        {isMenuOpen && (
          <div className="mobile-menu">
            <button className="close-menu-btn" onClick={toggleMenu} aria-label="Close menu">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <a href="#home" className="mobile-menu-item">Home</a>
            <a href="#about" className="mobile-menu-item">About</a>
            <a href="#projects" className="mobile-menu-item">Project</a>
            <a href="#education" className="mobile-menu-item">Education</a>
            <a href="#contact" className="mobile-menu-item">Contact</a>
          </div>
        )}
        
        <div className="navbar-menu desktop-menu">
          <a href="#home" className="navbar-item">Home</a>
          <a href="#about" className="navbar-item">About</a>
          <a href="#projects" className="navbar-item">Projects</a>
          <a href="#education" className="navbar-item">Education</a>
          <a href="#contact" className="navbar-item">Contact</a>
          
          <div className="dark-mode-toggle">
            <DarkMode/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;