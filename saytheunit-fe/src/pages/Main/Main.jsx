import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { useLanguage } from '../../components/Translation/languageContext';
import './index.css';
import Header from '../../components/Header/Header';
import Album from '../Album/Album';
import SurveyCard from '../../components/SurveyCard/SurveyCard';
import HitCard from '../../components/HitCard/HitCard';
import SnapshootCard from '../../components/SnapshootCard/SnapshootCard';
import Footer from '../../components/Footer/Footer';
import camera from '../../assets/images/day-icon.gif';
import ShareCard from '../../components/ShareCard/ShareCard';

const Main = () => {
  const { language } = useLanguage();
  const [showSnapshoot, setShowSnapshoot] = useState(false);

  const toggleSnapshoot = () => {
    setShowSnapshoot(!showSnapshoot);
  };

  return (
    <div className="bg-dinoBg bg-repeat bg-contain w-full h-full flex flex-col m-auto items-center">
      <Header />
      <Album />
      <div className="mt-10 w-full flex">
        <SurveyCard />
      </div>
      <div className="2xs:mt-10 xs:mt-14 mt-28 flex">
        <ShareCard />
      </div>
      <div className="mt-0 mb-16 w-full flex flex-col m-auto items-center">
        <div className="w-full pt-8 pb-0 lg:py-20 flex flex-col m-auto items-center">
          <img
            onClick={toggleSnapshoot}
            src={camera}
            alt=""
            className="camera 2xs:w-28 2xs:h-[144px] xs:w-32 xs:h-[164px] 2sm:w-36 2sm:h-[218px] sm:w-[180px] sm:h-[240px] tb:w-[228px] tb:h-[280px] lg:w-[248px] lg:h-[328px]"
          />
          {!showSnapshoot && (
            <p className="2xs:text-[10px] xs:text-[10px] 2sm:text-[12px] sm:text-[14px] text-[16px] font-bold">
              <Trans i18nKey="translations:ClickCamera">클릭해보세요!</Trans>
            </p>
          )}
        </div>
        {showSnapshoot && <SnapshootCard />}
      </div>
      <div className="2xs:py-0 my-16 flex">
        <HitCard />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
