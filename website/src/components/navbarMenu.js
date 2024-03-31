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
    <div className="top-rightbox flex items-center space-x-4">
      <div className="Posting-btn">
        {user && (
        <ul className="m-1">
          <li>
            <Link
              to="/Posting"
              className="flex items-center text-black text-2xl font-bold px-4 py-1.5"
            > + Create a listing
            </Link>
          </li>
        </ul>
        )}
      </div>
      <div className="Posting-btn">
        {!user && (
        <ul className="m-1">
          <li>
            <Link
              to="/Login"
              className="flex items-center text-black text-2xl font-bold px-4 py-1.5"
            > + Create a listing
            </Link>
          </li>
        </ul>
        )}
      </div>
        
      {user ? (
        <div className="UserProfile-btn">
          <ul className="bg-white p-2.5 rounded-2xl hover:rounded-xl">
            <li>
              <Link to="/UserProfile" className="flex items-center text-black text-xl m-0.5 font-bold">
                <FontAwesomeIcon icon={faUser} className="user-icon" /> Profile
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <div className="Login-btn">
            <ul className="bg-white p-2 rounded-2xl hover:rounded-xl">
              <li>
                <Link to="/Login" className="flex items-center text-black text-2xl m-0.5 font-bold">
                  <FontAwesomeIcon icon={faUser} className="user-icon" /> Login
                </Link>
              </li>
            </ul>
          </div>

          <div className="SignUp-btn">
            <ul className="bg-white p-2 rounded-2xl hover:rounded-xl mr-3.5">
              <li>
                <Link to="/Signup" className="flex items-center text-black text-2xl m-0.5 font-bold">
                  <FontAwesomeIcon icon={faUser} className="user-icon" /> Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}

      {user && (
        <div className="Logout-btn">
          <ul className="bg-white rounded-2xl" >
              <div>
                <span>{user.email}</span>
                <ul className="Logged-out" >
                  <button  onClick = {handleClick}>Logout</button>
                </ul>
              </div> 
          </ul>
        </div> )}

    </div>
  
  );
}

export default NavbarMenu;