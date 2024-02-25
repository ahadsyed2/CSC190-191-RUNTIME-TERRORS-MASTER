import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import './CarInfo.css';
import { usePostContext } from '../hooks/usePostContext';

function CarInfo() {
    const [sidebar, setSidebar] = useState(false);
    const [carData, setCarData] = useState(); 
    const {posts, dispatch} = usePostContext();
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

    console.log("Full id: "+full_url_1);
    console.log("id: "+ url);
    var backend_url = "/api/postRoutes/" + url
    console.log("backendPath = "+backend_url)

    

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
      }, []);

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
                    </ul>
                </nav>
            </IconContext.Provider>

            {/* Display car data */}
            <section className="car-info-container">
                <div className='preview-box'>
                    <div className='preview-left'>
                        

                        
                    </div>
                    <div className='preview-right'>
                        
                        The Make of the car is {posts && posts.make}!

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
            </section>
        </>
    );
}

export default CarInfo;