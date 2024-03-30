import { GoogleLogin } from 'react-google-login';

const clientId = "635523668157-tse46i7rquk3rcll133s95gh34d86qda.apps.googleusercontent.com";

function GLogin() {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! Current user: ", res);
    }

    return(
        <div id="signInButton">
        <GoogleLogin
          clientId={clientId}
          buttonText="Login With Google Account"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>
    )
};


export default GLogin;