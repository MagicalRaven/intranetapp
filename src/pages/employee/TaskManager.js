import React, { useState } from 'react';
import { Table, Button, Card, Container, Row, Col, Form } from 'react-bootstrap';

const TaskManager = () => {
  // Simulación de tareas
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Revisar reportes mensuales', status: 'Pendiente' },
    { id: 2, description: 'Actualizar documentación interna', status: 'En progreso' },
  ]);

  const handleUpdateStatus = (id, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card>
            <Card.Header as="h2" className="text-center">Gestor de Tareas</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID Tarea</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.id}</td>
                      <td>{task.description}</td>
                      <td>{task.status}</td>
                      <td>
                        <Form.Select
                          value={task.status}
                          onChange={(e) => handleUpdateStatus(task.id, e.target.value)}
                        >
                          <option value="Pendiente">Pendiente</option>
                          <option value="En progreso">En progreso</option>
                          <option value="Completada">Completada</option>
                        </Form.Select>
                      </td>
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

export default TaskManager;
