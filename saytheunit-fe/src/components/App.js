import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Error404 from '../pages/Error404/Error404';
import preloadBg from '../assets/images/diamond-wallbg.png';
import preloadAlbum from '../assets/images/svt-total-bg-frame.jpg';

const App = () => {
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = preloadBg;
    preloadImage.src = preloadAlbum;
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
