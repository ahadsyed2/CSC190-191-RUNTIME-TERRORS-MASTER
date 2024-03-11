import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';


const NavbarMenu = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
      logout() 
  }





  return (

    
    <div className="top-rightbox">

      {user && (
      <div className='Post'>
        <ul>
          <li>
            <Link to="/Posting">+ Create a car listing</Link>
          </li>
        </ul>
      </div>
      )}

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

export default NavbarMenu;
