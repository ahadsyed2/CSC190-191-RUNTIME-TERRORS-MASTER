import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './testPages/Home';
import SellCar from './pages/SellCar';
import AboutCarmony from './pages/AboutCarmony';
import AboutDealers from './pages/AboutDealers';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Posting from './pages/Posting'; 


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/SellCar'  Component={SellCar} />
          <Route path='/AboutCarmony' Component={AboutCarmony} />
          <Route path='/AboutDealers' Component={AboutDealers} />
          <Route path='/Contact' Component={Contact} />
          <Route path='/Login' Component={Login} />
          <Route path='/Signup' Component={Signup} />
          <Route path='/Posting' Component={Posting} />
        </Routes>
      </Router>
    
  );
}

export default App;