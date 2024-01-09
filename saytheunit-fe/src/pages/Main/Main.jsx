import React, { useState } from 'react';
import './index.css';
import Header from '../../components/Header/Header';
import Album from '../Album/Album';
import SurveyCard from '../../components/SurveyCard/SurveyCard';
import HitCard from '../../components/HitCard/HitCard';
import SnapshootCard from '../../components/SnapshootCard/SnapshootCard';
import Footer from '../../components/Footer/Footer';
import camera from '../../assets/images/camera-icon.png';

const Main = () => {
  const [showSnapshoot, setShowSnapshoot] = useState(false);

  const toggleSnapshoot = () => {
    setShowSnapshoot(!showSnapshoot);
  };

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
      <div className="mt-0 mb-12 w-full flex flex-col m-auto items-center">
        <div className="w-full py-6 flex flex-col m-auto items-center">
          <img
            onClick={toggleSnapshoot}
            src={camera}
            alt=""
            className="camera 2sm:w-40"
          />
          {!showSnapshoot && (
            <p className="2sm:text-[12px]">카메라를 클릭해보세요!</p>
          )}
        </div>
        {showSnapshoot && <SnapshootCard />}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
