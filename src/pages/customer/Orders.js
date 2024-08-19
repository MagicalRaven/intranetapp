import React from 'react';
import { Table, Container, Row, Col, Card } from 'react-bootstrap';
import { mockOrders } from '../../mockData';

const Orders = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card>
            <Card.Header as="h2" className="text-center">Historial de Pedidos</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID Pedido</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Producto</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {mockOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td>{order.status}</td>
                      <td>{order.product}</td>
                      <td>{order.total}</td>
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

export default Orders;
