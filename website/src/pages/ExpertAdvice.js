import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { hamburgerMenu } from '../components/hamburgerMenu';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import NavbarMenu from '../components/navbarMenu';
import './ExpertAdvice.css'

function ExpertAdvice() {

    const [sidebar, setSidebar] = useState(false) 
    /*setSidebar=update*/ /*false means the current value is not showing*/
    const showSidebar = () =>  setSidebar(!sidebar)
    /* utilize set side bar and this is going to update the value to whatever the opposite of it is currently*/
    /*(!sidebar) it's reversing the value true/false*/

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

        <div className='cover-container'>
          <div className='expert-container'>
            <h1>Guide to Buying a Second-Hand Car from a Marketplace</h1>
            <div className='outside-statment-box'>
              <div className='car-statment'>
                <p>Explore the world of second-hand cars on a marketplace with our dedicated guide.</p> 
                <p>We provide comprehensive insights and practical advice to help you confidently choose</p>
                <p>and purchase a quality used car that fits your needs and budget.</p>
                <p>Let us guide you through the process of finding your ideal second-hand vehicle.</p>
                <p>_________________________________________ oo _________________________________________</p>
              </div>
            </div>
            <div className='advice-box'>
              <div className='advice-detail'>
                <h3>Define Your Needs and Budget</h3>
                <p>Determine your preferred vehicle type (sedan, SUV, truck, etc.).</p>
                <p>Consider mileage, age, and features that are important to you.</p>
                <p>Set a realistic budget, including potential costs for taxes, registration, and insurance.</p>
                
                <h3>Verify Vehicle History</h3>
                <p>Use the vehicle identification number (VIN) to check for past accidents, ownership history, and title status.</p>
                <p>Look for service records to assess maintenance history and potential issues.</p>
                
                <h3>Schedule Inspections and Test Drives</h3>
                <p>Hire a professional mechanic to inspect the vehicle's condition and identify any hidden problems.</p>
                <p>Personally test drive the car to evaluate its performance, handling, and comfort.</p>
                
                <Link to="#"><h2>MORE INFO</h2></Link>
              </div>
              <div className='advice-car'>
                <img src="https://www.shutterstock.com/image-illustration/realistic-suv-car-isolated-on-600nw-2118006260.jpg"></img>
              </div>
          
            </div>
          </div>
        </div>

      </>
  )
}

  export default ExpertAdvice