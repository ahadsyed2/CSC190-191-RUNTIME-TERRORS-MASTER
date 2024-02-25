import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import './Signup.css'
import { useSignup } from '../hooks/useSignup'


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

  return (
      <>
      <IconContext.Provider value= {{color: '#fff'}}>
          <div className='navbarMenu'>
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

      

        <form className = "login-box" onSubmit = {handleSubmit}>
            <h3>Sign Up</h3>

            <label>Email</label>
            <input
                type = "email"
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
                />

            <label>Password</label>
            <input
                type = "password"
                onChange={(e) => setPassword(e.target.value)}
                value = {password}
                />

            <button disabled = {isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>

      </>
  )
}



export default Signup
