import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Spinner } from 'react-bootstrap';
import { mockEmployees } from '../../mockData';

const FileTransfer = () => {
  const [file, setFile] = useState(null);
  const [recipient, setRecipient] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Por favor selecciona un archivo para enviar.');
      return;
    }
    if (!recipient) {
      alert('Por favor selecciona un destinatario.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      console.log('Archivo enviado:', { fileName: file.name, recipient });
      setLoading(false);
      setFile(null);
      setRecipient('');
    }, 1500);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h2" className="text-center">Envío de Archivos</Card.Header>
            <Card.Body>
              <Form onSubmit={handleFileUpload}>
                <Form.Group controlId="formRecipient" className="mb-3">
                  <Form.Label>Selecciona un Empleado para Enviar</Form.Label>
                  <Form.Select 
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    required
                  >
                    <option value="">Selecciona un Empleado</option>
                    {mockEmployees.map(employee => (
                      <option key={employee.id} value={employee.name}>
                        {employee.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Selecciona un archivo para enviar</Form.Label>
                  <Form.Control 
                    type="file" 
                    onChange={(e) => setFile(e.target.files[0])} 
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : 'Enviar Archivo'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FileTransfer;
