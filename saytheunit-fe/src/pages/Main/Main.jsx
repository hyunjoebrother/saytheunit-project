import React from 'react';
import Header from '../../components/Header/Header';
import Album from '../Album/Album';

const Main = () => {
  return (
    <div className="bg-diamondBg bg-repeat bg-contain">
      <Header />
      <Album />
    </div>
  );
};

export default Main;
