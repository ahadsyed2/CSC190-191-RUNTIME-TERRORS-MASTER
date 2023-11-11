import { Link } from 'react-router-dom';
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import './ForgotPassword.css'


function Login() {

    return (
        <>

        <section className="container">
            <div className="forgot-password">
                <form action="">
                    <h1>Forgot Password!</h1>
                    <h3>Please enter your email address</h3>
                    
                    <div className="input-box">
                        <div className="input-with-icon">
                        <AiOutlineMail className="icon" />
                            <input type="email" placeholder="Email" required />
                        </div>
                    </div>

                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </section>

     </>
  );
}

export default Login
