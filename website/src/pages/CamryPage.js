import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { hamburgerMenu } from '../components/hamburgerMenu';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from 'react-icons';
import NavbarMenu from '../components/navbarMenu';
import './HomePage.css';


const CamryPage = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
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


      <div className="filter-container">
        <div className="filter-box">

          <div className="container">
            <div className="products-con">

              <a href="CarInfo">
              <div className="products-item">
                  <div className="products-img">
                    <img 
                      src="https://images.offerup.com/4uQVF_BU-_3APQkmUNUmGB3xqhE=/1280x960/d3ed/d3ed001efeac469097afcb8638e4ca76.jpg"
                      alt=""
                    />
                  </div>
                    
                    <div className="products-detail">
                      <h3>2014 Ford Fiesta</h3>
                    </div>
                    <div className="products-price">
                      <div className="products-left"><h3>$7,995</h3>
                      </div>
                    </div>
                    
                    <div className='meleage-city'>
                      <div className="mileage">
                        <div className="mileage-left">
                          <div className='mile-image'>
                            <img src="https://icons.veryicon.com/png/o/business/menu-icon-of-sanitation-industry/operating-mileage.png" alt="Car Image" />
                          </div>
                          <h4>104,639 Miles</h4>
                        </div>
                      </div>
                      <div className="city">
                        <div className="city-right"><h4>Denver, CO</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="CarInfo">
                <div className="products-item">
                  <div className="products-img">
                    <img 
                      src="https://images.offerup.com/gyw91Dcw-tv_40yIYnZaRbXeyoE=/1280x960/effd/effd19594b1840999151aba1aadc103c.jpg"
                      alt="Product"
                    />
                  </div>
                    <div className="products-detail">
                    <h3>2016 Jeep Cherokee</h3>
                  </div>
                  <div className="products-price">
                    <div className="products-left"><h3>$13,995</h3>
                    </div>
                  </div>
                  
                  <div className='meleage-city'>
                    <div className="mileage">
                      <div className="mileage-left">
                        <div className='mile-image'>
                          <img src="https://icons.veryicon.com/png/o/business/menu-icon-of-sanitation-industry/operating-mileage.png" alt="Car Image" />
                        </div>
                        <h4>93,699 Miles</h4>
                      </div>
                    </div>
                    <div className="city">
                      <div className="city-right"><h4>Denver, CO</h4>
                      </div>
                    </div>
                  </div>
                </div>
                </a>

                <a href="CarInfo">
                <div className="products-item">
                  <div className="products-img">
                    <img 
                      src="https://images.offerup.com/6UDntzf3f2A5XMHXBK2opFz4sjU=/1000x750/eb7f/eb7f2828aa1b4f8dab83e04bb2d0ddb8.jpg"
                      alt=""
                    />
                  </div>
                    <div className="products-detail">
                    <h3>2010 Hyundai Santa FE</h3>
                  </div>
                  <div className="products-price">
                    <div className="products-left"><h3>$4,899</h3>
                    </div>
                  </div>
                  
                  <div className='meleage-city'>
                    <div className="mileage">
                      <div className="mileage-left">
                        <div className='mile-image'>
                          <img src="https://icons.veryicon.com/png/o/business/menu-icon-of-sanitation-industry/operating-mileage.png" alt="Car Image" />
                        </div>
                        <h4>200,000 Miles</h4>
                      </div>
                    </div>
                    <div className="city">
                      <div className="city-right"><h4>Denver, CO</h4>
                      </div>
                    </div>
                  </div>
                </div>
                </a>

                <a href="CarInfo">
                <div className="products-item">
                  <div className="products-img">
                    <img 
                      src="https://images.offerup.com/NJrez1SM7cFsEx9BJ4Vkj3FgA3U=/1000x750/9cd6/9cd6d6d78efd41dbbc7861956d731ac2.jpg"
                      alt=""
                    />
                  </div>
                    <div className="products-detail">
                    <h3>2010 Ford F-150</h3>
                  </div>
                  <div className="products-price">
                    <div className="products-left"><h3>$10,000</h3>
                    </div>
                  </div>
                  
                  <div className='meleage-city'>
                    <div className="mileage">
                      <div className="mileage-left">
                        <div className='mile-image'>
                          <img src="https://icons.veryicon.com/png/o/business/menu-icon-of-sanitation-industry/operating-mileage.png" alt="Car Image" />
                        </div>
                        <h4>19,451 Miles</h4>
                      </div>
                    </div>
                    <div className="city">
                      <div className="city-right"><h4>Denver, CO</h4>
                      </div>
                    </div>
                  </div>
                </div>
                </a>

                
            </div>
          </div>
        </div>
      </div>
    </section>

  )
};


export default CamryPage;