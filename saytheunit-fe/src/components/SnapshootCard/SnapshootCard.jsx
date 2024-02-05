import React from 'react';
import { Trans } from 'react-i18next';
import { useLanguage } from '../../components/Translation/languageContext';
import './index.css';

const SnapshootCard = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full h-auto bg-[#ea56c8] text-white 2xs:px-2 xs:px-2 2sm:px-4 px-10 py-6 sm:py-8 tb:py-10 lg:py-12">
      <div className="flex flex-col gap-3 tb:gap-6 lg:gap-6 m-auto text-center items-center justify-center">
        <div className="tip-text font-extrabold">
          <span className="x-1 2xs:text-[10px] xs:text-xs 2sm:text-base text-base font-semibold text-white">
            <Trans i18nKey="translations:SnapshootInfo1">
              "생카 정보는, 생카데이로 한 번에! 같이 생일카페 갈래?!"
            </Trans>
          </span>
        </div>
        <div className="2xs:text-[10px] xs:text-sm 2sm:text-sm">
          <a
            className="no-underline font-bold"
            target="_blank"
            rel="noreferrer noopener"
            href="https://saengcaday.com"
          >
            <button className="w-auto h-auto px-3 py-2 bg-white text-[#ea56c8] rounded-md font-extrabold">
              <Trans i18nKey="translations:SnapshootInfo2">
                생카데이 사용해보기
              </Trans>
            </button>
          </a>
        </div>
        <div className="mt-0 2xs:text-[8px] xs:text-[10px] 2sm:text-[10px] text-[12px]">
          <Trans i18nKey="translations:SnapshootInfo3">
            제가 개발했습니다.
          </Trans>
        </div>
      </div>
    </section>
  );
};

export default SnapshootCard;
