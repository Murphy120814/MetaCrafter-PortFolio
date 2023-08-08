import React from 'react';
import { Link } from 'react-scroll';
import LogoDark from '../../assets/finalLogo_dark.png';
import LogoLight from '../../assets/finalLogoLightMode.png';

function NavbarLogo({ darkMode }) {
  return (
    <Link to="home" smooth duration={500} offset={-80}>
      {darkMode ? <img src={LogoDark} alt="MetaCrafted Click to go Home" /> : <img src={LogoLight} alt="MetaCrafted Click to go Home" />}
    </Link>

  );
}

export default NavbarLogo;
