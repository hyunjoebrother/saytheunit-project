import React from 'react';
import logo from '../../assets/images/logo-header-colored.png';

const Header = () => {
  return (
    <header className="w-full 2xs:h-12 xs:h-14 2sm:h-14 sm:h-16 tb:h-20 lg:h-28 bg-[#b3d8ef] text-2xl text-white flex items-center justify-center">
      <a href="/">
        <img
          src={logo}
          alt="Say The Unit"
          className="2xs:w-32 xs:w-36 2sm:w-[172px] sm:w-[200px] tb:w-[236px] lg:w-[280px] cursor-pointer"
        />
      </a>
    </header>
  );
};

export default Header;
