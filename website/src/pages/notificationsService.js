import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { initSocket } from './notificationService';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// The notificationService.js file


const CarList = () => {
  useEffect(() => {
    // Initialize any necessary setup, such as Socket.io
    initSocket();
    return () => {
    };
  }, []);

  // rest of component code

  // Trigger the notification
  const handleNotification = () => {
    notify('New bid on Car XYZ');
  };

  //rest of your component code

  return (
    <div></div> //Added so it isn't an error for now
  );
};

export default CarList;