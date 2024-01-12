import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Register.css';
import { useRegisterMutation } from '../../slice/usersApi.js';
import { useNavigate } from 'react-router-dom';

const initialFormData = {
  FullName: '',
  Email: '',
  Password: '',
  confirmPassword: '',
};

const Register = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(!confirmPasswordVisibility);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register(formData);
      console.log('This is response:', response.data.token);
      sessionStorage.setItem('token', JSON.stringify(response.data.token));

      const token = sessionStorage.getItem('token');
      console.log(" file: Register.js:85 ~ handleSubmit ~ token", JSON.parse(token));

      if (response.data.message === 'Successfully created!!!!') {
        setFormData(initialFormData);
        alert('Successfully created!!!!');
        navigate('/');
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('Unexpected Error:', error);
      alert('Unexpected Error: ' + error.message);
    }
  };

  return (
    <div className="register-container">
      <Form onSubmit={handleSubmit} className="register-form">
        <h1>🚀 Register</h1>
        <Form.Group controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="FullName"
            id="FullName"
            value={formData.FullName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="Email"
            id="Email"
            value={formData.Email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={passwordVisibility ? "text" : "password"}
              placeholder="Enter password"
              name="Password"
              id="Password"
              value={formData.Password}
              onChange={handleChange}

            />
            <div className="eye-icon" onClick={togglePasswordVisibility}>
              {passwordVisibility ? <FaEyeSlash /> : <FaEye />}
            </div>
           
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={confirmPasswordVisibility ? "text" : "password"}
              placeholder="Confirm password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <div className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
            {confirmPasswordVisibility ? <FaEyeSlash /> : <FaEye />}
            </div>
          </InputGroup>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </Form>
    </div>
  );
};

export default Register;
