import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import './CarInfo.css';
import { usePostContext } from '../hooks/usePostContext';
import { useVehicleContext } from '../hooks/useVehicleContext';
import { hamburgerMenu } from './hamburgerMenu';
import NavbarMenu from '../components/navbarMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import speedometer from './speedometer.png';






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
    //console.log("id: "+ url);
    var backend_url = "/api/postRoutes/" + url
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

        /*const fetchVehicle = async () => {

            var vehicle_id;
            if(posts){
                vehicle_id = "/api/vehicleRoutes/" + posts.vehicle_id
            } else {
                vehicle_id = "/"
            }
            console.log("vehicle api call: " + vehicle_id);

            const response = await fetch(vehicle_id)
            const json = await response.json()
      
            if(response.ok){
              console.log('response Ok')
              dispatchVehicle({type: 'SET_VEHICLES', payload: json})
            }
          } */
        
        fetchPosts()
        //fetchVehicle()
      }, []);

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

            {/* Display car data */}
        <div className='full-con'>
            <div className='left-car-info'>
            <div className='car-info-img'>
                <img
                src="https://images.offerup.com/4uQVF_BU-_3APQkmUNUmGB3xqhE=/1280x960/d3ed/d3ed001efeac469097afcb8638e4ca76.jpg"
                alt="Picture Failure"
                />
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
                        <button class="contact-button">Contact Details</button>
                        
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