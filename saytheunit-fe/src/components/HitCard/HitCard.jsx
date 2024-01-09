import React, { useEffect, useState } from 'react';
import carrot from '../../assets/images/carrot-icon.png';
import './index.css';

const HitCard = () => {
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
    <section className="w-full 2sm:w-[326px] sm:w-[480px] tb:w-[560px] lg:w-[600px] h-auto 2xs:rounded-[10px] xs:rounded-[12px] rounded-2xl bg-white text-black 2xs:px-4 xs:px-2 2sm:px-4 px-10 py-6">
      <div className="flex flex-col gap-2 m-auto text-center items-center justify-center">
        <div className="w-full flex-inline flex-col m-auto items-center justify-center 2xs:text-[16px] text-[20px] font-extrabold text-[#fda73e]">
          <img src={carrot} alt="" className="flex m-auto mb-3 2sm:w-20" />
          <p>
            <span className="mx-1 2xs:text-xs xs:text-xs 2sm:text-xs text-sm font-semibold text-black">
              방문한 당근
            </span>
            {count}
            <span className="mx-1 2xs:text-xs xs:text-xs 2sm:text-xs text-sm font-semibold text-black">
              명
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HitCard;
