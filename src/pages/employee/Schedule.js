import React from 'react';
import { ListGroup, Card, Container, Row, Col } from 'react-bootstrap';

const Schedule = () => {
  // Simulación de horarios y comunicados
  const schedules = [
    { id: 1, title: 'Horario Semanal', content: 'Lunes a Viernes, 9 AM - 6 PM' },
    { id: 2, title: 'Reunión General', content: 'Miércoles 20 de agosto, 10 AM' },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h2" className="text-center">Horarios y Comunicados</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {schedules.map((schedule) => (
                  <ListGroup.Item key={schedule.id}>
                    <h5>{schedule.title}</h5>
                    <p>{schedule.content}</p>
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

export default Schedule;
