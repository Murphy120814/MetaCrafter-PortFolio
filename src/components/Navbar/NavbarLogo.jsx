import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/metacrafter_new_logo-1.png';

function NavbarLogo() {
  return (
    <Link to="/home">
      <img src={Logo} alt="MetaCrafted Click to go Home" />
    </Link>

  );
}

export default NavbarLogo;
