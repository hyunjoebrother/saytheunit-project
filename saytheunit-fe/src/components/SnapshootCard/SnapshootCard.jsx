import React from 'react';
import './index.css';

const SnapshootCard = () => {
  return (
    <section className="w-full h-auto bg-[#fcabab] text-white 2xs:px-4 xs:px-2 2sm:px-4 px-10 py-6">
      <div className="flex flex-col gap-2 m-auto text-center items-center justify-center">
        <p className="2xs:text-[20px] text-[24px] font-extrabold text-[#a03333]">
          <span className="mx-1 2xs:text-xs xs:text-xs 2sm:text-xs text-sm font-semibold">
            편하고 빠르게 악플 고소를 하고 싶다면?
          </span>
        </p>
        <p className="tip-text 2xs:text-[10px] xs:text-sm 2sm:text-sm">
          내가 한 번 지어볼까?!
          <a
            className="no-underline text-[#a03333] font-bold"
            href="https://magazine.weverse.io/article/view?lang=ko&num=422"
          >
            SnapshootPDF
          </a>
          <br />
          대충 로로 사진
        </p>
      </div>
    </section>
  );
};

export default SnapshootCard;
