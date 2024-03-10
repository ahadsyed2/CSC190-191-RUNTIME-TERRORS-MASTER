/*import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const ThirdNavbarMenu = () => {
  return (
    <div className="top-rightbox">
      <div className='Post'>
        <ul>
          <li>
            <Link to="/Login">+ Create a listing</Link>
          </li>
        </ul>
      </div>
      <div className="Login">
        <ul>
          <li>
            <Link to="/Login"><FontAwesomeIcon icon={faUser} className="user-icon" /> Login</Link>
          </li>
        </ul>
      </div>
      <div className="SignUp">
        <ul>
          <li>
            <Link to="/Signup"><FontAwesomeIcon icon={faUser} className="user-icon" /> Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default ThirdNavbarMenu;*/

import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';


const ThirdNavbarMenu = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
      logout() 
  }





  return (
    <div className="top-rightbox flex items-center space-x-4">
      <div className="Post mr-3 rounded-3xl hover:rounded-xl">
        <ul className="m-1">
          <li>
            <Link
              to="/Posting"
              className="flex items-center text-black text-2xl font-bold hover:text-blue-800 px-4 py-1.5"
            > + Create a listing
            </Link>
          </li>
        </ul>
      </div>

      {!user && (
      <div className="Login">
        <ul className="bg-white p-2 rounded-2xl hover:rounded-xl mr-1">
          <li>
            <Link to="/Login" 
            className="flex items-center text-black text-2xl m-0.5 font-bold ">
              <FontAwesomeIcon icon={faUser} className="user-icon" /> Login
            </Link>
          </li>
        </ul>
      </div> )}

      {!user && (
      <div className="SignUp">
         <ul className="bg-white p-2.5 rounded-2xl hover:rounded-xl mr-3.5" >
          <li>
            <Link to="/Signup" 
            className="flex items-center text-black text-2xl m-0.5 font-bold">
              <FontAwesomeIcon icon={faUser} className="user-icon" /> Sign Up
            </Link>
          </li>
        </ul>
      </div> )}

      {user && (
            <div>
              <span>{user.email}</span>
              <button  onClick = {handleClick}>Logout</button>
            </div> )}

    </div>
  
  );
}

export default ThirdNavbarMenu;