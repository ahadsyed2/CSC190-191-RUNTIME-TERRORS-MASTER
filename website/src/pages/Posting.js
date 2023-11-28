import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import './Posting.css'
//STUCK IN TUTORIAL AT 8:08
function Posting(selected, setSelected) {
  const [sidebar, setSidebar] = useState(false) 
  /*setSidebar=update*/ /*false means the current value is not showing*/
  const showSidebar = () =>  setSidebar(!sidebar)
  /* utilize set side bar and this is going to update the value to whatever the opposite of it is currently*/
  /*(!sidebar) it's reversing the value true/false*/
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState("");
  const options = ['Sedan', 'Hatchback', 'Crossover', 'Coupe', 'Convertible', 'Minivan', 'Compact SUV', 'Midsize SUV', 'Full Size SUV']


  // const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownVisible(!isDropdownVisible);
  // };

  // const handleOutsideClick = (event) => {
  //   if (!event.target.matches('.dropbtn')) {
  //     setIsDropdownVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('click', handleOutsideClick);

  //   return () => {
  //     window.removeEventListener('click', handleOutsideClick);
  //   };
  // }, []);


  return (
      <>
      <IconContext.Provider value= {{color: '#fff'}}>
          <div className='navbar'>
              <Link to="#" className='hamburger-bars'>
                  <FaBars onClick={showSidebar} />
              </Link>

              <div className="logo">
                  <img src="https://www.clker.com/cliparts/u/O/L/Q/c/m/car-icon-hi.png" alt="Logo" />
              </div>
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


        <div className="make-box">
            <h3>Enter make</h3><input type="text" placeholder="" required />
        </div>


        {/* <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        Vehicle Type
      </button>
      <div
        id="myDropdown"
        className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`}
      >
        <a href="#">Truck</a>
            <a href="#">Midsize SUV</a>
            <a href="#">Compact SUV</a>
            <a href="#">Full Size SUV</a>
            <a href="#">Sedan</a>
            <a href="#">Hatchback</a>
            <a href="#">Crossover</a>
            <a href="#">Coupe</a>
            <a href="#">Convertible</a>
            <a href="#">Minivan</a>
      </div>
    </div> */}
   <dropdown selected={selected} setSelected= {setSelected} />

    <div className="dropdown">
      <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>Vehicle Type<div class='carret'> </div></div>
        {isActive && (
                <div className="dropdown-content">
                  {options.map(option => (
                     <div OnClick = {e => setSelected(option)}
                     className="dropdown-item">{option}</div>

                  ))}
                 
                <div className="dropdown-item">
                  Hatchback
                </div>
                <div className="dropdown-item">
                  Crossover
                </div>
                <div className="dropdown-item">
                  Coupe
                </div>
                <div className="dropdown-item">
                  Convertible
                </div>
                <div className="dropdown-item">
                  Minivan
                </div>
                <div className="dropdown-item">
                  Compact SUV
                </div>
                <div className="dropdown-item">
                  Midsize SUV
                </div>
                <div className="dropdown-item">
                  Full Size SUV
                </div>
              </div>
        )}
    </div>
      
    </>
  )
}

export default Posting
