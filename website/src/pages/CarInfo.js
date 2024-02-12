import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import './CarInfo.css';

function CarInfo() {
    const [sidebar, setSidebar] = useState(false);
    const [carData, setCarData] = useState(null); // State to hold fetched car data

    const showSidebar = () => setSidebar(!sidebar);

    useEffect(() => {
        fetchData(); // Fetch data when component mounts
    }, []);

    // Function to fetch car data from MongoDB
    const fetchData = async () => {
        try {
            const response = await fetch('/api/cars'); // Assuming you have an API endpoint to fetch car data
            const data = await response.json();
            setCarData(data); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
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
                    </ul>
                </nav>
            </IconContext.Provider>

            {/* Display car data */}
            <section className="car-info-container">
                <div className='preview-box'>
                    <div className='preview-left'>
                        {carData && carData.length > 0 && carData[0].imageUrl ? (
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
                                            )}
                        </div>
                    </div>
            </section>
        </>
    );
}

export default CarInfo;
