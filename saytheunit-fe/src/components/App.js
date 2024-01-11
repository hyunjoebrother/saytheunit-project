import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import WrongPath from '../pages/WrongPath/WrongPath';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
