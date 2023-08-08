import React from 'react';
import sun from '../../assets/sun-svgrepo-com.png';
import moon from '../../assets/moon-svgrepo-com.png';

function ToggleDarkLightMode({ toggleTheme, darkMode }) {
  return (
    <button type="button" className="sunLightMode" onClick={toggleTheme}>
      {darkMode ? <img src={sun} alt="LightMode" title="Switch to Light Mode" /> : <img src={moon} alt="NightMode" title="Switch to Dark Mode" />}
    </button>
  );
}

export default ToggleDarkLightMode;
