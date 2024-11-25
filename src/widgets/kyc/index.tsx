import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import KYCWidget from './kycWidget';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <KYCWidget />
  </React.StrictMode>
);