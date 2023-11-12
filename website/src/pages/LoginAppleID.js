
import appleAuth, {
    AppleAuthRequestOperation,
    AppleAuthRequestScope,
    AppleAuthCredentialState
} from '@invertase/react-native-apple-authentication';

const App = () => {

    const LoginAppleID = () => {
        return appleAuth.performRequest({
            requestedOperation: AppleAuthRequestOperation.LOGIN,
            requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
        }).then(AppleAuthRequestResponse =>{
            let { identityToken, email } = AppleAuthRequestResponse;
            alert(identityToken + "Email: " + email);
        });
    }
}