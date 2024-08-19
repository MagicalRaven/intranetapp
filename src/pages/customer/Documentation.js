import React from 'react';
import { ListGroup, Card, Container, Row, Col } from 'react-bootstrap';

const Documentation = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h2" className="text-center">Documentación</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <a href="/docs/manual-usuario.pdf" target="_blank" rel="noopener noreferrer">
                    Manual de Usuario
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="/docs/facturas.pdf" target="_blank" rel="noopener noreferrer">
                    Facturas
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="/docs/politicas.pdf" target="_blank" rel="noopener noreferrer">
                    Actualizaciones de Políticas
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Documentation;
