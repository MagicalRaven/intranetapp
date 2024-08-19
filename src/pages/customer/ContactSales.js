import React, { useState } from 'react';
import { Form, Button, Alert, Card, Container, Row, Col } from 'react-bootstrap';

const ContactSales = () => {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleContactSales = (e) => {
    e.preventDefault();

    if (message.trim() === '') {
      setError('Por favor, ingresa tu mensaje.');
      return;
    }

    setTimeout(() => {
      console.log('Mensaje enviado a ventas:', { message });
      setSuccess(true);
      setError('');
      setMessage('');
    }, 1000);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h2" className="text-center">Comunicación con Ventas</Card.Header>
            <Card.Body>
              {success && <Alert variant="success">¡Tu mensaje ha sido enviado con éxito!</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleContactSales}>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Escribe tu mensaje aquí"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Enviar Mensaje
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSales;
