import React from 'react';
import logo from '../../assets/images/saytheunit-logo-header.svg';

const Header = () => {
  return (
    <header className="w-full 2xs:h-12 xs:h-14 2sm:h-14 sm:h-16 tb:h-20 lg:h-28 bg-[#b3d8ef] text-2xl text-white flex items-center justify-center">
      <img
        src={logo}
        alt=""
        className="2xs:w-28 xs:w-32 2sm:w-40 sm:w-[200px] tb:w-[236px] lg:w-[280px]"
      />
    </header>
  );
};

export default Header;
