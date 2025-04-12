import React from 'react';
import './NavigationStyle.css'
// import './temp.css'
import DarkMode from '../DarkMode/DarkMode.jsx'

function NavigationBar(){
    return (
        <nav className="navbar">
          <div className="navbar-container">
            {/* Left side - Portfolio Logo */}
            <div className="navbar-logo">
              <a href="/">Portfolio</a>
            </div>
            
            {/* Right side - Navigation Links and Dark Mode Toggle */}
            <div className="navbar-menu">
              <a href="#home" className="navbar-item">Home</a>
              <a href="#about" className="navbar-item">About</a>
              <a href="#projects" className="navbar-item">Projects</a>
              <a href="#results" className="navbar-item">Results</a>
              <a href="#contact" className="navbar-item">Contact</a>
              
              {/* Space for Dark Mode Toggle */}
              <div className="dark-mode-toggle">
                <DarkMode/>
              </div>
            </div>
          </div>
        </nav>
      );
}

export default NavigationBar