// Inside FacebookSignIn.jsx
import { auth, fProvider } from '../firebase'; // Update the import to your Firebase configuration
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import FacebookImg from '../assets/facebook.png';

function FacebookSignIn() {
    const navigate = useNavigate();

    const handleFacebookSignIn = () => {
        signInWithPopup(auth, fProvider).then((data) => {
            // Handle successful sign-in
            navigate('/homepage');
        }).catch(error => {
            // Handle sign-in error
        });
    }

    return (
        <div>
            <button onClick={handleFacebookSignIn} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                        src={FacebookImg} // Facebook sign in image
                        alt="Sign in With Facebook" // Alt text for accessibility
                        style={{width: '480px', height: '100px' }}
              /></button>
        </div>
    );
}

export default FacebookSignIn;
