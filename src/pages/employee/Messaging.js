import React, { useState } from 'react';
import { Form, Button, ListGroup, Container, Row, Col, Card } from 'react-bootstrap';

const Messaging = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const newMessage = { id: messages.length + 1, text: message, sender: 'Empleado 1' };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h2" className="text-center">Mensajería Interna</Card.Header>
            <Card.Body>
              <ListGroup className="mb-3">
                {messages.map((msg) => (
                  <ListGroup.Item key={msg.id}>
                    <strong>{msg.sender}:</strong> {msg.text}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Form onSubmit={handleSendMessage}>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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

export default Messaging;
