import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Prom from './Prom';

import './main.css';

function Main(): JSX.Element {
  return (
    <div className="main">
      <Header />
      <Prom />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
