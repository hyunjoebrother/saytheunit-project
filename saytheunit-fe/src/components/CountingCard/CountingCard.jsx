import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import './index.css';

const CountingCard = () => {
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
    <section className="w-full 2sm:w-[326px] sm:w-[480px] tb:w-[560px] lg:w-[600px] flex h-auto 2xs:rounded-[10px] rounded-2xl bg-white 2xs:px-4 xs:px-2 2sm:px-4 px-10 py-4">
      <div className="flex flex-col gap-2 m-auto text-center items-center justify-center">
        <p className="2xs:text-[20px] text-[24px] font-extrabold text-[#00dcb6]">
          <span className="sayingFont">"</span>
          {count}
          <span className="sayingFont">"</span>
          {/* <span className="mx-1 2xs:text-xs xs:text-xs 2sm:text-xs text-sm font-semibold text-black">
            개의 유닛
          </span> */}
        </p>
        <p className="scriptFont tip-text 2xs:text-[10px] xs:text-sm 2sm:text-sm text-black">
          <Trans i18nKey="translations:WeverseInfo1">
            세븐틴 멤버 13명을 기준으로 2~12명 조합을 만든다고 가정했을 때,
          </Trans>
          <br />
          <Trans i18nKey="translations:WeverseInfo2">
            발생할 수 있는 조합의 수는 다음과 같다.{' '}
          </Trans>
          <a
            className="no-underline text-[#00dcb6]"
            target="_blank"
            rel="noreferrer noopener"
            href="https://magazine.weverse.io/article/view?lang=ko&num=422"
          >
            [<Trans i18nKey="translations:WeverseInfo3">위버스 매거진</Trans>]
          </a>
        </p>
      </div>
    </section>
  );
};

export default CountingCard;
