import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import './CustomerPanel.css'; // Importa los estilos personalizados

const CustomerPanel = () => {
  return (
    <Container fluid>
      <Row className="min-vh-100">
        <Col md={2} className="bg-light border-end"> {/* Reducimos a 2 columnas el ancho */}
          <div className="text-center py-3">
            <Link to="/customer">
            <img
                src="/images/logo.png"  // Ruta absoluta desde la carpeta public
                alt="Logo"
        className="logo-img"
/>
            </Link>
          </div>
          <Nav className="flex-column mt-4">
            <Nav.Item className="mb-2">
              <Nav.Link as={Link} to="account" className="btn-custom">
                Cuenta
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link as={Link} to="orders" className="btn-custom">
                Historial de Pedidos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link as={Link} to="new-order" className="btn-custom">
                Solicitud de Nuevo Pedido
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link as={Link} to="support" className="btn-custom">
                Solicitud de Soporte
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link as={Link} to="documentation" className="btn-custom">
                Documentación
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link as={Link} to="contact-sales" className="btn-custom">
                Comunicación con Ventas
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={10} className="p-4"> {/* Ajustamos a 10 columnas el contenido */}
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerPanel;
