import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './RegisterPage.css';  // Importa el archivo de estilos

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = (userDetails) => {
    console.log('User registered:', userDetails);
    navigate('/privacy-notice');
  };

  return (
    <div className="register-page d-flex justify-content-center align-items-center vh-100">
      <Button 
        variant="link" 
        className="position-absolute top-0 end-0 mt-3 me-3" 
        onClick={() => navigate('/')}
      >
        ¿Ya tienes una cuenta? Inicia Sesión
      </Button>
      <div className="form-container">
        <h1 className="mb-4">Registro de Cliente</h1>
        <RegisterForm onRegister={handleRegister} />
      </div>
    </div>
  );
};

export default RegisterPage;
