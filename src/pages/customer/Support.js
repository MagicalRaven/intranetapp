import React from 'react';
import { Table, Container, Row, Col, Card } from 'react-bootstrap';
import { mockSupportTickets } from '../../mockData';

const Support = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card>
            <Card.Header as="h2" className="text-center">Soporte Técnico</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID Ticket</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {mockSupportTickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <td>{ticket.id}</td>
                      <td>{ticket.issue}</td>
                      <td>{ticket.status}</td>
                      <td>{ticket.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Support;
