import React, { useEffect, useState} from 'react';
import './DarkStyle.css'

function DarkMode(){
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
      }, [darkMode]);

    return(
        <input  type="checkbox"
                onChange={() => setDarkMode(!darkMode)}
                checked = {darkMode}
                id = 'check'
                className = 'toggle' />
    );
}
export default DarkMode