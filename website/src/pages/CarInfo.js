import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import './CarInfo.css';
import { usePostContext } from '../hooks/usePostContext';
import { useVehicleContext } from '../hooks/useVehicleContext';
import { hamburgerMenu } from '../components/hamburgerMenu';
import NavbarMenu from '../components/navbarMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import speedometer from './speedometer.png';
import { useAuthContext } from '../hooks/useAuthContext';






function CarInfo() {
    const [sidebar, setSidebar] = useState(false);
    const {posts, dispatch} = usePostContext();
    const {vehicle, dispatchVehicle} = useVehicleContext();
    // State to hold fetched car data

    const showSidebar = () => setSidebar(!sidebar);

    //Full path =  https://localhost:3000/CarInfo/ ID

    var full_url_1 = window.location.href
    var slash = full_url_1.indexOf("/");

    var full_url_2 = full_url_1.substring(slash+1); 
    slash = full_url_2.indexOf("/");

    var full_url_3 = full_url_2.substring(slash+1); 
    slash = full_url_3.indexOf("/");

    var full_url_4 = full_url_3.substring(slash+1); 
    slash = full_url_4.indexOf("/");

    var url = full_url_4.substring(slash+1);

    //console.log("Full id: "+full_url_1);
    console.log("id: "+ url);
    var backend_url = "https://api-carmony-onrender-com.onrender.com/api/postRoutes" + url
    //console.log("backendPath = "+backend_url)
    

    // Function to fetch car data from MongoDB
    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(backend_url)
          const json = await response.json()
    
          if(response.ok){
            console.log('response Ok')
            dispatch({type: 'SET_POSTS', payload: json})
          }
        }
        
        fetchPosts()
        //fetchVehicle()
      }, []);

      const { user } = useAuthContext();
      const [showingDetail, setShowingDetail] = useState(false);

      const detailShow = () => {
        if(!securityCheck()){
            return;
        }

        setShowingDetail(!showingDetail);
      }

      const securityCheck = () => {

        return true;

      }




    return (
    <section>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbarMenu flex items-center'>
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

            {/* Display car data */}
        <div className='full-con'>
            <div className='left-car-info'>
            <div className='car-info-img'>
                { posts && <img
                 src={"https://ahadsyed1.s3.us-west-1.amazonaws.com/" + posts._id}
                 alt="Picture Failure"
                /> }
                </div>
            </div>
                
            <div className="right-car-info">
               
                        <h1 className="khula-text-heading">
                            {posts && posts.year} &nbsp;
                            {posts && posts.make} &nbsp;
                            {posts && posts.model}
                        </h1>
                        <h1 className='khula-text-heading1'>
                            ${posts && posts.price}
                        </h1>
                        
                        <p className='khula-text-paragraph'>
                            <section className='speedometer-img'>
                            <img src={speedometer} alt="Car Image" /> &nbsp;
                            {posts && posts.mileage} Miles
                            </section>
                            
                        </p>

                        <p className='khula-text-paragraph'>
                            {posts && posts.gas} 
                        </p>
                        <p className='khula-text-paragraph'>
                            Transmission: {posts && posts.transmission} 
                        </p>
                        <p className='khula-text-paragraph'>
                            Condition: {posts && posts.condition} 
                        </p>
                        <p className='khula-text-paragraph'>
                            Color: {posts && posts.color} 
                        </p>
                        <p className='khula-text-paragraph'>
                            Cylinders: {posts && posts.cylinders} 
                        </p>
                        <p className='khula-text-paragraph'>
                            Vehicle Type: {posts && posts.vehicleType} 
                        </p>
                        <p className='khula-text-paragraph'>
                            Location: {posts && posts.location} 
                        </p>
                        {!showingDetail && (
                            <button onClick={() => detailShow()} class="contact-button">Contact Details</button>
                        )}
                        {showingDetail && (
                            
                            <div className="contact-details-box">
                                <button onClick={() => detailShow()} className="close-button-cdb">
                                     X
                                </button>
                                <div className="main-content-cdb">
                                    <div className="cdb-title">
                                        Seller's Information
                                    </div>
                                    <div className="cdb-content">
                                        <div className="cdb-email">
                                            email: {posts.user}
                                        </div>
                                        <div className="cdb-name">
                                            name: N/A{/*posts.firstname*/}
                                        </div>
                                        <div className="cdb-phone-number">
                                            phone number: N/A{/*posts.firstname*/}
                                        </div>
                                        <div className="cdb-phone-number">
                                           Additional Fields:
                                        </div>
                                        { /* other fields needed? also, Need to adjust post model*/}
                                    </div>
                                </div>
                                
                            </div>

                        )}
                        
                        
                        {/* {carData && carData.length > 0 && carData[0].imageUrl ? (
                            <img src={carData[0].imageUrl} alt="Car" />
                        ) : (
                            <p>No image available</p>
                        )}
                    </div>
                        <div className='preview-right'>
                                {carData ? (
                                    <ul>
                                        {carData.map((car, index) => (
                                            <li key={index}>
                                                <h3>{car.make} {car.model}</h3>
                                                <p>Year: {car.year}</p>
                                                <p>Price: ${car.price}</p>
                                                <p>Location: ${car.location}</p>
                                                <p>Description: ${car.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                            ) : (
                                            <p>Loading...</p>
                                            )} */}
                        
                    
            </div>
        </div>
        <div className="car-features">
        <h2>Typical Features:</h2>
        {posts && posts.features} 
        
        </div>
        <div className="car-description">
        <h2>Description:</h2>
        {posts && posts.description} 
        
        </div>
        </section>
    );
}

export default CarInfo;
