import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import { BsUpload } from 'react-icons/bs';

import './Posting.css'


function Posting() {
  const [sidebar, setSidebar] = useState(false) 
  const showSidebar = () =>  setSidebar(!sidebar)

  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState("");
  const options = ['Sedan', 'Hatchback', 'Crossover', 'Coupe', 'Convertible', 
  'Minivan', 'Compact SUV', 'Midsize SUV', 'Full Size SUV']

  const handleSelect = (option) => {
    setSelected(option);
    setIsActive(false); 
  };

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

        <section className="car-listing-info">
            <h1>Enter information for your listing</h1>
            <div className="listing-box">
                <div className='listing-details'>


                <div className="dropdown">
                    <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
                        Vehicle Type <div className={`carret ${isActive ? 'up' : 'down'}`}></div>
                    </div>

                    {isActive && (
                        <div className="dropdown-content">
                        {options.map((option) => (
                            <div key={option} onClick={() => handleSelect(option)} className="dropdown-item">
                            {option}
                            </div>
                        ))}
                        </div>
                    )}
                </div>

                    <div className="make-box">
                        <h2>Enter Make: </h2><input type="text" placeholder="Enter make" required />
                    </div>

                    <div className="model-box">
                        <h2>Enter Model: </h2><input type="text" placeholder="Enter model" required />
                    </div>

                    <div className="price-box">
                        <h2>Enter Price: $ </h2><input type="text" placeholder="Enter price..." required />
                    </div> 

                    <div className='photo-upload'>
                        <h2>Upload image</h2>
                        <BsUpload />

                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                        
                        />
                    </div>

                    <button type="submit" className="btn">Submit</button>
                </div>

            </div>
        </section>

    </>
)
}

export default Posting
