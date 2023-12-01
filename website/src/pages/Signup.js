import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { hamburgerMenu } from '../components/hamburgerMenu';
import { IconContext } from 'react-icons';
import ReCAPTCHA from "react-google-recaptcha"

import './Signup.css'

function Signup() {
  const [sidebar, setSidebar] = useState(false) 
  /*setSidebar=update*/ /*false means the current value is not showing*/
  const showSidebar = () =>  setSidebar(!sidebar)
  /* utilize set side bar and this is going to update the value to whatever the opposite of it is currently*/
  /*(!sidebar) it's reversing the value true/false*/

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }

  /*const [email, setEmail] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email)
  }; */

  const [capVal, setCapVal] = useState(null)
  return (
      <>
        <IconContext.Provider value= {{color: '#fff'}}>
          <div className='navbar'>
            <Link to="#" className='hamburger-bars'>
                <FaBars onClick={showSidebar} />
            </Link>

            <div className="carmony-logo">
                <img src="CARMONY_ICON2.png" alt="" />
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

        {/*Create signup box---Janeeya chanta*/}
        <div className="container">
            <div className="signup-box">
                <form action="">
                    <h1>Welcome!</h1>
                    <h3>Create an account to access Carmony account.</h3>
                    
                    <div className='accountOption'>
                        <Link to="#"><h2>Private Onwer</h2></Link>
                        <h3>OR</h3>
                        <Link to="#"><h2>Dealership</h2></Link>
                    </div>

                    <div className="name">
                        <h3>First Name</h3>
                        <input type="text" placeholder="" required />
                    </div>

                    <div className="name">
                        <h3>Last Name</h3>
                        <input type="text" placeholder="" required />
                    </div>

                    <div className="email-address">
                        <h3>Email Address</h3>
                            <input type="email" placeholder="" required />
                    </div>
                    
                    <div className="newPassword">
                        <h3>New Password</h3>
                        <input type={show ? "text" : 'password'} placeholder="" required />
                    </div>
              
                    <div className="confirmPassword">
                        <h3>Confirm New Password</h3>
                            <input type={show ? "text" : 'password'} placeholder="" required />
                    </div>

                    <div className="show-password-toggle">
                        <label>
                            <input type="checkbox" checked={show} onChange={handleShow} />
                            <h5>Show Password</h5>
                        </label>
                    </div>

                    <div className='reCaptcha'>
                        <ReCAPTCHA
                        sitekey='6LdiCg0pAAAAAGD_KJyjVmJlY1MgaA1TzDlYI7uP'
                        onChange={(val) => setCapVal(val)}
                        />
                    </div>

                    <button disabled={!capVal} type="submit" className="btn">Sign up</button>

                    <div className='account'>
                        <p>Already have an account? <Link to="/Login">Sign in</Link></p>
                    </div>

                    <div className='social-options'>
                        <br></br><h3>___________________   or   ___________________</h3>
                    </div>

                    <div className="social-connect">
                        <button>
                            <img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png" alt="Facebook" />
                            Continue with Facebook
                        
                        </button>
                        <button>
                            <img src="https://www.deliverlogic.com/wp-content/uploads/2021/04/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="Google" />
                            Continue with Google
                        </button>
                        <button>
                            <img src="https://i.pinimg.com/originals/1e/c1/1a/1ec11a869384bc5e59625bac39b6a099.png" alt="Apple" />
                            Continue with Apple
                        </button>
                    </div>

                    <div className='policy'>
                        <p>By signing up, you agree to Carmony Privacy policy
                            and Terms and Conditions.
                        </p>
                    </div>
                </form>
            </div>
        </div>



      </>
  )
}

export default Signup
