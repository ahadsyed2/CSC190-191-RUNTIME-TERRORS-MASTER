import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { hamburgerMenu } from '../components/hamburgerMenu';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import NavbarMenu from '../components/navbarMenu';
import './AboutCarmony.css'

function AboutCarmony() {
  const [sidebar, setSidebar] = useState(false) 
  const showSidebar = () =>  setSidebar(!sidebar)


  return (
      <>
      <IconContext.Provider value= {{color: '#fff'}}>
          <div className='navbarMenu'>
            <Link to="#" className='hamburger-bars'>
                <FaBars onClick={showSidebar} />
            </Link>

            <div className="carmony-logo w-1/10 flex justify-center items-center p-0 1rem" style={{ width: "15rem", marginLeft: "2rem" }}>
            <img src="CARMONY_ICON2.png" alt="Logo" className="w-500 mt-3" />
          </div>

            <NavbarMenu />
          </div>
          
          <nav className={sidebar ? 'nav-bar-menu active' : 'nav-bar-menu'}>
          <ul className='nav-bar-menu-items' onClick={showSidebar}>
            <li className="nav-bar-toggle">
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

        <div className='aboutCarmony'>
            <div className='carmony-detail'>
                <h1>About Carmony</h1>
                <p>Carmony is an online open-source marketplace that gets rid of the fees and hassles.</p>
                <p>Instead of paying an upfront fee to list your car, Carmony lets you list your vehicle for free</p>
                <p>more money going back into your pocket.</p>
            </div>
        </div>

        <footer>
        <p>&copy; 2023</p>
    </footer>

      </>
  )
}

export default AboutCarmony