import { Container, Row, Col, Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="p-4">
      <h2 className="mb-4">Panel de Control</h2>
      <Row className="g-4">
        <Col xs={12} sm={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">Total de Proyectos</Card.Subtitle>
              <Card.Title className="display-4 text-primary">15</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">Proyectos en Curso</Card.Subtitle>
              <Card.Title className="display-4 text-primary">4</Card.Title>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};
export default Dashboard;
