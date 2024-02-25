import React from 'react';
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

export default ThirdNavbarMenu;
