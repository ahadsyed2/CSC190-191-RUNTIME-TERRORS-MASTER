import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import './Signup.css'
import { useSignup } from '../hooks/useSignup'
import ReCAPTCHA from "react-google-recaptcha"


const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(email,password)
        await signup(email,password)

    }


  const [sidebar, setSidebar] = useState(false) 
  /*setSidebar=update*/ /*false means the current value is not showing*/
  const showSidebar = () =>  setSidebar(!sidebar)
  /* utilize set side bar and this is going to update the value to whatever the opposite of it is currently*/
  /*(!sidebar) it's reversing the value true/false*/

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }

  const [capVal, setCapVal] = useState(null)

  return (
      <>
      <IconContext.Provider value= {{color: '#fff'}}>
          <div className='navbarMenu'>
              <Link to="#" className='hamburger-bars'>
                  <FaBars onClick={showSidebar} />
              </Link>

              <div className="carmony-logo w-1/10 flex justify-center items-center p-0 1rem" style={{ width: "15rem", marginLeft: "2rem" }}>
            <img src="CARMONY_ICON2.png" alt="Logo" className="w-500 mt-3" />
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

      
      <div className="container">
        <form className = "signup-box" onSubmit = {handleSubmit}>
            <h1>Welcome!</h1>
            <h3>Create an account to access Carmony account.</h3>
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
                        <input
                            type = "email"
                            onChange={(e) => setEmail(e.target.value)}
                            value = {email}
                        />
                </div>

                <div className="newPassword">
                    <h3>New Password</h3>
                        <input
                            type = "password"
                            onChange={(e) => setPassword(e.target.value)}
                            value = {password}
                        />
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

                    <div className='account'>
                        <p>Already have an account? <Link to="/Login">Sign in</Link></p>
                    </div>

                <button disabled = {isLoading} className="btn">Sign Up</button>
                {error && <div className="error">{error}</div>}

                <div className='policy'>
                    <p>By signing up, you agree to Carmony Privacy policy
                        and Terms and Conditions.
                    </p>
                </div>
        </form>
    </div>

      </>
  )
}



export default Signup
