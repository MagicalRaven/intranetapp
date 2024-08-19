import React from 'react';
import { Table, Card, Container, Row, Col } from 'react-bootstrap';

const Tasks = () => {
  const tasks = [
    { id: 1, description: 'Revisar reportes mensuales', status: 'Pendiente', dueDate: '2024-08-20' },
    { id: 2, description: 'Actualizar documentación interna', status: 'En progreso', dueDate: '2024-08-22' },
    { id: 3, description: 'Realizar backup de sistema', status: 'Completada', dueDate: '2024-08-18' },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card>
            <Card.Header as="h2" className="text-center">Tareas Asignadas</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID Tarea</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                    <th>Fecha de Entrega</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.id}</td>
                      <td>{task.description}</td>
                      <td>{task.status}</td>
                      <td>{task.dueDate}</td>
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

export default Tasks;
