import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/metacrafter_new_logo-1.png';

function NavbarLogo() {
  return (
    <Link to="home" smooth duration={500} offset={-80}>
      <img src={Logo} alt="MetaCrafted Click to go Home" />
    </Link>

  );
}

export default NavbarLogo;
