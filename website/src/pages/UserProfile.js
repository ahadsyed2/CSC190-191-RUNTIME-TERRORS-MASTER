import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { hamburgerMenu2 } from '../components/hamburgerMenu2';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './UserProfile.css'
import SecondNavbar from '../components/SecondNavbar';
import UserProfileComponent from '../components/UserProfileComponent';


const UserProfile = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownItemClick = (option) => {
    // Add your logic here for handling the click on dropdown items
    console.log(`Clicked on ${option}`);
  };

  const [carbutton, setCarbutton] = useState(false);
  const showCarButton = () => {
    setCarbutton(!carbutton);
  };

  const [isBoxVisible, setBoxVisibility] = useState(true);

  const deleteButton = () => {
    const userConfirmed = window.confirm("Are you sure you want to delete?");

    if (userConfirmed) {
      // User clicked "OK"
      setBoxVisibility(false);
    } else {
      // User clicked "Cancel"
      console.log("Delete canceled");
    }
  };

  const [isBoxVisible2, setBoxVisibility2] = useState(true);
  const deleteButton2 = () => {
    const userConfirmed2 = window.confirm("Are you sure you want to delete?");

    if (userConfirmed2) {
      setBoxVisibility2(false);
    } else {
      console.log("Delete canceled");
    }
  };

  const [isBoxVisible3, setBoxVisibility3] = useState(true);
  const deleteButton3 = () => {
    const userConfirmed3 = window.confirm("Are you sure you want to delete?");

    if (userConfirmed3) {
      setBoxVisibility3(false);
    } else {
      console.log("Delete canceled");
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to="#" className='hamburger-bars'>
            <FaBars onClick={showSidebar} />
          </Link>

          <div className="carmony-logo w-1/10 flex justify-center items-center p-0 1rem" style={{ width: "15rem", marginLeft: "2rem" }}>
            <img src="CARMONY_ICON2.png" alt="Logo" className="w-500 mt-3" />
          </div>

          <SecondNavbar />
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className='hamburger-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            {hamburgerMenu2.map((item, index) => {
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
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      
      <div className="user-container">
        <div className="view-account">
          <div className="module">
            <div className="module-inner">
              <div className="side-bar">
                <div className="user-info">
                  <img
                    className="img-profile img-circle img-responsive center-block"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt=""
                  />

                    
                  <ul className="meta list list-unstyled">
                    <li className="name">
                    <UserProfileComponent />
                      <br />
                      <label className="label label-info">Developer</label>
                    </li>
                    <li className="email">
                      <a href="#">John.Doe@gmail.com</a>
                    </li>
                    <li className="activity">Last logged in: Today at 6:00pm</li>
                  </ul>
                </div>
                <nav className="side-menu">
                  <ul className="nav">
                    <li className="active">
                      <a href="#">
                        <span className="fa fa-user"></span> Profile
                      </a>
                    </li>
                    <li className={isOpen ? 'active' : ''}>
                      <a href="#" onClick={toggleDropdown}>
                        <span className="fa fa-cog"></span> Settings
                        <span className={`fa ${isOpen ? 'fa-angle-up' : 'fa-angle-down'}`}></span>
                      </a>
                      {isOpen && (
                        <ul className="nav-dropdown">
                          {/* Add dropdown menu items here */}
                          <li>
                          <Link to="/EditListingPage" onClick={() => handleDropdownItemClick('Edit Listing')}>
                              <h4>Edit Listing</h4>
                            </Link>
                          </li>
                          <li>
                          <Link to="/UserSettings" onClick={() => handleDropdownItemClick('Edit Profile')}>
                            <h4>Edit Profile</h4>
                            </Link>
                          </li>
                      
                        </ul>
                      )}
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-credit-card"></span> Billing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-envelope"></span> Messages
                      </a>
                    </li>

                    <li>
                      <a href="user-drive.html">
                        <span className="fa fa-th"></span> Liked
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-clock-o"></span> Archived
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="dashboard-container">
              <div className="current-righBox">
                <div className="current-listingBox">
                  <h1>Current Listings</h1>
                  {isBoxVisible && (
                    <div className="inside-currentBox">

                      <div className="detail-currentBox">
                        <div className="car-image">
                          <img
                            src="https://images.offerup.com/4uQVF_BU-_3APQkmUNUmGB3xqhE=/1280x960/d3ed/d3ed001efeac469097afcb8638e4ca76.jpg"
                            alt=""
                          />
                          <div className="image-box">
                            <div className="more-image">
                              <img
                                src="https://images.offerup.com/4uQVF_BU-_3APQkmUNUmGB3xqhE=/1280x960/d3ed/d3ed001efeac469097afcb8638e4ca76.jpg"
                                alt=""
                              />
                              <img
                                src="https://images.offerup.com/4uQVF_BU-_3APQkmUNUmGB3xqhE=/1280x960/d3ed/d3ed001efeac469097afcb8638e4ca76.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="image-box2">
                            <div className="more-image2">
                              <img
                                src="https://images.offerup.com/4uQVF_BU-_3APQkmUNUmGB3xqhE=/1280x960/d3ed/d3ed001efeac469097afcb8638e4ca76.jpg"
                                alt=""
                              />
                              <img
                                src="https://images.offerup.com/4uQVF_BU-_3APQkmUNUmGB3xqhE=/1280x960/d3ed/d3ed001efeac469097afcb8638e4ca76.jpg"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="current-carDetail">
                            <div className="carDetail-box">
                              <div className="carDetail-rightBox">
                                <div className="carName">
                                  <div className="carName-left"><h4>2014 Ford Fiesta</h4>
                                  </div>
                                </div>
                                <div className="car-price">
                                  <div className="carPrice-right"><h4>$7,995</h4>
                                  </div>
                                </div>
                              </div>

                              <div className='carMileage-city'>
                                <div className="carMileage">
                                  <div className="carMileage-right">
                                    <div className='carMileage-image'>
                                      <img src="https://icons.veryicon.com/png/o/business/menu-icon-of-sanitation-industry/operating-mileage.png" alt="Car Image" />
                                    </div>
                                    <h4>104,639 Miles</h4>
                                  </div>
                                </div>

                                <div className="car-city">
                                  <div className="carCity-right"><h4>Denver, CO</h4>
                                  </div>
                                </div>
                              </div>

                              <div className="car-condition">
                                <h4>Used-Good Condition</h4>
                              </div>
                            </div>

                            <div className="car-button">
                              <div className="view-button">
                                <Link to="">
                                  <button onClick={showCarButton}>View</button>
                                </Link>
                              </div>
                              <div className="edit-button">
                              <Link to="/EditListingPage">
                                  <button onClick={showCarButton}>Edit</button>
                                </Link>
                              </div>
                              <div className="delete-button">
                              <Link to="">
                              <button onClick={deleteButton}>Delete</button>
                                </Link>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {isBoxVisible2 && (
                    <div className="inside-currentBox">

                      <div className="detail-currentBox">
                        <div className="car-image">
                          <img 
                            src="https://images.offerup.com/gyw91Dcw-tv_40yIYnZaRbXeyoE=/1280x960/effd/effd19594b1840999151aba1aadc103c.jpg"
                            alt="Product"
                          />
                          <div className="image-box">
                            <div className="more-image">
                              <img 
                                src="https://images.offerup.com/gyw91Dcw-tv_40yIYnZaRbXeyoE=/1280x960/effd/effd19594b1840999151aba1aadc103c.jpg"
                                alt="Product"
                              />
                              <img 
                                src="https://images.offerup.com/gyw91Dcw-tv_40yIYnZaRbXeyoE=/1280x960/effd/effd19594b1840999151aba1aadc103c.jpg"
                                alt="Product"
                              />
                            </div>
                          </div>
                          <div className="image-box2">
                            <div className="more-image2">
                              <img 
                                src="https://images.offerup.com/gyw91Dcw-tv_40yIYnZaRbXeyoE=/1280x960/effd/effd19594b1840999151aba1aadc103c.jpg"
                                alt="Product"
                              />
                              <img 
                                src="https://images.offerup.com/gyw91Dcw-tv_40yIYnZaRbXeyoE=/1280x960/effd/effd19594b1840999151aba1aadc103c.jpg"
                                alt="Product"
                              />
                            </div>
                          </div>

                          <div className="current-carDetail">
                            <div className="carDetail-box">
                              <div className="carDetail-rightBox">
                                <div className="carName">
                                  <div className="carName-left"><h4>2016 Jeep Cherokee</h4>
                                  </div>
                                </div>
                                <div className="car-price">
                                  <div className="carPrice-right"><h4>$13,995</h4>
                                  </div>
                                </div>
                              </div>

                              <div className='carMileage-city'>
                                <div className="carMileage">
                                  <div className="carMileage-right">
                                    <div className='carMileage-image'>
                                      <img src="https://icons.veryicon.com/png/o/business/menu-icon-of-sanitation-industry/operating-mileage.png" alt="Car Image" />
                                    </div>
                                    <h4>93,699 Miles</h4>
                                  </div>
                                </div>

                                <div className="car-city">
                                  <div className="carCity-right"><h4>Denver, CO</h4>
                                  </div>
                                </div>
                              </div>

                              <div className="car-condition">
                                <h4>Used-Good Condition</h4>
                              </div>
                            </div>

                            <div className="car-button">
                              <div className="view-button">
                                <Link to="">
                                  <button onClick={showCarButton}>View</button>
                                </Link>
                              </div>
                              <div className="edit-button">
                              <Link to="/EditListingPage">
                                  <button onClick={showCarButton}>Edit</button>
                                </Link>
                              </div>
                              <div className="delete-button">
                              <Link to="">
                              <button onClick={deleteButton2}>Delete</button>
                                </Link>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {isBoxVisible3 && (
                    <div className="inside-currentBox">

                      <div className="detail-currentBox">
                        <div className="car-image">
                          <img 
                            src="https://images.offerup.com/RlVjLHMSWQv0yn5PpsQAOMMQnss=/2048x1536/d8ba/d8bafb71d2af4d568eab0bd7a19bec0f.jpg"
                            alt="Product"
                          />
                          <div className="image-box">
                            <div className="more-image">
                              <img 
                                src="https://images.offerup.com/RlVjLHMSWQv0yn5PpsQAOMMQnss=/2048x1536/d8ba/d8bafb71d2af4d568eab0bd7a19bec0f.jpg"
                                alt="Product"
                              />
                                <img 
                                src="https://images.offerup.com/RlVjLHMSWQv0yn5PpsQAOMMQnss=/2048x1536/d8ba/d8bafb71d2af4d568eab0bd7a19bec0f.jpg"
                                alt="Product"
                              />
                            </div>
                          </div>
                          <div className="image-box2">
                            <div className="more-image2">
                              <img 
                                src="https://images.offerup.com/RlVjLHMSWQv0yn5PpsQAOMMQnss=/2048x1536/d8ba/d8bafb71d2af4d568eab0bd7a19bec0f.jpg"
                                alt="Product"
                              />
                                <img 
                                src="https://images.offerup.com/RlVjLHMSWQv0yn5PpsQAOMMQnss=/2048x1536/d8ba/d8bafb71d2af4d568eab0bd7a19bec0f.jpg"
                                alt="Product"
                              />
                            </div>
                          </div>

                          <div className="current-carDetail">
                            <div className="carDetail-box">
                              <div className="carDetail-rightBox">
                                <div className="carName">
                                  <div className="carName-left"><h4>2009 Chevrolet Malibu</h4>
                                  </div>
                                </div>
                                <div className="car-price">
                                  <div className="carPrice-right"><h4>$10,000</h4>
                                  </div>
                                </div>
                              </div>

                              <div className='carMileage-city'>
                                <div className="carMileage">
                                  <div className="carMileage-right">
                                    <div className='carMileage-image'>
                                      <img src="https://icons.veryicon.com/png/o/business/menu-icon-of-sanitation-industry/operating-mileage.png" alt="Car Image" />
                                    </div>
                                    <h4>57,340 Miles</h4>
                                  </div>
                                </div>

                                <div className="car-city">
                                  <div className="carCity-right"><h4>Denver, CO</h4>
                                  </div>
                                </div>
                              </div>

                              <div className="car-condition">
                                <h4>Used-Good Condition</h4>
                              </div>
                            </div>

                            <div className="car-button">
                              <div className="view-button">
                                <Link to="/ViewCarPage">
                                  <button onClick={showCarButton}>View</button>
                                </Link>
                              </div>
                              <div className="edit-button">
                              <Link to="/EditListingPage">
                                  <button onClick={showCarButton}>Edit</button>
                                </Link>
                              </div>
                              <div className="delete-button">
                              <Link to="">
                              <button onClick={deleteButton3}>Delete</button>
                                </Link>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div class="border p-4">
  <div class="car-status">
    <div class="status-detail">
      <div class="bought-status border-b mb-4 pb-4">
        <div class="bought-detail">
          <h4 class="text-xl font-semibold mb-1">Bought</h4>
          <h3 class="text-3xl font-bold">0</h3>
        </div>
      </div>
      <div class="sold-status">
        <div class="sold-detail">
          <h4 class="text-xl font-semibold mb-1">Sold</h4>
          <h3 class="text-3xl font-bold">0</h3>
        </div>
      </div>
    </div>
  </div>

  <div class="car-offer mt-4 border-b pb-4">
    <h4 class="text-xl font-semibold mb-1">Offers Made</h4>
    <h3 class="text-3xl font-bold">4</h3>
  </div>

  <div class="car-listed mt-8">
    <h4 class="text-xl font-semibold mb-1">Car Listed</h4>
    <h3 class="text-3xl font-bold">3</h3>
  </div>



              </div>
            </div> 

          </div>
        </div>
      </div>
    </>
  );
}


export default UserProfile;
