import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { Button } from 'react-bootstrap';
import './LoginPage.css';  // Asegúrate de que la ruta sea correcta

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const defaultUser = {
    email: 'sistemas@ingraphos.com.mx',
    password: 'proyecto00',
  };

  const handleLogin = (credentials) => {
    if (
      credentials.email === defaultUser.email &&
      credentials.password === defaultUser.password
    ) {
      navigate('/customer');
    } else {
      setError('Credenciales incorrectas, por favor intente de nuevo.');
    }
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center vh-100">
      <Button
        variant="link"
        className="position-absolute top-0 end-0 mt-3 me-3"
        onClick={() => navigate('/register')}
      >
        ¿No tienes una cuenta? Regístrate
      </Button>
      <div className="form-container">
        <h1 className="mb-4">Iniciar Sesión</h1>
        <LoginForm onLogin={handleLogin} />
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
