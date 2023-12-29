import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoginMutation } from '../../slice/usersApi';

const initialData = {
  Email: '',
  Password: '',
};

const Login = () => {
  const [formData, setFormData] = useState(initialData);
  const [login, { data, error, isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(formData);
    console.log('data', result);

    // Check if login was successful before resetting the form
    if (!error && result && result.data) {
      setFormData(initialData); // Reset the form to initial state
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? 'Logging...' : 'Login'}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
