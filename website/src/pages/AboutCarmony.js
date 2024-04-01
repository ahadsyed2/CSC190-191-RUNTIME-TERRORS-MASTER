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

        <div className='aboutCarmony'>
            <div className='carmony-detail'>
                <h1>Background</h1>
                <p>Carmony is an online open-source marketplace that gets rid of the fees and hassles.</p>
                <p>Instead of paying an upfront fee to list your car, Carmony lets you list your vehicle for free</p>
                <p>More money going back into your pocket.</p>
                <p></p>
                <h2>Our Mission Statement</h2>
                <p>We save your money, help selling your car, make you worry free.</p>
            </div>
        </div>

        <footer>
        <p>&copy; 2023</p>
    </footer>

      </>
  )
}

export default AboutCarmony
