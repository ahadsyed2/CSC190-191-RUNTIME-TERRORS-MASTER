import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import NavbarMenu from '../components/navbarMenu';
import './ProfilePage.css'
import { useProfileContext } from '../hooks/useProfileContext';

const ProfilePage = () => {

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

          <NavbarMenu />
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className='hamburger-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            {hamburgerMenu.map((item, index) => {
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