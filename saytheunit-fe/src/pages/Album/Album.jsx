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

  const bongbongStyles = [
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
      <section className="w-full h-full p-20 flex flex-col items-center justify-center">
        <div className="relative">
          <img
            src={albumBg}
            alt="Album Background"
            useMap="#albumMap"
            className="w-[500px] h-[500px]"
          />

          <map name="albumMap">
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
              <div
                key={i}
                className="w-full h-full"
                style={{
                  position: 'absolute',
                  ...bongbongStyles[hoveredArea],
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
      <section className="w-full h-auto bg-blue-300 px-36 py-10 flex flex-col gap-4">
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
