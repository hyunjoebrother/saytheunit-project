import React from 'react';
import kakao from '../../assets/images/icon-kakao.png';
import twitter from '../../assets/images/icon-twitter.png';
import clip from '../../assets/images/icon-clip.png';

const Footer = () => {
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
          description:
            '세세세...Say The Unit! 세븐틴 유닛은 총 8,177개가 나올 수 있는데 같이 유닛 이름 짓기할래?!',
          imageUrl: window.location.href + '/og-image.png',
          link: {
            mobileWebUrl: 'https://saytheunit.com/',
            webUrl: 'https://saytheunit.com/',
          },
        },
        buttons: [
          {
            title: '세븐틴 유닛 구경하기',
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
    <footer className="w-full 2xs:py-3 xs:py-3 2sm:py-3 sm:py-3 tb:py-4 lg:py-5 bg-transparent 2xs:text-[18px] xs:text-[20px] 2sm:text-[20px] sm:text-[22px] text-[24px] lg:text-[28px] font-scriptFont text-black flex items-center justify-around">
      <div className="flex flex-row list-none 2xs:gap-2 xs:gap-2 gap-3">
        <li onClick={() => shareKakao()}>
          <img
            src={kakao}
            alt=""
            className="2xs:w-5 xs:w-5 2sm:w-6 sm:w-6 tb:w-8 lg:w-10"
          />
        </li>
        <li onClick={() => shareTwitter()}>
          <img
            src={twitter}
            alt=""
            className="2xs:w-5 xs:w-5 2sm:w-6 sm:w-6 tb:w-8 lg:w-10"
          />
        </li>
        <li onClick={() => handleCopyClipBoard('https://saytheunit.com/')}>
          <img
            src={clip}
            alt=""
            className="2xs:w-5 xs:w-5 2sm:w-6 sm:w-6 tb:w-8 lg:w-10"
          />
        </li>
      </div>
      <a
        href="https://linkbio.co/6010904ydlS94"
        className="no-underline"
        target="_blank"
        rel="noreferrer noopener"
      >
        Contact Mei
      </a>
    </footer>
  );
};

export default Footer;
