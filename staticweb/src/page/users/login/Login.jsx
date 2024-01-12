import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import { useLoginMutation } from '../../../slice/usersApi.js';
import './Login.css';

import LoginGoogle from './LoginGoogle.jsx';
import LoginFacebook from './LoginFacebook.jsx';
const initialData = {
  Email: '',
  Password: '',
};


const Login = () => {
  const [formData, setFormData] = useState(initialData);
  const [login, {error, isLoading }] = useLoginMutation();
  const naviate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(formData);
    console.log('data', result);
    // Check if login was successful before resetting the form
    if (!error && result && result.data) {
      setFormData(initialData); // Reset the form to initial state
    }
    if(result.data.token){
      sessionStorage.setItem('token', JSON.stringify(result.data.token));
      naviate('/');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleForgotPassword = () => {
    alert('Forgot Password');
  }

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>🚀 Space Portal</h1>
        <p>Login to explore the galaxy</p>
      </div>

      <Form onSubmit={handleLogin} className="login-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isLoading} className="login-btn">
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
        <p className='forgot-password' onClick={handleForgotPassword}>Forgot Password</p>

        <div className="or-divider">
          <div className="or-line"></div>
          <div className="or-text">or</div>
          <div className="or-line"></div>
        </div>

      <div>
        
      </div>

    <div className='sign-in-with-media'>
        <LoginGoogle />

        <LoginFacebook />
    </div>
  
      </Form>
    </div>
  );
};

export default Login;
