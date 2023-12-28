import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Register.css';

import { useRegisterMutation } from '../../slice/usersApi.js';

const initialFormData = {
  FullName: '',
  Email: '',
  Password: '',
  confirmPassword: '',
};

const Register = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [register, { isLoading }] = useRegisterMutation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register(formData);
      console.log('This is response:', response.data.token);
      sessionStorage.setItem('token', JSON.stringify(response.data.token));
      

      const token = sessionStorage.getItem('token');
      console.log(" file: Register.js:85 ~ handleSubmit ~ token", JSON.parse(token))
      
      if (response.data.message === 'Successfully created!!!!') {
        resetForm();
      }
      
     
    } catch (error) {
      // Handle unexpected errors
      console.error('Unexpected Error:', error);
      alert('Unexpected Error: ' + error.message);
    }
  };

  return (
    <div className='container'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label htmlFor="FullName">Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="FullName"
            id="FullName"
            value={formData.FullName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor="Email">Email address</Form.Label>
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor="Password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="Password"
            id="Password"
            value={formData.Password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </Form>
    </div>
  );
};

export default Register;
