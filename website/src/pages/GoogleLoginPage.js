// new add for google login on 11/10
import React, {useState} from 'react'
import { GoogleLogin } from 'react-google-login'

// new add client id for google login
const clientid = 
  '805652889317-i1qono3b1b74pcu291h2d599s0eqslo4.apps.googleusercontent.com';

export default function GoogleLoginPage(){

  // new add for google login (line 22-23)
  const[flag, setFlag] = useState(false);
  const[name, setName] = useState();

  const onSuccess = (res) => {
    setName(res.profileObj["name"]);
    console.log("Success", res.profileObj);
    setFlag(true);
  };

  const onFailure = (res) => {
    console.log("Failed", res);
  };

  return(
    <div>
      {flag?(<h2> Hello {name} </h2>
      ) :(
        <GoogleLogin
          clientId = {clientid}
          onSuccess = {onSuccess}
          onFailture = {onFailure}
          buttonText = 'login'
          cookiePolicy= {'Sign in with Google'}
          style = {{marginTop : '100px'}}
          isSignedIn = {false}
        />
      )
      }
    </div>
  )
}  

