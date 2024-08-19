import React from 'react';
import { ListGroup, Card, Container, Row, Col } from 'react-bootstrap';

const Calendar = () => {
  const events = [
    { id: 1, title: 'Reunión de equipo', date: '2024-08-20', description: 'Reunión para discutir el progreso del proyecto.' },
    { id: 2, title: 'Capacitación interna', date: '2024-08-25', description: 'Capacitación sobre nuevas herramientas.' },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h2" className="text-center">Calendario de Eventos</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {events.map((event) => (
                  <ListGroup.Item key={event.id}>
                    <h5>{event.title}</h5>
                    <p><strong>Fecha:</strong> {event.date}</p>
                    <p>{event.description}</p>
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

export default Calendar;
