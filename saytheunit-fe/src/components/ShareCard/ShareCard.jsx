import React from 'react';
import { Trans } from 'react-i18next';
import { useLanguage } from '../Translation/languageContext';
import './index.css';
import kakao from '../../assets/images/icon-kakao.png';
import twitter from '../../assets/images/icon-twitter.png';
import clip from '../../assets/images/icon-clip.png';

const ShareCard = () => {
  const { language } = useLanguage();

  const shareKakao = () => {
    // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('41697fce011c61b383e8bbda68eff6ec');
      }

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: 'Say The Unit - 세더유닛',
          description:
            '세세세...Say The Unit! 같이 세븐틴 유닛 이름 짓기할래?!',
          imageUrl: 'https://saytheunit.com/album-image.png',
          link: {
            mobileWebUrl: 'https://saytheunit.com/',
            webUrl: 'https://saytheunit.com/',
          },
        },
        buttons: [
          {
            title: '세더유닛 구경하기',
            link: {
              mobileWebUrl: 'https://saytheunit.com/',
              webUrl: 'https://saytheunit.com/',
            },
          },
        ],
      });
    }
  };

  const shareTwitter = () => {
    let sendText =
      '세세세...Say The Unit! 세븐틴 유닛은 총 8,177개가 나올 수 있는데 같이 유닛 이름 짓기할래?!';
    let sendUrl = 'https://saytheunit.com/'; // 전달할 URL
    window.open(
      'https://twitter.com/intent/tweet?text=' + sendText + '&url=' + sendUrl,
    );
  };

  const handleCopyClipBoard = text => {
    try {
      navigator.clipboard.writeText(text).then(res => {
        alert('링크 복사 완료!');
      });
    } catch (error) {
      alert('복사 실패!');
    }
  };

  return (
    <section className="w-full h-auto 2xs:rounded-[10px] xs:rounded-[12px] rounded-2xl bg-white text-black 2xs:px-6 xs:px-6 2sm:px-6 px-10 py-6 tb:py-8 lg:py-10">
      <div className="flex flex-col m-auto text-center items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <span className="2xs:text-[12px] xs:text-[16px] 2sm:text-[16px] text-[18px] font-extrabold text-black">
            <Trans i18nKey="translations:ShareTitle">세더유닛 공유하기</Trans>
          </span>
          <div className="2xs:mt-1 2xs:mb-3 xs:mt-2 xs:mb-5 2sm:mt-2 2sm:mb-6 mt-2 mb-8 w-full flex flex-col m-auto 2xs:text-[8px] xs:text-xs 2sm:text-xs text-sm font-medium text-black">
            <Trans i18nKey="translations:ShareInfo1">
              세븐틴이 친구 한 명씩 한 번만 공유해줘도 13명...
            </Trans>
            <br />
            <Trans i18nKey="translations:ShareInfo2">
              근데 거기서 한 번 더 공유하면? 14명이나 세더유닛!!!
            </Trans>
          </div>
        </div>
        <div>
          <ul className="flex flex-row list-none gap-4 lg:gap-6">
            <li onClick={() => shareKakao()}>
              <img
                src={kakao}
                alt=""
                className="2xs:w-6 2xs:h-6 xs:w-7 xs:h-7 2sm:w-8 2sm:h-8 sm:w-10 sm:h-10 tb:w-10 tb:h-10 lg:w-12 lg:h-12"
              />
            </li>
            <li onClick={() => shareTwitter()}>
              <img
                src={twitter}
                alt=""
                className="2xs:w-6 2xs:h-6 xs:w-7 xs:h-7 2sm:w-8 2sm:h-8 sm:w-10 sm:h-10 tb:w-10 tb:h-10 lg:w-12 lg:h-12"
              />
            </li>
            <li onClick={() => handleCopyClipBoard('https://saytheunit.com/')}>
              <img
                src={clip}
                alt=""
                className="2xs:w-6 2xs:h-6 xs:w-7 xs:h-7 2sm:w-8 2sm:h-8 sm:w-10 sm:h-10 tb:w-10 tb:h-10 lg:w-12 lg:h-12"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShareCard;
