import React from 'react';
import { Trans } from 'react-i18next';
import { useLanguage } from '../../components/Translation/languageContext';
import './index.css';

const SnapshootCard = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full h-auto bg-[#A80603] text-white 2xs:px-2 xs:px-2 2sm:px-4 px-10 py-6 sm:py-8 tb:py-10 lg:py-12">
      <div className="flex flex-col gap-3 tb:gap-6 lg:gap-6 m-auto text-center items-center justify-center">
        <div className="tip-text font-extrabold">
          <span className="x-1 2xs:text-[10px] xs:text-xs 2sm:text-base text-base font-semibold text-white">
            <Trans i18nKey="translations:SnapshootInfo1">
              쉽고, 편하고, 한번에 PDF 증거자료를 수집하고 싶다면?
            </Trans>
          </span>
        </div>
        <div className="2xs:text-[10px] xs:text-sm 2sm:text-sm">
          <a
            className="no-underline font-bold"
            target="_blank"
            rel="noreferrer noopener"
            href="https://mei-day.notion.site/mei-day/SnapshootPDF-047d13b7a868424eb37fa449e2cc5725"
          >
            <button className="w-auto h-auto px-3 py-2 bg-white text-[#A80603] rounded-md font-extrabold">
              <Trans i18nKey="translations:SnapshootInfo2">
                SnapshootPDF 사용해보기
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
