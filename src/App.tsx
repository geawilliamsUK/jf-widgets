import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KYCWidget from "./widgets/kyc/kycWidget";
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        } />
        <Route path="/widgets/kyc" element={<KYCWidget />} />
      </Routes>
    </Router>
  );
}

export default App;