import { Link } from 'react-router-dom';
import React from 'react'
import {LoginSocialFacebook} from 'reactjs-social-login';
import {FacebookLoginButton} from 'react-social-login-buttons'
import './Facebooklogin.css';
import {useState} from 'react'

function Facebooklogin() {
    const [profile,setProfile]=useState(null);
    return (
    <div className="FacebookLoginContainer">
    {!profile ? <LoginSocialFacebook
        appId="256005617100674"
        onResolve={(response) => {
            console.log(response);
            setProfile(response.data)
        }}
        onReject={(error) => {
            console.log(error);
        }}
        >
        <button className="FacebookLoginButton">
            <img
            src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png"
            alt="Facebook"
            />
            Continue with Facebook
        </button>
        </LoginSocialFacebook> :''}
        {profile? <div>
            <h1>{profile.name}</h1>
            <img src = {profile.picture.data.url}/>
            
    </div>:''}
    </div>
    );
}

export default Facebooklogin;




























