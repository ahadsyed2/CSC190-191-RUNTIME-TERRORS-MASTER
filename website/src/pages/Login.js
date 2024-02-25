import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import './Login.css'
import { useLogin } from '../hooks/useLogin';
import LoginButon from '../components/GoogleLogin'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

//google api client id
const clientId = "635523668157-tse46i7rquk3rcll133s95gh34d86qda.apps.googleusercontent.com";
 
function Login() {

    //TESTING, 

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        };
        gapi.load('client:auth2', start);
    });





    


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const{login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        //fires login function in useLogin after email and password have been entered
        await login(email,password)
        //console.log(email,password)
    }



    //TESTING

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
                    <h1>Welcome!</h1>
                    <h3>Log in to access your Carmony account.</h3>
                    <div className="register-link">
                        <p>New to Carmony? <Link to="/Signup">Create an account</Link></p>
                    </div>
                    
                    <form className = "input-box" onSubmit = {handleSubmit}>
                     

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

                        <button disabled = {isLoading}>Login</button>
                        {error && <div className  = "error">{error} </div>}
                    </form>





                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <Link to="/ForgotPassword">Forgot password?</Link>
                    </div>
                

                <LoginButon />
            </div>
        </section>

     </>
  );
}

export default Login




//  <div className="input-box">
//<input type="text" placeholder="Username" required />
//</div>
//<div className="input-box">
   // <input type="password" placeholder="password" required />
//</div>
