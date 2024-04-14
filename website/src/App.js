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
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import UserProfile from './pages/UserProfile';
import ViewPost from './pages/ViewPost';
import CarInfo from './pages/CarInfo';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/SellCar' element={<SellCar />} />
          <Route path='/AboutCarmony' element={<AboutCarmony />} />
          <Route path='/AboutDealers' element={<AboutDealers />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Posting' element={<Posting />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />
          <Route path='/Profile' element={<ProfilePage />} />
          <Route path='/Post' element={<ViewPost />} />
          <Route path='/CarInfo/:id' element={<CarInfo />} />
          <Route path='/UserProfile' element={<UserProfile />} />
        </Routes>
    </Router>
  );
}

export default App;
