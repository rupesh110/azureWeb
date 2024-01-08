import React, { useEffect, useState } from 'react';
import {GoogleAuthProvider,
     signInWithPopup } from 'firebase/auth';
import 'firebase/auth';
import {auth} from '../../functions/firebase';

const googleProvider = new GoogleAuthProvider();

const GoogleSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const loginWithEmailAndPassword = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithPopup(auth, googleProvider);
            const user = userCredential._tokenResponse;
            console.log("🚀 ~ file: Login.jsx ~ line 29 ~ loginWithEmailAndPassword ~ user", user)
        } catch (error) {
            console.log("🚀 ~ file: Login.jsx ~ line 31 ~ loginWithEmailAndPassword ~ error", error)
        }
    }
  return (
    <div>
      <button id="googleSignInButton" onClick={loginWithEmailAndPassword}>Sign In with Google</button>
    </div>
  );
};

export default GoogleSignIn;
