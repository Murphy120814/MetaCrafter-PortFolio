import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import NavbarMenuLinks from './NavbarMenuLinks';

function NavbarToggleMenu({ darkMode }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbarToggleMenu ">
      {toggleMenu ? (
        <RiCloseLine
          color={darkMode ? '#FF0000' : '#c97712'}
          size={27}
          onClick={() => {
            setToggleMenu(false);
          }}
        />
      ) : (
        <RiMenu3Line
          color={darkMode ? '#FF0000' : '#c97712'}
          size={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
      )}

      {toggleMenu && (
        <div className="navbarToggleMenu__container scale-up-center">
          <div className="navbarToggleMenu__container-links">
            <NavbarMenuLinks />
          </div>
        </div>
      )}

    </div>
  );
}

export default NavbarToggleMenu;
