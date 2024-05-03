import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { hamburgerMenu } from '../components/hamburgerMenu';
import { hamburgerMenu2 } from '../components/hamburgerMenu2';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import NavbarMenu from '../components/navbarMenu';
import { useAuthContext } from '../hooks/useAuthContext';
import './Contact.css'

function Contact() {

    const [sidebar, setSidebar] = useState(false) 
    /*setSidebar=update*/ /*false means the current value is not showing*/
    const showSidebar = () =>  setSidebar(!sidebar)
    /* utilize set side bar and this is going to update the value to whatever the opposite of it is currently*/
    /*(!sidebar) it's reversing the value true/false*/
    const { user } = useAuthContext()

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
          
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
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

        <div className='contact'>
          <h1>Contact</h1>
        </div>

      </>
  )
}

  export default Contact
