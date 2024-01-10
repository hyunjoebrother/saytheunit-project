import React, { useState, useLayoutEffect } from 'react';
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

  const hoverImgPreload = () => {
    let img = new Image();
    img.src = '/src/assets/images/svt-total-bg-frame.jpg';
  };

  useLayoutEffect(() => {
    hoverImgPreload();
  }, []);

  return (
    <div className="bg-diamondBg bg-repeat bg-contain w-full h-full flex flex-col m-auto items-center">
      <Header />
      <Album />
      <div className="mt-10 w-full flex">
        <SurveyCard />
      </div>
      <div className="mt-14 flex">
        <HitCard />
      </div>
      <div className="mt-0 mb-16 w-full flex flex-col m-auto items-center">
        <div className="w-full py-6 flex flex-col m-auto items-center">
          <img
            onClick={toggleSnapshoot}
            src={camera}
            alt=""
            className="camera 2xs:w-32 2xs:h-[170px] xs:w-36 xs:h-[192px] 2sm:w-40 2sm:h-[212px] sm:w-[200px] sm:h-[266px] tb:w-[248px] tb:h-[330px] lg:w-[260px] lg:h-[346px]"
          />
          {!showSnapshoot && (
            <p className="2xs:text-[10px] xs:text-[10px] 2sm:text-[12px] sm:text-[14px] text-[16px]">
              카메라를 클릭해보세요!
            </p>
          )}
        </div>
        {showSnapshoot && <SnapshootCard />}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
