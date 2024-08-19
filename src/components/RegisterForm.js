import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const RegisterForm = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setError('');
    onRegister({ name, email, password });
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <Form.Group controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Ingresa tu Nombre" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </Form.Group>

      <Form.Group controlId="formEmail" className="mt-3">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </Form.Group>

      <Form.Group controlId="formPassword" className="mt-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Crea una Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </Form.Group>

      <Form.Group controlId="formConfirmPassword" className="mt-3">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Repite la Contraseña" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
      </Form.Group>

      {error && <p className="text-danger mt-3">{error}</p>}

      <Button variant="primary" type="submit" className="mt-4">
        Registrarse
      </Button>
    </Form>
  );
};

export default RegisterForm;
