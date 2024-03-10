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
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [userlocation, setUserLocation] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(email,password)
        await signup(email,password,firstname,lastname,userlocation )

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
      <form class="bg-gray-200 p-6 md:p-12 w-96 md:w-750 h-96 md:h-1000 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-lg" onSubmit={handleSubmit}>
    <h1 class="text-3xl md:text-4xl font-bold mb-4">Welcome!</h1>
    <h3 class="text-lg md:text-xl mb-6">Create an account to access Carmony account.</h3>
    <div class="mb-4">
        <h3 class="text-lg mb-2">First Name</h3>
        <input
            type="text"
            class="w-full border border-gray-300 rounded-md py-2 px-3"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
        />
    </div>
    <div class="mb-4">
        <h3 class="text-lg mb-2">Last Name</h3>
        <input
            type="text"
            class="w-full border border-gray-300 rounded-md py-2 px-3"
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
        />
    </div>
    <div class="mb-4">
        <h3 class="text-lg mb-2">Email Address</h3>
        <input
            type="email"
            class="w-full border border-gray-300 rounded-md py-2 px-3"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />
    </div>
    <div class="mb-4">
        <h3 class="text-lg mb-2">Location</h3>
        <input
            type="text"
            class="w-full border border-gray-300 rounded-md py-2 px-3"
            onChange={(e) => setUserLocation(e.target.value)}
            value={userlocation}
        />
    </div>
</form>


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