import React, { useEffect, useState } from 'react';
import './index.css';

const SurveyCard = () => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const end = 8177;
  const duration = 1000;

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
    <section className="w-full h-auto bg-[#4193c6] text-white 2xs:px-4 xs:px-2 2sm:px-4 px-10 py-6">
      <div className="flex flex-col gap-2 m-auto text-center items-center justify-center">
        <p className="2xs:text-[20px] text-[24px] font-extrabold text-[#00dcb6]">
          <span className="mx-1 2xs:text-xs xs:text-xs 2sm:text-xs text-sm font-semibold">
            현재
          </span>
          <span className="font-sayingFont">"</span>
          {count}
          <span className="font-sayingFont">"</span>
          <span className="mx-1 2xs:text-xs xs:text-xs 2sm:text-xs text-sm font-semibold">
            개의 유닛 이름이 있어요!
          </span>
        </p>
        <p className="tip-text 2xs:text-[10px] xs:text-sm 2sm:text-sm">
          내가 한 번 지어볼까?!
          <a
            className="no-underline text-[#00dcb6] font-bold"
            href="https://magazine.weverse.io/article/view?lang=ko&num=422"
          >
            유닛 이름짓기 참여하기
          </a>
          <br />
          중복된 이름은 제외합니다. 업데이트 기간 소요 1.7일 내
        </p>
      </div>
    </section>
  );
};

export default SurveyCard;
