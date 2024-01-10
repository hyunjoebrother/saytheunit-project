import React from 'react';
import logo from '../../assets/images/logo-header-colored.png';

const Header = () => {
  return (
    <header className="w-full 2xs:h-12 xs:h-14 2sm:h-14 sm:h-16 tb:h-20 lg:h-28 bg-[#b3d8ef] text-2xl text-white flex items-center justify-center">
      <a href="/">
        <img
          src={logo}
          alt="Say The Unit"
          className="2xs:w-32 2xs:h-7 xs:w-36 xs:h-8 2sm:w-[172px] 2sm:h-[38px] sm:w-[200px] sm:h-11 tb:w-[236px] tb:h-[52px] lg:w-[280px] lg:h-[62px] cursor-pointer"
        />
      </a>
    </header>
  );
};

export default Header;
