import { Link } from 'react-router-dom';
import { React, useState } from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './ForgotPassword.css'


function ForgotPassword() {
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.prevenDefault()
        axios.post('http://localhost:3001/ForgotPassword', {email}) //need to put backend local host num I think
        .then(res => {
            if(res.data.Status === "Success") {
                    navigate('/')
                }
        }).catch(err => console.log(err))
    }

    return (
        <>

            <section className="container">
                <div className="forgot-password">
                    <form action="">
                        <h1>Forgot Password!</h1>
                        <h3>Please enter your email address</h3>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="input-box">
                                <div className="input-with-icon">
                                    <AiOutlineMail className="icon" />
                                    <input 
                                        type="email" 
                                        placeholder="Enter Email" 
                                        autoComplete='off'
                                        name="email"
                                        className="form-control rounded-0"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                        </form>

                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </section>

     </>
  );
}

export default ForgotPassword
