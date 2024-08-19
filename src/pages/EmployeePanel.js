import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { getUserRole, getPermissions } from '../services/roleService';
import './EmployeePanel.css';

const EmployeePanel = () => {
  const userId = 1; // Simulación de obtener el ID del usuario autenticado
  const role = getUserRole(userId);
  const permissions = getPermissions(role);

  return (
    <Container fluid>
      <Row className="min-vh-100">
        <Col md={2} className="bg-light border-end">
          <div className="text-center py-3">
            <Link to="/employee">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="logo-img"
              />
            </Link>
          </div>
          <Nav className="flex-column mt-4">
            {permissions.includes('tasks') && (
              <Nav.Item className="mb-2">
                <Nav.Link as={Link} to="tasks" className="btn-custom">
                  Tareas Asignadas
                </Nav.Link>
              </Nav.Item>
            )}
            {permissions.includes('schedule') && (
              <Nav.Item className="mb-2">
                <Nav.Link as={Link} to="schedule" className="btn-custom">
                  Horarios y Comunicados
                </Nav.Link>
              </Nav.Item>
            )}
            {permissions.includes('file-transfer') && (
              <Nav.Item className="mb-2">
                <Nav.Link as={Link} to="file-transfer" className="btn-custom">
                  Envío de Archivos
                </Nav.Link>
              </Nav.Item>
            )}
            {permissions.includes('task-manager') && (
              <Nav.Item className="mb-2">
                <Nav.Link as={Link} to="task-manager" className="btn-custom">
                  Gestor de Tareas
                </Nav.Link>
              </Nav.Item>
            )}
            {permissions.includes('documents') && (
              <Nav.Item className="mb-2">
                <Nav.Link as={Link} to="documents" className="btn-custom">
                  Biblioteca de Documentos
                </Nav.Link>
              </Nav.Item>
            )}
            {permissions.includes('calendar') && (
              <Nav.Item className="mb-2">
                <Nav.Link as={Link} to="calendar" className="btn-custom">
                  Calendario de Eventos
                </Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Col>
        <Col md={10} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeePanel;
