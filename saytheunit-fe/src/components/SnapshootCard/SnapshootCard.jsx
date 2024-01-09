import React from 'react';
import './index.css';

const SnapshootCard = () => {
  return (
    <section className="w-full h-auto bg-[#A80603] text-white 2xs:px-4 xs:px-2 2sm:px-4 px-10 py-6">
      <div className="flex flex-col gap-3 m-auto text-center items-center justify-center">
        <div className="tip-text 2xs:text-[20px] text-[24px] font-extrabold">
          <span className="x-1 2xs:text-xs xs:text-xs 2sm:text-base text-base font-semibold text-white">
            쉽고, 편하고, 한번에 PDF 증거자료를 수집하고 싶다면?
          </span>
        </div>
        <div className="2xs:text-[10px] xs:text-sm 2sm:text-sm">
          <a
            className="no-underline font-bold"
            href="https://mei-day.notion.site/mei-day/SnapshootPDF-047d13b7a868424eb37fa449e2cc5725"
          >
            <button className="w-auto h-auto px-3 py-2 bg-white text-[#A80603] rounded-md font-extrabold">
              SnapshootPDF 사용해보기
            </button>
          </a>
        </div>
        <div className="mt-0 2sm:text-[10px]">제가 개발했습니다.</div>
      </div>
    </section>
  );
};

export default SnapshootCard;
