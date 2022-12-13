import React from 'react';
import Navnav from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './components/MainRoutes';
import './components/Navbar/Navbar.css'
import Works from './components/Works/Works';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navnav />
      
      <MainRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;