import React from 'react';
import NavbarLinks from './NavbarLinks';
import NavbarLogo from './NavbarLogo';
import NavbarToggleMenu from './NavbarToggleMenu';
import ToggleDarkLightMode from './ToggleDarkLightMode';
import './Navbar.css';

function Navbar({ toggleTheme, darkMode }) {
  return (
    <header className="navbar__container scale-up-center  ">
      <div className="navbar__flex-container">
        <NavbarLogo darkMode={darkMode} />
        <ToggleDarkLightMode toggleTheme={toggleTheme} darkMode={darkMode} />
        <NavbarLinks />
        <NavbarToggleMenu darkMode={darkMode} />
      </div>

    </header>
  );
}

export default Navbar;
