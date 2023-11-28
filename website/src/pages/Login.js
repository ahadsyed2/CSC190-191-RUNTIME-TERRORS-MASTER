import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import './Login.css'

function Login() {

    const [sidebar, setSidebar] = useState(false) 
    /*setSidebar=update*/ /*false means the current value is not showing*/
    const showSidebar = () =>  setSidebar(!sidebar)
    /* utilize set side bar and this is going to update the value to whatever the opposite of it is currently*/
    /*(!sidebar) it's reversing the value true/false*/

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

        <section className="container">
            <div className="login-box">
                <form action="">
                    <h1>Welcome!</h1>
                    <h3>Log in to access your Carmony account.</h3>
                    <div className="register-link">
                        <p>New to Carmony? <Link to="/Signup">Create an account</Link></p>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="password" required />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Remember me</label>
                        <Link to="/ForgotPassword">Forgot password?</Link>
                    </div>

                    <button type="submit" className="btn">Login</button>

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
                </form>
            </div>
        </section>

     </>
  );
}

export default Login