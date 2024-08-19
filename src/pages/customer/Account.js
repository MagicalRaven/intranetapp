import React, { useState } from 'react';
import { Form, Button, Alert, Card, Container, Row, Col } from 'react-bootstrap';

const Account = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('cliente@example.com');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setError('El nombre no puede estar vacío.');
      return;
    }

    if (password && password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);

    setTimeout(() => {
      console.log('Datos actualizados:', { name, email, password });
      setSuccess(true);
      setLoading(false);
      setPassword('');
    }, 1000);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h2" className="text-center">Mi Cuenta</Card.Header>
            <Card.Body>
              {success && <Alert variant="success">Los datos se han actualizado correctamente.</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSave}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    disabled 
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Cambiar contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading} className="w-100">
                  {loading ? 'Guardando...' : 'Guardar Cambios'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
