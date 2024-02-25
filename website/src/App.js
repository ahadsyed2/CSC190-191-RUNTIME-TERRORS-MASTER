import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SellCar from './pages/SellCar';
import AboutCarmony from './pages/AboutCarmony';
import AboutDealers from './pages/AboutDealers';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Posting from './pages/Posting'; 
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import ProfilePage from './pages/ProfilePage'
import ViewPost from './pages/ViewPost';
import CarInfo from './pages/CarInfo'



function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' exact Component={HomePage} />
          <Route path='/SellCar'  Component={SellCar} />
          <Route path='/AboutCarmony' Component={AboutCarmony} />
          <Route path='/AboutDealers' Component={AboutDealers} />
          <Route path='/Contact' Component={Contact} />
          <Route path='/Login' Component={Login} />
          <Route path='/Signup' Component={Signup} />
          <Route path='/Posting' Component={Posting} />
          <Route path='ForgotPassword' Component={ForgotPassword} />
          <Route path='ResetPassword' Component={ResetPassword} />
          <Route path='/Posting' Component={Posting} />
          <Route path='/Profile' Component={ProfilePage} />
          <Route path='/CarInfo/:id' Component={CarInfo} />
        </Routes>
      </Router>
    
  );
}

export default App;

