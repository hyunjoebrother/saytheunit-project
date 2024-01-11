import React from 'react';
import './index.css';
import errorImg from '../../assets/images/service-notfound-page.jpg';

const WrongPath = () => {
  return <img src={errorImg} alt="Say the 잘못된 경로" />;
};

export default WrongPath;
