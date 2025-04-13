import React, { useEffect, useState} from 'react';
import './DarkStyle.css'

function DarkMode(){
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === null ? true : JSON.parse(savedMode);
  });
    
    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return(
    <div className="theme-toggle">
      <div className="switch">
        <input  type="checkbox"
                onChange={() => setDarkMode(!darkMode)}
                checked = {darkMode}
                id = 'check'
                className = 'toggle' />
        <label htmlFor="check" className="slider"/>
      </div>
    </div>
    );
}
export default DarkMode