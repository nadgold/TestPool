import React from 'react';
import '../App.css';
import GoogleSignIn from '../SignInComps/GoogleSignIn';
import FacebookSignIn from '../SignInComps/FacebookSignIn';
import SignUp from './SignUp';

function SignIn() {
  return (
    <>
      <div>
        <h1>Welcome to TestPool - Your test creator</h1>
        <GoogleSignIn />
        <FacebookSignIn/>
        <SignUp/>
      </div>
    </>
  );
}

export default SignIn;