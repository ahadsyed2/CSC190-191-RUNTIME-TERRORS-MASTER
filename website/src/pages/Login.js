import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { hamburgerMenu } from '../components/hamburgerMenu';
import { IconContext } from 'react-icons';
import './Login.css'
import { useLogin } from '../hooks/useLogin';
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
            <div className='navbarMenu'>
                <Link to="#" className='hamburger-bars'>
                    <FaBars onClick={showSidebar} />
                </Link>

                <div className="carmony-logo w-1/10 flex justify-center items-center p-0 1rem" style={{ width: "15rem", marginLeft: "2rem" }}>
                    <img src="CARMONY_ICON2.png" alt="Logo" className="w-500 mt-3" />
                </div>
            </div>
        
        <nav className={sidebar ? 'nav-bar-menu active' : 'nav-bar-menu'}>
          <ul className='nav-bar-menu-items' onClick={showSidebar}>
            <li className="nav-bar-toggle">
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

        <section className="container h-screen flex items-center justify-center" >
            <div className="login-box bg-gray-200" >
                <h1 className="text-5xl mb-6" style={{ textShadow: '2px 4px 4px rgba(139, 139, 139)' }} >Welcome!</h1>
                <h3 className="text-xl mb-4">Log in to access your Carmony account.</h3>
                    <div className="create-link">
                        <h3>New to Carmony?</h3>
                        <h4><Link to="/Signup">Create an account</Link></h4>
                    </div>

                <form className="input-box" onSubmit={handleSubmit}>
                    <div className="flex flex-col text-lg items-start max-w-md w-full md:w-64 lg:w-96 mt-5">
                        <label>Email</label>
                        <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="h-full bg-transparent border border-black outline-none rounded-full mt-1 px-3 py-2 w-full"
                        />
                    </div>

                    <div className="flex flex-col text-lg items-start max-w-md w-full md:w-64 lg:w-96 mt-7">
                        <label>Password</label>
                        <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="h-full bg-transparent border border-black outline-none rounded-full mt-1 px-3 py-2 w-full"
                        />
                    </div>


                    <div className="remember-forgot">
                        <label className="flex items-center">
                            <input type="checkbox" className="accent-color-white mr-1" /> Remember me
                        </label>
                        <h4><Link to="/ForgotPassword">Forgot password?</Link></h4>
                    </div>


                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-1/2 h-45% bg-gray-300 border-2 border-black outline-none rounded-3xl py-2 px-4 text-lg mt-10 mb-12 cursor-pointer font-semibold
                        hover:bg-green-300 transition duration-300"
                    >
                        Login
                    </button>

                    {error && <div className="error text-red-600 mb-4">{error}</div>}
                </form>

                <div className="">
                
                </div>

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