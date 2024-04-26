import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { hamburgerMenu } from '../components/hamburgerMenu';
import { hamburgerMenu2 } from '../components/hamburgerMenu2';
import { IconContext } from 'react-icons';
import NavbarMenu from '../components/navbarMenu';
import './ProfilePage.css'
import { useEffect} from 'react';
import { useProfileContext } from '../hooks/useProfileContext';
import { useAuthContext } from '../hooks/useAuthContext';

//const bcrypt = require('bcrpt');
//Use bcrypt to use email to generate a "user_id" field in profile doc

const ProfilePage = () => {
  //Destructuring to get to what we need
  const {profiles, dispatch} = useProfileContext()

  //Need to change this later so it brings you to other's profiles too
  const { user } = useAuthContext()
  //const id = user.profile_id
  //console.log(user.email)

  useEffect(() => {
    const fetchProfiles = async () => {
      //Needs to be changed for deployment; Will only work for development Net Ninja MERN #9
      //Need CORS in backend
      //const string = '/api/profile/'
      //const response = await fetch(string.concat('1'))
      const response = await fetch('/api/profile')
      const json  = await response.json()

      if(response.ok){
        dispatch({type: 'SET_PROFILES', payload: json})
      }
    }

      fetchProfiles()

  })

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const displayName = "Display Name";
  

  return(
    <section>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to="#" className='hamburger-bars'>
            <FaBars onClick={showSidebar} />
          </Link>

          <div className="carmony-logo">
            <img src="CARMONY_ICON2.png" alt="" />
          </div>

          <navbarMenu />
        </div>

        <nav className={sidebar ? 'nav-bar-menu active' : 'nav-bar-menu'}>
          <ul className='nav-bar-menu-items' onClick={showSidebar}>
            <li className="nav-bar-toggle">
              <Link to="#" className='hamburger-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            {!user && hamburgerMenu.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
                {user && hamburgerMenu2.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
          </ul>
        </nav>
      </IconContext.Provider>
      <div className="MainContainer">
        {/* Looks through all accounts until it finds matching email */}
        {/* Not Optimal but is a working solution*/}
        {/* For other devs, if you want to call a field in 'profile' document, it must be in 
        this for each loop (the map) and you must give a key like shown below*/}
        {profiles && profiles.map((profile) => (
          <p key={profile._id}>{

              profile.email == user.email ? <p key={profile._id}>{profile.display_name}</p> : ''

          }</p>
        ))}
        
        <div className="LeftContainer">
          <div className="DisplayName"> { displayName } </div>
          <span className='profilePicture'></span>
        </div>
        <div className="RightContainer">
         <div className="DisplayName"> Recent Listings </div>
        </div>
      </div>
    </section>
  )

} 

export default ProfilePage;