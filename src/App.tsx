import React from 'react';
import { BrowserRouter as HashRouter, Route, Link } from "react-router-dom";

import Grid from './Grid/Grid';
import MainPage from './Main/MainPage';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="full-wrapper">
      <HashRouter>
        <MainPage />
      </HashRouter>
    </div>
  );
}

export default App;
