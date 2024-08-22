// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Newsletter/Newsletter';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
