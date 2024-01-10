import React from 'react';
import carrot from '../../assets/images/carrot-icon.png';
import './index.css';

const HitCard = () => {
  return (
    <section className="w-full h-auto 2xs:rounded-[10px] xs:rounded-[12px] rounded-2xl bg-white text-black 2xs:px-6 xs:px-6 2sm:px-6 px-10 py-6 tb:py-8 lg:py-10">
      <div className="flex flex-col gap-2 m-auto text-center items-center justify-center">
        <div className="w-full flex-inline flex-col m-auto items-center justify-center 2xs:text-[16px] text-[22px] font-extrabold text-[#fda73e]">
          <img
            src={carrot}
            alt=""
            className="flex m-auto mb-3 tb:mb-5 lg:mb-6 w-20 tb:w-24 lg:w-28 h-20 tb:h-24 lg:h-28"
          />
          <p>
            <span className="2xs:text-[10px] xs:text-xs 2sm:text-xs text-sm font-semibold text-black">
              방문자 수
            </span>
            <div className="w-full flex m-auto items-center justify-center 2xs:text-xs xs:text-xs 2sm:text-xs text-sm font-semibold text-black">
              <a href="https://hits.sh/saytheunit.com/">
                <img
                  alt="Hits"
                  className="w-full h-full"
                  src="https://hits.sh/saytheunit.com.svg?label=HITs&color=ffffff&labelColor=fda73e"
                />
              </a>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HitCard;
