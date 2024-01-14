import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './index.css';

const SurveyCard = () => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const { t, i18n } = useTranslation();
  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  };

  const end = 33; // 240110 데이터 업데이트
  const duration = 1700;

  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  const easeOutExpo = number => {
    return number === 1 ? 1 : 1 - Math.pow(2, -10 * number);
  };

  useEffect(() => {
    let currentFrame = 0;

    const animateCount = () => {
      const progress = easeOutExpo(currentFrame / totalFrame);
      const newCount = Math.round(end * progress);

      setCount(newCount);

      currentFrame++;

      if (currentFrame <= totalFrame) {
        requestAnimationFrame(animateCount);
      } else {
        setIsAnimating(false);
      }
    };

    if (isAnimating) {
      requestAnimationFrame(animateCount);
    }
  }, [end, isAnimating, totalFrame]);

  return (
    <section className="w-full h-auto bg-[#4193c6] text-white 2xs:px-4 xs:px-2 2sm:px-4 px-10 2xs:py-4 xs:py-6 2sm:py-6 py-8 lg:py-12">
      <div className="flex flex-col 2xs:gap-2 gap-3 sm:gap-4 lg:gap-6 m-auto text-center items-center justify-center">
        <button className="TransButton" onClick={() => changeLanguage('kr')}>
          {t('translations:Korean')}
        </button>
        <button className="TransButton" onClick={() => changeLanguage('en')}>
          {t('translations:English')}
        </button>
        <p className="tip-text 2xs:text-[20px] text-[24px] lg:text-[28px] font-extrabold text-[#00dcb6]">
          <span className="mx-1 2xs:text-xs xs:text-xs 2sm:text-base text-base font-semibold text-white">
            <Trans i18nKey="translations:now">현재</Trans>
            <Trans i18nKey="translations:welcome">Welcome to React'</Trans>
          </span>
          {count}
          <span className="mx-1 2xs:text-xs xs:text-xs 2sm:text-base text-base font-semibold text-white">
            <Trans i18nKey="translations:count">개의 유닛 이름이 있어요!</Trans>
          </span>
        </p>
        <div className="2xs:text-[10px] xs:text-sm 2sm:text-sm">
          나도 한번 지어볼까?! &gt;&gt;&gt;
          <a
            className="no-underline font-bold"
            target="_blank"
            rel="noreferrer noopener"
            href="https://forms.gle/4J8qkMRFCnDfASRXA"
          >
            <button className="ml-2 w-auto h-auto px-3 py-2 bg-white text-[#4193c6] rounded-md font-extrabold">
              유닛 이름 짓기 참여하기
            </button>
          </a>
        </div>
        <div className="mt-3 2xs:text-[8px] xs:text-[10px] 2sm:text-[10px] sm:text-[14px]">
          유닛 조합은{' '}
          <span className="text-[#00dcb6] font-semibold">개인 1명부터 4명</span>
          까지 제한되며, 중복된 이름은 제외합니다.
          <br />
          자세한 내용은 참여하기 버튼을 클릭해주세요
        </div>
      </div>
    </section>
  );
};

export default SurveyCard;
