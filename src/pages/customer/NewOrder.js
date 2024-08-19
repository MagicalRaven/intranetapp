import React, { useState } from 'react';
import { Form, Button, Alert, Card, Container, Row, Col, Spinner } from 'react-bootstrap';

const NewOrder = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleOrder = (e) => {
    e.preventDefault();

    if (product.trim() === '' || address.trim() === '') {
      setError('Todos los campos son obligatorios.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log('Pedido realizado:', { product, quantity, address });
      setSuccess(true);
      setError('');
      setProduct('');
      setQuantity(1);
      setAddress('');
      setLoading(false);
    }, 1500);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h2" className="text-center">Solicitud de Nuevo Pedido</Card.Header>
            <Card.Body>
              {success && <Alert variant="success">¡Tu pedido ha sido realizado con éxito!</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleOrder}>
                <Form.Group controlId="formProduct" className="mb-3">
                  <Form.Label>Producto</Form.Label>
                  <Form.Control 
                    type="text" 
                    value={product} 
                    onChange={(e) => setProduct(e.target.value)} 
                    placeholder="Nombre del producto"
                    required
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formQuantity" className="mb-3">
                      <Form.Label>Cantidad</Form.Label>
                      <Form.Control 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                        min="1"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formAddress" className="mb-3">
                      <Form.Label>Dirección de Envío</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        placeholder="Dirección completa"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : 'Realizar Pedido'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewOrder;
