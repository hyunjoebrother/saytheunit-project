import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { LanguageProvider } from './components/Translation/languageContext';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
);
