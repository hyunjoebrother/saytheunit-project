import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { useLanguage } from '../../components/Translation/languageContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './index.css';
import ResultCard from '../../components/ResultCard/ResultCard';
import albumBg from '../../assets/images/svt-total-bg-240213.jpeg';
// import bongbong from '../../assets/images/bongbong.png';
import bongbong from '../../assets/images/gamja.png';
import CountingCard from '../../components/CountingCard/CountingCard';

const Album = () => {
  const { language } = useLanguage();
  const [textToShow, setTextToShow] = useState(Array(13).fill(false));
  const [hoveredAreas, setHoveredAreas] = useState([]);
  const [iconsVisibility, setIconsVisibility] = useState(Array(13).fill(false));
  const [selectedAreas, setSelectedAreas] = useState([]); // 태그 수 제한
  const [backendData, setBackendData] = useState([]);

  const navigate = useNavigate();

  const handleAreaClick = index => {
    if (selectedAreas.length === 4 && !selectedAreas.includes(index)) {
      toast.warning('최대 4명까지 선택할 수 있습니다.', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      const selectedIndex = selectedAreas.indexOf(index);
      let updatedSelectedAreas = [...selectedAreas];

      if (selectedIndex === -1) {
        updatedSelectedAreas = [...selectedAreas, index];
      } else {
        updatedSelectedAreas.splice(selectedIndex, 1);
      }

      setSelectedAreas(updatedSelectedAreas);

      setTextToShow(prevState => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });

      setIconsVisibility(prevState => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
    }
  };

  const handleAreaHover = index => {
    setHoveredAreas(prevState => {
      if (!prevState.includes(index)) {
        return [...prevState, index];
      }
      return prevState;
    });
  };

  const handleAreaHoverExit = index => {
    setHoveredAreas(prevState => prevState.filter(area => area !== index));
  };

  const fetchDataFromBackend = async () => {
    try {
      const response = await axios.post('/api/getMembersData', {
        selectedMembers: selectedAreas.map(
          index => areaNames[index].split(' ')[1],
        ),
      });
      // console.log(response.data); // 받은 데이터 출력
      if (response.status === 404) {
        console.error('404 Error: Not Found');
        navigate('/error');
      } else if (response.data.length === 0) {
        // console.log('받은 데이터 없어용', response.data);
        setBackendData(response.data);
      } else {
        // console.log('받은 데이터 있어용', response.data);
        setBackendData(response.data); // 여러 유닛 데이터 중 첫번째만
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // 즉각 반영을 위한 동기 방식
  useEffect(() => {
    fetchDataFromBackend();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAreas]);

  const areaNames = [
    '에스쿱스 SCOUPS',
    '정한 JEONGHAN',
    '조슈아 JOSHUA',
    '준 JUN',
    '호시 HOSHI',
    '원우 WONWOO',
    '우지 WOOZI',
    '디에잇 THE8',
    '민규 MINGYU',
    '도겸 DK',
    '승관 SEUNGKWAN',
    '버논 VERNON',
    '디노 DINO',
  ];

  const bongbongStyles2xs = [
    { top: '40px', left: '206px', width: '14px', transform: 'rotate(4deg)' },
    { top: '84px', left: '4px', width: '16px', transform: 'rotate(-28deg)' },
    { top: '116px', left: '116px', width: '36px', transform: 'rotate(0deg)' },
    { top: '70px', left: '220px', width: '12px', transform: 'rotate(6deg)' },
    { top: '92px', left: '206px', width: '12px', transform: 'rotate(0deg)' },
    { top: '38px', left: '108px', width: '12px', transform: 'rotate(12deg)' },
    { top: '106px', left: '170px', width: '14px', transform: 'rotate(-36deg)' },
    { top: '56px', left: '142px', width: '14px', transform: 'rotate(0deg)' },
    { top: '104px', left: '48px', width: '28px', transform: 'rotate(-20deg)' },
    { top: '50px', left: '168px', width: '18px', transform: 'rotate(40deg)' },
    { top: '42px', left: '76px', width: '12px', transform: 'rotate(4deg)' },
    { top: '62px', left: '190px', width: '14px', transform: 'rotate(-24deg)' },
    { top: '69px', left: '104px', width: '12px', transform: 'rotate(0deg)' },
  ];

  const bongbongStylesxs = [
    { top: '52px', left: '268px', width: '18px', transform: 'rotate(4deg)' },
    { top: '110px', left: '4px', width: '20px', transform: 'rotate(-28deg)' },
    { top: '154px', left: '154px', width: '44px', transform: 'rotate(0deg)' },
    { top: '92px', left: '286px', width: '14px', transform: 'rotate(6deg)' },
    { top: '120px', left: '268px', width: '16px', transform: 'rotate(0deg)' },
    { top: '52px', left: '140px', width: '14px', transform: 'rotate(12deg)' },
    { top: '138px', left: '222px', width: '16px', transform: 'rotate(-36deg)' },
    { top: '74px', left: '186px', width: '16px', transform: 'rotate(0deg)' },
    { top: '140px', left: '62px', width: '32px', transform: 'rotate(-20deg)' },
    { top: '66px', left: '217px', width: '22px', transform: 'rotate(40deg)' },
    { top: '52px', left: '96px', width: '16px', transform: 'rotate(4deg)' },
    { top: '82px', left: '250px', width: '16px', transform: 'rotate(-24deg)' },
    { top: '90px', left: '132px', width: '14px', transform: 'rotate(0deg)' },
  ];

  const bongbongStyles2sm = [
    { top: '56px', left: '290px', width: '20px', transform: 'rotate(4deg)' },
    { top: '120px', left: '4px', width: '22px', transform: 'rotate(-28deg)' },
    { top: '166px', left: '164px', width: '48px', transform: 'rotate(0deg)' },
    { top: '100px', left: '308px', width: '16px', transform: 'rotate(6deg)' },
    { top: '132px', left: '292px', width: '18px', transform: 'rotate(0deg)' },
    { top: '57px', left: '152px', width: '14px', transform: 'rotate(12deg)' },
    { top: '152px', left: '242px', width: '16px', transform: 'rotate(-36deg)' },
    { top: '78px', left: '200px', width: '20px', transform: 'rotate(0deg)' },
    { top: '152px', left: '70px', width: '34px', transform: 'rotate(-20deg)' },
    { top: '70px', left: '236px', width: '26px', transform: 'rotate(40deg)' },
    { top: '60px', left: '102px', width: '16px', transform: 'rotate(4deg)' },
    { top: '90px', left: '272px', width: '18px', transform: 'rotate(-24deg)' },
    { top: '100px', left: '142px', width: '16px', transform: 'rotate(0deg)' },
  ];

  const bongbongStylesLarge = [
    { top: '102px', left: '498px', width: '28px', transform: 'rotate(4deg)' },
    { top: '218px', left: '14px', width: '32px', transform: 'rotate(-28deg)' },
    { top: '296px', left: '284px', width: '68px', transform: 'rotate(0deg)' },
    { top: '174px', left: '528px', width: '24px', transform: 'rotate(6deg)' },
    { top: '228px', left: '498px', width: '28px', transform: 'rotate(0deg)' },
    { top: '100px', left: '262px', width: '20px', transform: 'rotate(12deg)' },
    { top: '260px', left: '418px', width: '22px', transform: 'rotate(-36deg)' },
    { top: '144px', left: '348px', width: '28px', transform: 'rotate(0deg)' },
    { top: '272px', left: '122px', width: '48px', transform: 'rotate(-20deg)' },
    { top: '116px', left: '404px', width: '48px', transform: 'rotate(40deg)' },
    { top: '106px', left: '172px', width: '24px', transform: 'rotate(4deg)' },
    { top: '160px', left: '470px', width: '24px', transform: 'rotate(-24deg)' },
    { top: '176px', left: '244px', width: '22px', transform: 'rotate(0deg)' },
  ];

  return (
    <>
      <section className="w-full h-full 2xs:py-4 xs:py-6 2sm:py-8 sm:py-6 tb:pt-20 tb:pb-10 lg:pt-24 lg:pb-12 flex flex-col items-center justify-center">
        <div className="relative">
          <img
            src={albumBg}
            alt="Album Background"
            useMap="#albumMap2xs"
            className="2xs:w-[268px] 2xs:h-[206px] xs:hidden 2sm:hidden sm:hidden tb:hidden lg:hidden"
          />
          <map name="albumMap2xs">
            <area
              alt=""
              shape="rect"
              coords="202,52,242,82"
              onClick={() => handleAreaClick(0)} // 에스쿱스
              onMouseEnter={() => handleAreaHover(0)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="8,84,44,200"
              onClick={() => handleAreaClick(1)} // 정한
              onMouseEnter={() => handleAreaHover(1)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="120,80,136,100"
              onClick={() => handleAreaClick(2)} // 조슈아
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="112,100,146,200"
              onClick={() => handleAreaClick(2)}
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="218,84,260,106"
              onClick={() => handleAreaClick(3)} // 준
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="222,108,260,200"
              onClick={() => handleAreaClick(3)}
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="192,86,216,112"
              onClick={() => handleAreaClick(4)} // 호시
              onMouseEnter={() => handleAreaHover(4)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="190,116,232,200"
              onClick={() => handleAreaClick(4)}
              onMouseEnter={() => handleAreaHover(4)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="84,50,120,82"
              onClick={() => handleAreaClick(5)} // 원우
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="82,82,94,116"
              onClick={() => handleAreaClick(5)}
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="108,78,122,102"
              onClick={() => handleAreaClick(5)}
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="162,92,178,104"
              onClick={() => handleAreaClick(6)} // 우지
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="154,104,192,200"
              onClick={() => handleAreaClick(6)}
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="120,50,154,80"
              onClick={() => handleAreaClick(7)} // 디에잇
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="140,80,156,102"
              onClick={() => handleAreaClick(7)}
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="58,84,74,104"
              onClick={() => handleAreaClick(8)} // 민규
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="44,102,82,200"
              onClick={() => handleAreaClick(8)}
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="156,64,180,90"
              onClick={() => handleAreaClick(9)} // 도겸
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="180,86,188,104"
              onClick={() => handleAreaClick(9)}
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="36,52,80,80"
              onClick={() => handleAreaClick(10)} // 승관
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="48,82,58,100"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="74,84,80,104"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="176,60,204,84"
              onClick={() => handleAreaClick(11)} // 버논
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="186,86,196,102"
              onClick={() => handleAreaClick(11)}
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="90,80,110,104"
              onClick={() => handleAreaClick(12)} // 디노
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="78,102,116,190"
              onClick={() => handleAreaClick(12)}
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
          </map>
          <img
            src={albumBg}
            alt="Album Background"
            useMap="#albumMapxs"
            className="2xs:hidden xs:w-[348px] xs:h-[267px] 2sm:hidden sm:hidden tb:hidden lg:hidden"
          />
          <map name="albumMapxs">
            <area
              alt=""
              shape="rect"
              coords="264,68,316,104"
              onClick={() => handleAreaClick(0)} // 에스쿱스
              onMouseEnter={() => handleAreaHover(0)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="10,108,58,258"
              onClick={() => handleAreaClick(1)} // 정한
              onMouseEnter={() => handleAreaHover(1)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="156,102,174,132"
              onClick={() => handleAreaClick(2)} // 조슈아
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="150,132,192,260"
              onClick={() => handleAreaClick(2)}
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="282,110,340,152"
              onClick={() => handleAreaClick(3)} // 준
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="294,160,340,258"
              onClick={() => handleAreaClick(3)}
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="252,110,270,134"
              onClick={() => handleAreaClick(4)} // 호시
              onMouseEnter={() => handleAreaHover(4)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="248,138,300,256"
              onClick={() => handleAreaClick(4)}
              onMouseEnter={() => handleAreaHover(4)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="110,64,156,108"
              onClick={() => handleAreaClick(5)} // 원우
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="106,102,122,146"
              onClick={() => handleAreaClick(5)}
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="144,102,154,132"
              onClick={() => handleAreaClick(5)}
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="212,120,230,132"
              onClick={() => handleAreaClick(6)} // 우지
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="196,136,250,260"
              onClick={() => handleAreaClick(6)}
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="156,60,200,104"
              onClick={() => handleAreaClick(7)} // 디에잇
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="178,100,202,132"
              onClick={() => handleAreaClick(7)}
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="74,108,94,128"
              onClick={() => handleAreaClick(8)} // 민규
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="58,130,106,260"
              onClick={() => handleAreaClick(8)}
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="204,80,234,116"
              onClick={() => handleAreaClick(9)} // 도겸
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="230,112,242,128"
              onClick={() => handleAreaClick(9)}
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="46,68,106,106"
              onClick={() => handleAreaClick(10)} // 승관
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="62,110,74,128"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="96,106,104,134"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="230,79,264,108"
              onClick={() => handleAreaClick(11)} // 버논
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="240,114,254,136"
              onClick={() => handleAreaClick(11)}
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="122,106,142,132"
              onClick={() => handleAreaClick(12)} // 디노
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="100,130,154,254"
              onClick={() => handleAreaClick(12)}
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
          </map>
          <img
            src={albumBg}
            alt="Album Background"
            useMap="#albumMap2sm"
            className="2xs:hidden xs:hidden 2sm:w-[380px] 2sm:h-[292px] sm:hidden tb:hidden lg:hidden"
          />
          <map name="albumMap2sm">
            <area
              alt=""
              shape="rect"
              coords="290,76,346,116"
              onClick={() => handleAreaClick(0)} // 에스쿱스
              onMouseEnter={() => handleAreaHover(0)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="12,120,58,284"
              onClick={() => handleAreaClick(1)} // 정한
              onMouseEnter={() => handleAreaHover(1)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="172,116,194,140"
              onClick={() => handleAreaClick(2)} // 조슈아
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="164,144,208,286"
              onClick={() => handleAreaClick(2)}
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="310,118,370,146"
              onClick={() => handleAreaClick(3)} // 준
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="318,146,372,282"
              onClick={() => handleAreaClick(3)}
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="276,122,296,150"
              onClick={() => handleAreaClick(4)} // 호시
              onMouseEnter={() => handleAreaHover(4)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="272,150,326,280"
              onClick={() => handleAreaClick(4)}
              onMouseEnter={() => handleAreaHover(4)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="120,70,170,114"
              onClick={() => handleAreaClick(5)} // 원우
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="118,114,130,140"
              onClick={() => handleAreaClick(5)}
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="158,116,174,144"
              onClick={() => handleAreaClick(5)}
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="226,130,254,152"
              onClick={() => handleAreaClick(6)} // 우지
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="224,152,272,196"
              onClick={() => handleAreaClick(6)}
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="212,194,274,284"
              onClick={() => handleAreaClick(6)}
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="172,64,216,110"
              onClick={() => handleAreaClick(7)} // 디에잇
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="196,112,220,144"
              onClick={() => handleAreaClick(7)}
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="80,116,104,144"
              onClick={() => handleAreaClick(8)} // 민규
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="64,144,116,282"
              onClick={() => handleAreaClick(8)}
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="222,88,256,126"
              onClick={() => handleAreaClick(9)} // 도겸
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="252,118,266,144"
              onClick={() => handleAreaClick(9)}
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="52,72,116,116"
              onClick={() => handleAreaClick(10)} // 승관
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="68,116,80,144"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="104,116,116,148"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="250,84,288,118"
              onClick={() => handleAreaClick(11)} // 버논
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="264,128,274,148"
              onClick={() => handleAreaClick(11)}
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="130,116,154,144"
              onClick={() => handleAreaClick(12)} // 디노
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="112,144,166,276"
              onClick={() => handleAreaClick(12)}
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
          </map>
          <img
            src={albumBg}
            alt="Album Background"
            useMap="#albumMapLarge"
            className="2xs:hidden xs:hidden 2sm:hidden w-[650px] h-[500px]"
          />
          <map name="albumMapLarge">
            <area
              alt=""
              shape="rect"
              coords="488,126,585,194"
              onClick={() => handleAreaClick(0)} // 에스쿱스
              onMouseEnter={() => handleAreaHover(0)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="24,204,100,482"
              onClick={() => handleAreaClick(1)} // 정한
              onMouseEnter={() => handleAreaHover(1)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="294,196,330,240"
              onClick={() => handleAreaClick(2)} // 조슈아
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="280,250,352,482"
              onClick={() => handleAreaClick(2)}
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="528,200,590,254"
              onClick={() => handleAreaClick(3)} // 준
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="534,246,638,486"
              onClick={() => handleAreaClick(3)}
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="472,212,504,254"
              onClick={() => handleAreaClick(4)} // 호시
              onMouseEnter={() => handleAreaHover(4)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="464,258,554,479"
              onClick={() => handleAreaClick(4)}
              onMouseEnter={() => handleAreaHover(4)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="214,122,290,198"
              onClick={() => handleAreaClick(5)} // 원우
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="206,170,222,238"
              onClick={() => handleAreaClick(5)}
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="266,184,292,242"
              onClick={() => handleAreaClick(5)}
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="390,220,432,256"
              onClick={() => handleAreaClick(6)} // 우지
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="386,252,464,348"
              onClick={() => handleAreaClick(6)}
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="364,354,464,484"
              onClick={() => handleAreaClick(6)}
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="300,120,368,184"
              onClick={() => handleAreaClick(7)} // 디에잇
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="336,192,374,240"
              onClick={() => handleAreaClick(7)}
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="142,200,172,250"
              onClick={() => handleAreaClick(8)} // 민규
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="108,244,196,484"
              onClick={() => handleAreaClick(8)}
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="382,154,432,212"
              onClick={() => handleAreaClick(9)} // 도겸
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="432,206,454,244"
              onClick={() => handleAreaClick(9)}
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="90,132,200,202"
              onClick={() => handleAreaClick(10)} // 승관
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="116,202,140,236"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="180,200,196,250"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="428,146,494,204"
              onClick={() => handleAreaClick(11)} // 버논
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="456,220,474,250"
              onClick={() => handleAreaClick(11)}
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="226,200,264,244"
              onClick={() => handleAreaClick(12)} // 디노
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="194,252,282,472"
              onClick={() => handleAreaClick(12)}
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
          </map>

          <div className="absolute top-0 left-0">
            {hoveredAreas.map((hoveredArea, i) => (
              <>
                <div
                  key={i}
                  className="w-full h-full xs:hidden 2sm:hidden sm:hidden tb:hidden lg:hidden"
                  style={{
                    position: 'absolute',
                    ...bongbongStyles2xs[hoveredArea],
                  }}
                >
                  <img
                    src={bongbong}
                    alt=""
                    style={{
                      display: iconsVisibility[hoveredArea] ? 'block' : 'none',
                    }}
                  />
                </div>
                <div
                  key={i}
                  className="w-full h-full 2xs:hidden 2sm:hidden sm:hidden tb:hidden lg:hidden"
                  style={{
                    position: 'absolute',
                    ...bongbongStylesxs[hoveredArea],
                  }}
                >
                  <img
                    src={bongbong}
                    alt=""
                    style={{
                      display: iconsVisibility[hoveredArea] ? 'block' : 'none',
                    }}
                  />
                </div>
                <div
                  key={i}
                  className="w-full h-full 2xs:hidden xs:hidden sm:hidden tb:hidden lg:hidden"
                  style={{
                    position: 'absolute',
                    ...bongbongStyles2sm[hoveredArea],
                  }}
                >
                  <img
                    src={bongbong}
                    alt=""
                    style={{
                      display: iconsVisibility[hoveredArea] ? 'block' : 'none',
                    }}
                  />
                </div>
                <div
                  key={i}
                  className="w-full h-full 2xs:hidden xs:hidden 2sm:hidden"
                  style={{
                    position: 'absolute',
                    ...bongbongStylesLarge[hoveredArea],
                  }}
                >
                  <img
                    src={bongbong}
                    alt=""
                    style={{
                      display: iconsVisibility[hoveredArea] ? 'block' : 'none',
                    }}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
        <div
          className={`relative w-full h-auto 2xs:mt-4 2xs:px-4 2xs:py-2 xs:mt-6 xs:px-4 xs:py-2 2sm:mt-6 2sm:px-4 2sm:py-2 mt-8 px-6 py-8 bg-white ${
            backendData !== 'no select' ? '' : 'hidden'
          }`}
        >
          <div className="w-full 2xs:mt-2 2xs:mb-1 xs:mt-3 xs:mb-2 2sm:mt-4 2sm:mb-3 mt-6 mb-6 2xs:text-[12px] xs:text-[14px] 2sm:text-[14px] text-[18px] font-bold text-center">
            <Trans i18nKey="translations:SelectMember">선택한 멤버</Trans>
            <br />
            <p className="2xs:text-[10px] xs:text-[12px] 2sm:text-[12px] text-[14px] font-light">
              <Trans i18nKey="translations:SelectMemberInfo">
                멤버 또는 버튼을 클릭하면 선택 해제 가능
              </Trans>
            </p>
            <ToastContainer autoClose={1000} closeOnClick limit={1} />
          </div>
          <div className="relative w-full h-auto 2xs:px-0 2xs:pt-1 2xs:pb-3 xs:px-0 xs:pt-1 xs:pb-4 2sm:px-0 2sm:pt-1 2sm:pb-4 px-20 pt-0 pb-4 flex flex-row 2xs:gap-2 xs:gap-2 2sm:gap-3 gap-4 justify-center items-center text-center bg-trasnparent">
            {textToShow.map(
              (show, index) =>
                show && (
                  <div
                    key={index}
                    onClick={() => handleAreaClick(index)}
                    className="member-tag 2xs:w-16 2xs:h-6 xs:w-16 xs:h-6 2sm:w-16 2sm:h-6 w-20 h-8 rounded-[28px] text-white flex items-center justify-center cursor-pointer"
                  >
                    <p className="2xs:text-xs xs:text-sm 2sm:text-sm text-md font-bold">
                      {areaNames[index].split(' ')[0]}
                    </p>
                  </div>
                ),
            )}
          </div>
        </div>
      </section>
      <section className="w-full h-auto flex flex-col gap-4 m-auto items-center bg-transparent 2xs:px-6 2xs:pt-0 2xs:pb-4 xs:px-6 xs:pt-0 xs:pb-4 2sm:px-8 2sm:pt-0 2sm:pb-4 sm:px-10 sm:py-6 tb:px-10 lg:px-36 pt-0 pb-6">
        {backendData === 'no select' ? (
          <div className="resultcard w-full flex flex-col gap-4 m-auto items-center">
            <ResultCard text="액자에서 멤버를 선택해주세요 (4명까지 가능)" />
            <CountingCard />
          </div>
        ) : backendData.length === 0 ? (
          <div className="resultcard w-full flex flex-col m-auto items-center">
            <ResultCard text="유닛 이름이 아직 없습니다..!" />
          </div>
        ) : (
          backendData.map((data, index) => (
            <div
              className="resultcard w-full flex flex-col m-auto items-center"
              key={index}
            >
              <ResultCard text={null} result={data} />
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default Album;
