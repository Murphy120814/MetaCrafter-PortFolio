import React from 'react';
import NavbarLinks from './NavbarLinks';
import NavbarLogo from './NavbarLogo';
import NavbarToggleMenu from './NavbarToggleMenu';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar__container scale-up-center  ">
      <div className="navbar__flex-container">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarToggleMenu />
      </div>

    </header>
  );
}

export default Navbar;
