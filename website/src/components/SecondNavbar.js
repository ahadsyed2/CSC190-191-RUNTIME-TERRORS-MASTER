
/*import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const SecondNavbar = () => {
  return (
    <div className="top-rightbox">

      <div className='Post'>
        <ul>
          <li>
            <Link to="/Posting">+ Create a listing</Link>
          </li>
        </ul>
      </div>
      <div className="User-Profile">
        <ul>
          <li>
            <Link to="/UserProfile"><FontAwesomeIcon icon={faUser} className="profile-icon" /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default SecondNavbar; */

import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';


const SecondNavbar = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
      logout() 
  }





  return (
    <div className="top-rightbox">
      <div className='Post'>
        <ul>
          <li>
            <Link to="/Posting">+ Create a listing</Link>
          </li>
        </ul>
      </div>

      {!user && (
      <div className="Login">
        <ul>
          <li>
            <Link to="/Login"><FontAwesomeIcon icon={faUser} className="user-icon" /> Login</Link>
          </li>
        </ul>
      </div> )}

      {!user && (

      <div className="SignUp">
        <ul>
          <li>
            <Link to="/Signup"><FontAwesomeIcon icon={faUser} className="user-icon" /> Sign Up</Link>
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

export default SecondNavbar;