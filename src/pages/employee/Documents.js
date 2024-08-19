import React from 'react';
import { ListGroup, Card, Container, Row, Col } from 'react-bootstrap';
import { mockDocuments } from '../../mockData';

const Documents = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h2" className="text-center">Biblioteca de Documentos</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {mockDocuments.map((doc) => (
                  <ListGroup.Item key={doc.id}>
                    <a href={doc.url} target="_blank" rel="noopener noreferrer">
                      {doc.name}
                    </a>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Documents;
