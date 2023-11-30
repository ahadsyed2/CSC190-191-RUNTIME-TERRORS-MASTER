import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { hamburgerMenu } from './hamburgerMenu';
import { BsUpload } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import './Posting.css';

const options = [
  'Sedan',
  'Hatchback',
  'Crossover',
  'Coupe',
  'Convertible',
  'Minivan',
  'Compact SUV',
  'Midsize SUV',
  'Full Size SUV',
];

function Posting() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('Vehicle Type');

  const handleSelect = (option) => {
    setSelected(option);
    setIsActive(false);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='hamburger-bars'>
            <FaBars onClick={showSidebar} />
          </Link>

          <div className="carmony-logo">
            <img src="CARMONY_ICON2.png" alt="" />
          </div>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='hamburger-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            {hamburgerMenu.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>

      <section className='car-listing-info'>
        <h1>Enter information for your listing</h1>
          <div className='container-box'>
            <div className='leftside-box'>
              <form action="">
                <h1>About the Vehicle</h1>
                <div className='vehicle-dropdown'>
                  <div className='dropdown-box' onClick={() => setIsActive(!isActive)}>
                    {selected}
                    <span className='caret-icon'>{isActive ? <FaCaretUp /> : <FaCaretDown />}</span>
                  </div>
                  {isActive && (
                    <div className='dropdown-listings'>
                      {options.map((option) => (
                        <div
                          key={option}
                          onClick={() => handleSelect(option)}
                          className={`dropdown-item ${option === selected ? 'selected' : ''}`}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="listing-box">
                  <div className='listing-details'>
                    <div className="make-box">
                      <h2>Enter Make: </h2><input type="text" placeholder="Enter make" required />
                    </div>

                    <div className="model-box">
                      <h2>Enter Model: </h2><input type="text" placeholder="Enter model" required />
                    </div>
                    <div className="year-box">
                      <h2>Enter Year: </h2><input type="text" placeholder="Enter year" required />
                    </div>

                    <div className="price-box">
                      <h2>Enter Price: $ </h2><input type="text" placeholder="Enter price..." required />
                    </div> 

                    <div className="location-box">
                      <h2>Enter Location: </h2><input type="text" placeholder="Enter Location" required />
                    </div>

                    <div className="description-box">
                      <h2>Description: </h2><input type="text" placeholder="" required />
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
              </form>
            </div>

            <div className='righside-box'>
              <h1>Preview</h1>

                  <div className='preview-box'>
                    <div className='preview-left'>
                      <h2>Your Listing Preview</h2>
                      <p>As you create your listing, you can preview how it will apperar</p>
                    </div>
                    <div className='preview-right'>
                      <h2>Title</h2>
                    </div>
                  </div>
            </div>
          </div>

      </section>
    </>
  );
}

export default Posting;
