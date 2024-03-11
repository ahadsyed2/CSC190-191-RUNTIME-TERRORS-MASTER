import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { hamburgerMenu } from './hamburgerMenu';
import { BsUpload } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import  usePosting  from '../hooks/usePosting';
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
  //message if form is submitted successfully
  const [successMessage, setSuccessMessage] = useState('');


  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('Vehicle Type');

  //NEW FUNCTIONS FOR BACKEND- Ahad
  const { createPosting, AWSImageUpload, isLoading, error } = usePosting();

  const [formData, setFormData] = useState({
    vehicleType: '',
    make: '',
    model: '',
    year: '',
    price: '',
    location: '',
    description: '',
    image: null, // You might want to store the file or image URL here
    imagePreview: null,
  });

  //update the selected state and hide dropdown list after selection
  const handleSelect = (option) => {
    setSelected(option);
    setIsActive(false);

    setFormData({
      ...formData,
      vehicleType: option,
    });
  };

  //set the current formData attribute(name) to the new value
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //image file capturing and logging to console
  const handleFileChange = (e) => {
  const file = e.target.files[0];
  console.log('Selected File!:', file);

  
    // Display image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: file,
        imagePreview: reader.result, // Add this to your state
      });
    };
    reader.readAsDataURL(file);
  };


  //HANDLE SUBMISSION

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        //TESTING
       


      // Call the createPosting function from usePosting hook
      const result = await createPosting(formData);

      const imageResult = await AWSImageUpload(formData);



      if (result) {
        // Handle success (e.g., redirect or show a success message)
        console.log('Posting created:', result);
        // Update success message if the form is submitted successfully
         setSuccessMessage('Posting created successfully!');
        // Reset success message after a few seconds
        setTimeout(() => {
        setSuccessMessage(null);
        }, 5000); 

        if (imageResult) {
          // Handle success (e.g., redirect or show a success message)
          console.log('image created:', result);
        }

        



        // reset the form after a successful submission
        setFormData({
          vehicleType: '' ,
          make: '',
          model: '',
          year: '',
          price: '',
          location: '',
          description: '',
          image: null,
        });
      } else {
        // Handle error (e.g., show an error message)
        setSuccessMessage('Posting failed, incorrect syntax please try again' , error);
        setTimeout(() => {
          setSuccessMessage(null);
          }, 5000);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
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
              <form onSubmit={handleSubmit} encType='multipart/form-data'>
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

                    <div className='make-box'>
                      <h2>Enter Make: </h2>
                      <input
                        type='text'
                        name='make'
                        placeholder='Enter make'
                        value={formData.make}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className='model-box'>
                    <h2>Enter Model: </h2>
                    <input
                      type='text'
                      name='model'
                      placeholder='Enter model'
                      value={formData.model}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='year-box'>
                    <h2>Enter Year: </h2>
                    <input
                      type='text'
                      name='year'
                      placeholder='Enter year'
                      value={formData.year}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='price-box'>
                    <h2>Enter Price: $ </h2>
                    <input
                      type='text'
                      name='price'
                      placeholder='Enter price...'
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='location-box'>
                    <h2>Enter Location: </h2>
                    <input
                      type='text'
                      name='location'
                      placeholder='Enter Location'
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='description-box'>
                    <h2>Description: </h2>
                    <input
                      type='text'
                      name='description'
                      placeholder='Enter description'
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>


                    <div className='photo-upload'>
                    <h2>Upload image</h2>
                    <BsUpload />
                    <input
                      type='file'
                      id='image'
                      name='image'
                      accept='image/*'
                      onChange={handleFileChange}
                      maxLength={"50mb"}
                    />
                    {/* Display image preview if available */}
                    {formData.imagePreview && (
                      <img
                        src={formData.imagePreview}
                        alt='Preview'
                        style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }}
                      />
                    )}

                  


                  </div>

                  <button type='submit' className='btn' disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </button>

                  {successMessage && (
                    <div className='success-message'>
                      {successMessage}
                    </div>
                  )}

                </div>
              </div>
            </form>
          </div>

            <div className='righside-box'>
              <h1>Preview</h1>

                  <div className='preview-box'>
          
                    <div className='preview-right'>
                       {/* Display the preview based on the entered data */}
                        <h2>{formData.vehicleType}</h2>
                        <p>Make: {formData.make}</p>
                        <p>Model: {formData.model}</p>
                        <p>Year: {formData.year}</p>
                        <p>Price: {formData.price}</p>
                        <p>Location: {formData.location}</p>
                        <p>Description: {formData.description}</p>
                    </div>
                  </div>
            </div>
          </div>

      </section>
    </>
  );
}

export default Posting;