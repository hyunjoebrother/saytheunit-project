import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './index.css';
import ResultCard from '../../components/ResultCard/ResultCard';
import albumBg from '../../assets/images/svt-total-bg.jpeg';
import bongbong from '../../assets/images/bongbong.png';

const Album = () => {
  const [textToShow, setTextToShow] = useState(Array(13).fill(false));
  const [hoveredAreas, setHoveredAreas] = useState([]);
  const [iconsVisibility, setIconsVisibility] = useState(Array(13).fill(false));
  const [selectedAreas, setSelectedAreas] = useState([]); // 태그 수 제한
  const [backendData, setBackendData] = useState([]);

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
      if (response.data.length === 0) {
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
    { top: '26px', left: '74px', width: '10px', transform: 'rotate(8deg)' },
    { top: '44px', left: '104px', width: '10px', transform: 'rotate(-20deg)' },
    { top: '24px', left: '158px', width: '12px', transform: 'rotate(0deg)' },
    { top: '36px', left: '194px', width: '12px', transform: 'rotate(-6deg)' },
    { top: '40px', left: '144px', width: '10px', transform: 'rotate(0deg)' },
    { top: '41px', left: '92px', width: '10px', transform: 'rotate(8deg)' },
    { top: '43px', left: '32px', width: '10px', transform: 'rotate(14deg)' },
    { top: '74px', left: '192px', width: '14px', transform: 'rotate(16deg)' },
    { top: '68px', left: '98px', width: '16px', transform: 'rotate(-14deg)' },
    { top: '52px', left: '44px', width: '12px', transform: 'rotate(-14deg)' },
    { top: '66px', left: '152px', width: '10px', transform: 'rotate(4deg)' },
    { top: '94px', left: '64px', width: '14px', transform: 'rotate(-16deg)' },
    { top: '176px', left: '88px', width: '68px', transform: 'rotate(0deg)' },
  ];

  const bongbongStylesxs = [
    { top: '34px', left: '94px', width: '12px', transform: 'rotate(18deg)' },
    { top: '56px', left: '132px', width: '12px', transform: 'rotate(-8deg)' },
    { top: '30px', left: '198px', width: '14px', transform: 'rotate(0deg)' },
    { top: '44px', left: '244px', width: '14px', transform: 'rotate(0deg)' },
    { top: '50px', left: '184px', width: '12px', transform: 'rotate(16deg)' },
    { top: '52px', left: '114px', width: '12px', transform: 'rotate(8deg)' },
    { top: '52px', left: '38px', width: '14px', transform: 'rotate(6deg)' },
    { top: '94px', left: '240px', width: '18px', transform: 'rotate(16deg)' },
    { top: '86px', left: '122px', width: '20px', transform: 'rotate(-14deg)' },
    { top: '66px', left: '56px', width: '14px', transform: 'rotate(-14deg)' },
    { top: '82px', left: '188px', width: '14px', transform: 'rotate(4deg)' },
    { top: '118px', left: '82px', width: '16px', transform: 'rotate(-16deg)' },
    { top: '220px', left: '116px', width: '80px', transform: 'rotate(0deg)' },
  ];

  const bongbongStyles2sm = [
    { top: '37px', left: '104px', width: '16px', transform: 'rotate(10deg)' },
    { top: '62px', left: '146px', width: '16px', transform: 'rotate(-12deg)' },
    { top: '36px', left: '222px', width: '18px', transform: 'rotate(0deg)' },
    { top: '50px', left: '274px', width: '18px', transform: 'rotate(-6deg)' },
    { top: '58px', left: '208px', width: '14px', transform: 'rotate(12deg)' },
    { top: '59px', left: '128px', width: '14px', transform: 'rotate(8deg)' },
    { top: '60px', left: '42px', width: '14px', transform: 'rotate(4deg)' },
    { top: '106px', left: '274px', width: '18px', transform: 'rotate(16deg)' },
    { top: '100px', left: '140px', width: '20px', transform: 'rotate(-14deg)' },
    { top: '76px', left: '62px', width: '16px', transform: 'rotate(-14deg)' },
    { top: '94px', left: '212px', width: '16px', transform: 'rotate(4deg)' },
    { top: '134px', left: '92px', width: '18px', transform: 'rotate(-16deg)' },
    { top: '244px', left: '130px', width: '96px', transform: 'rotate(0deg)' },
  ];

  const bongbongStylesLarge = [
    { top: '56px', left: '154px', width: '20px', transform: 'rotate(8deg)' },
    { top: '90px', left: '216px', width: '24px', transform: 'rotate(-8deg)' },
    { top: '50px', left: '326px', width: '28px', transform: 'rotate(0deg)' },
    { top: '74px', left: '404px', width: '24px', transform: 'rotate(-6deg)' },
    { top: '86px', left: '306px', width: '18px', transform: 'rotate(8deg)' },
    { top: '86px', left: '192px', width: '18px', transform: 'rotate(8deg)' },
    { top: '86px', left: '62px', width: '22px', transform: 'rotate(6deg)' },
    { top: '156px', left: '400px', width: '28px', transform: 'rotate(16deg)' },
    { top: '146px', left: '204px', width: '30px', transform: 'rotate(-14deg)' },
    { top: '112px', left: '92px', width: '22px', transform: 'rotate(-14deg)' },
    { top: '138px', left: '314px', width: '20px', transform: 'rotate(4deg)' },
    { top: '200px', left: '138px', width: '24px', transform: 'rotate(-16deg)' },
    { top: '370px', left: '200px', width: '120px', transform: 'rotate(0deg)' },
  ];

  return (
    <>
      <section className="w-full h-full 2xs:p-4 xs:p-6 2sm:p-8 sm:p-6 tb:p-20 lg:p-24 flex flex-col items-center justify-center">
        <div className="relative">
          <img
            src={albumBg}
            alt="Album Background"
            useMap="#albumMap2xs"
            className="2xs:w-[240px] 2xs:h-[240px] xs:hidden 2sm:hidden sm:hidden tb:hidden lg:hidden"
          />
          <map name="albumMap2xs">
            <area
              alt=""
              shape="rect"
              coords="62,36,88,68"
              onClick={() => handleAreaClick(0)} // 에스쿱스
              onMouseEnter={() => handleAreaHover(0)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="110,36,132,56"
              onClick={() => handleAreaClick(1)} // 정한
              onMouseEnter={() => handleAreaHover(1)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="156,36,172,54"
              onClick={() => handleAreaClick(2)} // 조슈아
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="156,54,174,74"
              onClick={() => handleAreaClick(2)}
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="194,48,220,80"
              onClick={() => handleAreaClick(3)} // 준
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="206,94,228,162"
              onClick={() => handleAreaClick(3)}
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="132,52,156,74"
              onClick={() => handleAreaClick(4)} // 호시
              onMouseEnter={() => handleAreaHover(4)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="86,52,110,74"
              onClick={() => handleAreaClick(5)} // 원우
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="24,54,48,84"
              onClick={() => handleAreaClick(6)} // 우지
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="18,88,48,128"
              onClick={() => handleAreaClick(6)}
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="176,60,196,86"
              onClick={() => handleAreaClick(7)} // 디에잇
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="172,84,206,184"
              onClick={() => handleAreaClick(7)}
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="114,56,132,82"
              onClick={() => handleAreaClick(8)} // 민규
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="104,82,142,104"
              onClick={() => handleAreaClick(8)}
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="48,64,68,88"
              onClick={() => handleAreaClick(9)} // 도겸
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="44,86,66,160"
              onClick={() => handleAreaClick(9)}
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="146,78,166,106"
              onClick={() => handleAreaClick(10)} // 승관
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="136,104,176,146"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="156,152,180,204"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="80,78,100,106"
              onClick={() => handleAreaClick(11)} // 버논
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="70,104,108,142"
              onClick={() => handleAreaClick(11)}
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="70,150,90,218"
              onClick={() => handleAreaClick(11)}
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="112,108,138,144"
              onClick={() => handleAreaClick(12)} // 디노
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="94,146,158,240"
              onClick={() => handleAreaClick(12)}
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
          </map>
          <img
            src={albumBg}
            alt="Album Background"
            useMap="#albumMapxs"
            className="2xs:hidden xs:w-[300px] xs:h-[300px] 2sm:hidden sm:hidden tb:hidden lg:hidden"
          />
          <map name="albumMapxs">
            <area
              alt=""
              shape="rect"
              coords="78,46,108,90"
              onClick={() => handleAreaClick(0)} // 에스쿱스
              onMouseEnter={() => handleAreaHover(0)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="136,46,166,70"
              onClick={() => handleAreaClick(1)} // 정한
              onMouseEnter={() => handleAreaHover(1)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="196,44,216,64"
              onClick={() => handleAreaClick(2)} // 조슈아
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="196,70,222,94"
              onClick={() => handleAreaClick(2)}
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="244,58,270,110"
              onClick={() => handleAreaClick(3)} // 준
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="256,116,284,202"
              onClick={() => handleAreaClick(3)}
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="172,66,194,94"
              onClick={() => handleAreaClick(4)} // 호시
              onMouseEnter={() => handleAreaHover(4)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="110,66,134,94"
              onClick={() => handleAreaClick(5)} // 원우
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="30,66,60,106"
              onClick={() => handleAreaClick(6)} // 우지
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="24,116,48,162"
              onClick={() => handleAreaClick(6)}
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="222,74,246,104"
              onClick={() => handleAreaClick(7)} // 디에잇
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="216,108,248,232"
              onClick={() => handleAreaClick(7)}
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="142,72,162,100"
              onClick={() => handleAreaClick(8)} // 민규
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="132,102,178,130"
              onClick={() => handleAreaClick(8)}
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="60,80,82,108"
              onClick={() => handleAreaClick(9)} // 도겸
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="56,104,80,200"
              onClick={() => handleAreaClick(9)}
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="184,98,208,132"
              onClick={() => handleAreaClick(10)} // 승관
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="172,132,216,190"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="194,186,226,256"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="100,96,120,126"
              onClick={() => handleAreaClick(11)} // 버논
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="86,128,138,172"
              onClick={() => handleAreaClick(11)}
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="84,188,118,272"
              onClick={() => handleAreaClick(11)}
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="140,136,172,180"
              onClick={() => handleAreaClick(12)} // 디노
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="116,176,196,300"
              onClick={() => handleAreaClick(12)}
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
          </map>
          <img
            src={albumBg}
            alt="Album Background"
            useMap="#albumMap2sm"
            className="2xs:hidden xs:hidden 2sm:w-[340px] 2sm:h-[340px] sm:hidden tb:hidden lg:hidden"
          />
          <map name="albumMap2sm">
            <area
              alt=""
              shape="rect"
              coords="86,50,125,100"
              onClick={() => handleAreaClick(0)} // 에스쿱스
              onMouseEnter={() => handleAreaHover(0)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="156,50,188,78"
              onClick={() => handleAreaClick(1)} // 정한
              onMouseEnter={() => handleAreaHover(1)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="222,48,244,76"
              onClick={() => handleAreaClick(2)} // 조슈아
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="224,74,250,108"
              onClick={() => handleAreaClick(2)}
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="276,66,308,122"
              onClick={() => handleAreaClick(3)} // 준
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="292,128,322,228"
              onClick={() => handleAreaClick(3)}
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="194,74,222,106"
              onClick={() => handleAreaClick(4)} // 호시
              onMouseEnter={() => handleAreaHover(4)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="123,74,156,106"
              onClick={() => handleAreaClick(5)} // 원우
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="40,74,64,124"
              onClick={() => handleAreaClick(6)} // 우지
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="34,104,54,188"
              onClick={() => handleAreaClick(6)}
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="250,84,274,118"
              onClick={() => handleAreaClick(7)} // 디에잇
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="236,120,280,256"
              onClick={() => handleAreaClick(7)}
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="160,80,188,116"
              onClick={() => handleAreaClick(8)} // 민규
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="148,118,202,146"
              onClick={() => handleAreaClick(8)}
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="68,90,96,120"
              onClick={() => handleAreaClick(9)} // 도겸
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="62,120,100,216"
              onClick={() => handleAreaClick(9)}
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="206,110,232,148"
              onClick={() => handleAreaClick(10)} // 승관
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="196,150,242,222"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="222,218,256,290"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="108,108,140,148"
              onClick={() => handleAreaClick(11)} // 버논
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="100,150,156,196"
              onClick={() => handleAreaClick(11)}
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="90,212,130,306"
              onClick={() => handleAreaClick(11)}
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="156,152,196,202"
              onClick={() => handleAreaClick(12)} // 디노
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="134,200,220,340"
              onClick={() => handleAreaClick(12)}
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
          </map>
          <img
            src={albumBg}
            alt="Album Background"
            useMap="#albumMapLarge"
            className="2xs:hidden xs:hidden 2sm:hidden w-[500px] h-[500px]"
          />
          <map name="albumMapLarge">
            <area
              alt=""
              shape="rect"
              coords="128,72,184,150"
              onClick={() => handleAreaClick(0)} // 에스쿱스
              onMouseEnter={() => handleAreaHover(0)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="230,76,272,112"
              onClick={() => handleAreaClick(1)} // 정한
              onMouseEnter={() => handleAreaHover(1)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="322,74,368,116"
              onClick={() => handleAreaClick(2)} // 조슈아
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="328,128,362,166"
              onClick={() => handleAreaClick(2)}
              onMouseEnter={() => handleAreaHover(2)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="404,100,450,192"
              onClick={() => handleAreaClick(3)} // 준
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="430,188,474,338"
              onClick={() => handleAreaClick(3)}
              onMouseEnter={() => handleAreaHover(3)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="286,111,330,155"
              onClick={() => handleAreaClick(4)} // 호시
              onMouseEnter={() => handleAreaHover(4)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="182,106,228,158"
              onClick={() => handleAreaClick(5)} // 원우
              onMouseEnter={() => handleAreaHover(5)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="48,114,96,174"
              onClick={() => handleAreaClick(6)} // 우지
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="44,188,82,262"
              onClick={() => handleAreaClick(6)}
              onMouseEnter={() => handleAreaHover(6)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="369,136,400,178"
              onClick={() => handleAreaClick(7)} // 디에잇
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="348,182,408,356"
              onClick={() => handleAreaClick(7)}
              onMouseEnter={() => handleAreaHover(7)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="236,128,282,172"
              onClick={() => handleAreaClick(8)} // 민규
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="216,172,294,220"
              onClick={() => handleAreaClick(8)}
              onMouseEnter={() => handleAreaHover(8)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="98,136,144,178"
              onClick={() => handleAreaClick(9)} // 도겸
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="98,184,142,328"
              onClick={() => handleAreaClick(9)}
              onMouseEnter={() => handleAreaHover(9)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="306,166,340,216"
              onClick={() => handleAreaClick(10)} // 승관
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="290,222,360,300"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="328,322,356,426"
              onClick={() => handleAreaClick(10)}
              onMouseEnter={() => handleAreaHover(10)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="168,168,206,212"
              onClick={() => handleAreaClick(11)} // 버논
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="144,226,226,290"
              onClick={() => handleAreaClick(11)}
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="138,314,184,450"
              onClick={() => handleAreaClick(11)}
              onMouseEnter={() => handleAreaHover(11)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="226,226,284,314"
              onClick={() => handleAreaClick(12)} // 디노
              onMouseEnter={() => handleAreaHover(12)}
              onMouseLeave={handleAreaHoverExit}
            />
            <area
              alt=""
              shape="rect"
              coords="200,314,322,500"
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
        <div className="my-8 text-lg font-bold text-center">
          선택한 멤버
          <br />
          <p className="text-sm font-light">클릭하면 선택 해제 가능</p>
          <ToastContainer autoClose={1700} closeOnClick limit={1} />
        </div>
        {/* <button onClick={fetchDataFromBackend}>찾아보기</button> */}
        <div className="relative w-full h-auto px-20 flex flex-row gap-4 justify-center items-center text-center bg-white">
          {textToShow.map(
            (show, index) =>
              show && (
                <div
                  key={index}
                  onClick={() => handleAreaClick(index)}
                  className="member-tag w-20 h-8 rounded-[28px] text-white flex items-center justify-center cursor-pointer"
                >
                  <p className="text-md font-bold">
                    {areaNames[index].split(' ')[0]}
                  </p>
                  {/* <p className="text-sm">{`${areaNames[index]}입니다.`}</p> */}
                </div>
              ),
          )}
        </div>
      </section>
      <section className="w-full h-auto bg-blue-300 2xs:px-8 2xs:py-6 xs:px-10 xs:py-6 2sm:px-10 2sm:py-6 sm:px-10 sm:py-6 tb:px-36 tb:py-10 flex flex-col gap-4">
        {backendData.length === 0 ? (
          <ResultCard text="유닛 이름이 아직 없습니다..!" />
        ) : (
          backendData.map((data, index) => (
            <ResultCard text={null} key={index} result={data} />
          ))
        )}
      </section>
    </>
  );
};

export default Album;
