import React from 'react';
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

export default SecondNavbar;
