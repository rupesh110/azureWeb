import React, {useState} from "react";

import { FaFacebook } from "react-icons/fa";
import { Button } from "react-bootstrap";
//import { useLoginWithFacebookMutation } from "../../../slice/usersApi";
import { auth } from '../../../functions/firebase';

import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';


import './Login.css';

const LoginFacebook = () => {
    const [formData, setFormData] = useState({});
    //const [loginWithFacebook, { data, error, isLoading }] = useLoginWithFacebookMutation();
    
    const handleFacebookSignIn = async () => {
        const provider = new FacebookAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const updatedFormData = {
                uid: result.user.uid,
                FullName: result.user.displayName,
                Email: result.user.email,
            };
            setFormData(updatedFormData);
        } catch (error) {
            console.log('error', error);
        }
    };
    
    return (
        <Button variant="primary" className="media-login-btn" onClick={handleFacebookSignIn}>
        <FaFacebook className="facebook-icon" />
        Sign with Facebook
        </Button>
    );
}

export default LoginFacebook;