import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import './Signup.css'
import { BsUpload } from 'react-icons/bs';


function Posting() {
  const [sidebar, setSidebar] = useState(false) 
//image 
// const [image, setImage] = useState(null);
/* const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = () => {
    // Here, you can implement the logic to upload the image
    
    console.log("Uploading image:", image);
  };/



  /*setSidebar=update*/ /*false means the current value is not showing*/
  const showSidebar = () =>  setSidebar(!sidebar)
  /* utilize set side bar and this is going to update the value to whatever the opposite of it is currently*/
  /*(!sidebar) it's reversing the value true/false*/
//image 



  return (
      <>
      <IconContext.Provider value= {{color: '#fff'}}>
          <div className='navbar'>
              <Link to="#" className='hamburger-bars'>
                  <FaBars onClick={showSidebar} />
              </Link>

              <div className="logo">
                  <img src="https://www.clker.com/cliparts/u/O/L/Q/c/m/car-icon-hi.png" alt="Logo" />
              </div>
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

    <div className='posting'>
    <h1 style={{ fontFamily: 'YourChosenFont, sans-serif', color: '#333', fontSize: '24px', fontWeight: 'bold',textAlign: 'center' }}>
    Enter information for your listing
</h1>
        <br></br>
        <br></br>
            <label htmlFor="price" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'lighter' }}>
            <i className="enter price" style={{ marginRight: '5px' }}></i>    Enter Price:  $
        </label>
    
    <input
        type="text"
        id="price"
        name="price"
        placeholder="Enter price..."
    
        style={{ fontFamily: 'Arial, Helvetica, sans-serif', border: '1px solid #ccc', padding: '8px' }}
    />

    
        <br></br>
        <br></br>
        <label htmlFor="image" style={{ fontFamily: 'YourChosenFont, sans-serif', fontWeight: 'lighter',marginRight: '10px' }}>
        Upload image
        <BsUpload style={{ marginLeft: '5px', fontSize: '15px' }} />

        </label>
        <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
        
        />

        </div>

    </>
)
}

export default Posting
