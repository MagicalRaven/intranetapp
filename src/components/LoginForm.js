import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
