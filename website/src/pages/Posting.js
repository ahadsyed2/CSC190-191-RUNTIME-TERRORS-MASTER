import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { hamburgerMenu } from '../components/hamburgerMenu';
import { hamburgerMenu2 } from '../components/hamburgerMenu2';
import { BsUpload } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import  usePosting  from '../hooks/usePosting';
import { useAuthContext } from '../hooks/useAuthContext';
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

  const { user } = useAuthContext()

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
    mileage: '',
    fuel: '',
    transmission: '',
    condition: '',
    color: '',
    cylinders: '',
    features: '',
    description: '',
    timestamp: '',
    user: '',
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
    var date = new Date();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      timestamp: date.toString(),
      user: user.email,
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

    if (!formData.image) {
      // Display an error message indicating that image upload is required
      setSuccessMessage('Please upload an image before submitting.');
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
      return; // Prevent further execution
    }

    try {

        //TESTING
       


      //Timestamp
      var date = new Date();
      setFormData({
        ...formData,
        timestamp: date.toString(),
      });


      // Call the createPosting function from usePosting hook
      const result = await createPosting(formData);

      //const imageResult = await AWSImageUpload(formData);



      if (result) {
        // Handle success (e.g., redirect or show a success message)
        console.log('Posting created:', result);
        // Update success message if the form is submitted successfully
         setSuccessMessage('Posting created successfully!', result);
        // Reset success message after a few seconds
        setTimeout(async () => {
        setSuccessMessage(null);



          //let form get passed to mongodb first, then run awsImageUpload with uniqueID from form as parameter

          const imageResult = await AWSImageUpload(formData, result._id);



          if (imageResult) {
            // Handle success (e.g., redirect or show a success message)
            console.log('image created:', result);
          }


          //TESTING
        }, 5000); 

        //if (imageResult) {
          // Handle success (e.g., redirect or show a success message)
          //console.log('image created:', result);
        //}

        



        // reset the form after a successful submission
        setFormData({
          vehicleType: '' ,
          make: '',
          model: '',
          year: '',
          price: '',
          location: '',
          mileage: '',
          fuel: '',
          transmission: '',
          condition: '',
          color: '',
          cylinders: '',
          features: '',
          description: '',
          image: null,
          timestamp: '',
          user: user.email,
        });


        //I added this to take you to home page -Nick
        //window.location.href = "/";
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

          <div className="car-logo w-1/10 flex justify-center items-center p-0 1rem" style={{ width: "15rem", marginLeft: "2rem" }}>
            <img src="CARMONY_ICON2.png" alt="Logo" className="w-500 mt-3" />
          </div>
        </div>

        <nav className={sidebar ? 'nav-bar-menu active' : 'nav-bar-menu'}>
          <ul className='nav-bar-menu-items' onClick={showSidebar}>
            <li className='nav-bar-toggle'>
              <Link to='#' className='hamburger-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            {!user && hamburgerMenu.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
                {user && hamburgerMenu2.map((item, index) => {
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

      

      <section className='car-listing-info'>
        <h1>Enter information for your listing</h1>
          <div className='container-box'>
            <div className='leftside-box'>
              <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <h1>About the Vehicle</h1>

                <div className='vehicle-type-dropdown'>
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

                    <div className='make'>
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

                    <div className='model'>
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

                  <div className='year'>
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

                  <div className='price'>
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

                  <div className='location'>
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

                  <div className='mileage-box'>
                    <h2>Enter Mileage: </h2>
                    <input
                      type='text'
                      name='mileage'
                      placeholder='Enter Mileage'
                      value={formData.mileage}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='fuel-box'>
                    <h2>Enter Fuel Type: </h2>
                    <input
                      type='text'
                      name='fuel'
                      placeholder='Enter Fuel Type'
                      value={formData.fuel}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='transmission-box'>
                    <h2>Enter Transmission Type: </h2>
                    <input
                      type='text'
                      name='transmission'
                      placeholder='Enter Transmission Type'
                      value={formData.transmission}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='condition-box'>
                    <h2>Enter Condition Description: </h2>
                    <input
                      type='text'
                      name='condition'
                      placeholder='Enter Condition'
                      value={formData.condition}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='color-box'>
                    <h2>Enter Color: </h2>
                    <input
                      type='text'
                      name='color'
                      placeholder='Enter Color'
                      value={formData.color}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='cylinders-box'>
                    <h2>Enter number of Cylidners: </h2>
                    <input
                      type='text'
                      name='cylinders'
                      placeholder='Enter Cylinder Count'
                      value={formData.cylinders}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='features-box'>
                    <h2>Enter Notable Features: </h2>
                    <input
                      type='text'
                      name='features'
                      placeholder='Enter Features'
                      value={formData.features}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='descrip-box'>
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

                </div>
              </div>
            </form>
          </div>

            <div className='righside-box'>
              <h1>Preview</h1>

                  <div className='preview-box'>
          
                    <div className='preview-right-box'>
                       {/* Display the preview based on the entered data */}
                       <h2>Vehicle Type: <span>{formData.vehicleType}</span></h2>
                          <p>Make: <span>{formData.make}</span></p>
                          <p>Model: <span>{formData.model}</span></p>
                          <p>Year: <span>{formData.year}</span></p>
                          <p>Price: <span>{formData.price}</span></p>
                          <p>Location: <span>{formData.location}</span></p>
                          <p>Mileage: <span>{formData.mileage}</span></p>
                          <p>Fuel Type: <span>{formData.fuel}</span></p>
                          <p>Transmission Style: <span>{formData.transmission}</span></p>
                          <p>Condition: <span>{formData.condition}</span></p>
                          <p>Color: <span>{formData.color}</span></p>
                          <p>Cylinder Count: <span>{formData.cylinders}</span></p>
                          <p>Included Features: <span>{formData.features}</span></p>
                          <p>Description: <span>{formData.description}</span></p>
                    </div>
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

                  <form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className="post-submit-button">
                      <button type='submit' className='post-button' disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit'}
                      </button>

                      {successMessage && (
                        <div className='success-message'>
                          {successMessage}
                        </div>
                      )}
                    </div>
                  </form>
            </div>
          </div>

      </section>
    </>
  );
}

export default Posting;
