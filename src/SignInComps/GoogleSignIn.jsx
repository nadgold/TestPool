import React, { useEffect, useState } from "react";
import { auth, gProvider } from '../firebase'
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import GoogleImg from '../assets/Google.png';

function GoogleSignIn() {
    const [value, setValue] = useState(false)
    const navigate = useNavigate(); // Initialize the navigation object

    const handleClick = ()=> {
        signInWithPopup(auth, gProvider).then((data)=> {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
            console.log('working')
            navigate('/homepage');
        })
    }

    useEffect(()=> {
        setValue(localStorage.getItem("email"))
    })

    return (
        <div>
            {
                <button onClick={handleClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                        src={GoogleImg} // Google sign in image
                        alt="Sign in With Google" // Alt text for accessibility
                        style={{width: '480px', height: '100px' }}
              /></button>
            }
        </div>
    )
}

export default GoogleSignIn;