import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { hamburgerMenu } from '../components/hamburgerMenu';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './EditListingPage.css'

const EditListingPage = () => {
    // State to manage form fields
    const [listingData, setListingData] = useState({
      title: '',
      description: '',
      price: 0,
    });
  
    // Handle changes in form fields
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setListingData({
        ...listingData,
        [name]: value,
      });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your logic for submitting the form data (e.g., API call, etc.)
      console.log('Form submitted with data:', listingData);
    };
  
    return (
      <div className="edit-listing-container">
        <h2>Edit Listing</h2>
        <div className="listing-container">
          <form onSubmit={handleSubmit}>
            <label>
              Vehicle:
              <input
                type="text"
                name="title"
                value={listingData.title}
                onChange={handleInputChange}
                placeholder="Enter Vehicle"
              />
            </label>
            <br />
            <label>
              Make:
              <input
                type="text"
                name="title"
                value={listingData.title}
                onChange={handleInputChange}
                placeholder="Enter Make"
              />
            </label>
            <br />
            <label>
              Model:
              <input
                type="text"
                name="title"
                value={listingData.title}
                onChange={handleInputChange}
                placeholder="Enter Model"
              />
            </label>
            <br />
            <label>
              Years:
              <input
                type="text"
                name="title"
                value={listingData.title}
                onChange={handleInputChange}
                placeholder="Enter Years"
              />
            </label>
            <br />
            <label>
              Description:
              <textarea
                name="description"
                value={listingData.description}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={listingData.price}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    );
  };
  

  export default EditListingPage;

