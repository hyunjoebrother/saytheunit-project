import React from 'react';
import Header from '../../components/Header/Header';
import Album from '../Album/Album';
import SurveyCard from '../../components/SurveyCard/SurveyCard';
import HitCard from '../../components/HitCard/HitCard';
import SnapshootCard from '../../components/SnapshootCard/SnapshootCard';
import Footer from '../../components/Footer/Footer';

const Main = () => {
  return (
    <div className="bg-diamondBg bg-repeat bg-contain w-full flex flex-col m-auto items-center">
      <Header />
      <Album />
      <div className="mt-16 w-full flex">
        <SurveyCard />
      </div>
      <div className="mt-16 flex">
        <HitCard />
      </div>
      <div className="mt-16 w-full flex">
        <SnapshootCard />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
