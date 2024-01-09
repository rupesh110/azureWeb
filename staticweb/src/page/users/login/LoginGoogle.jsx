import React, { useState, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../functions/firebase';
import { useLoginWithGoogleMutation } from '../../../slice/usersApi';
import './Login.css';

const provider = new GoogleAuthProvider();

const LoginGoogle = () => {
  const [formData, setFormData] = useState({});
  const [loginWithGoogle] = useLoginWithGoogleMutation();
  const navigate = useNavigate();

  // useEffect to perform actions that depend on formData changes
  useEffect(() => {
    console.log('formData changed:', formData);
    const performLogin = async () => {
      const response = await loginWithGoogle(formData);
      console.log('data', response);
  
      const token = response.data?.token || response.error?.data?.token || null;
  
      if (token) {
        sessionStorage.setItem('token', JSON.stringify(token));
        navigate('/');
      }
    };
    performLogin();
  }, [formData, loginWithGoogle, navigate]);
  

  const handleGoogleSignIn = async () => {
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
    <Button variant="danger" className="media-login-btn" onClick={handleGoogleSignIn}>
      <FaGoogle className="google-icon" />
      Sign with Google
    </Button>
  );
};

export default LoginGoogle;
