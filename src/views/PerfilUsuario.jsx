import { Container, Card, ListGroup } from "react-bootstrap";
import useAutorizaciones from "../hook/useAutorizaciones";

const PerfilUsuario = () => {

  const { usuarioActivo } = useAutorizaciones();

  const iniciales = usuarioActivo?.nombre
    ?.split(" ")
    .map((palabra) => palabra[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <Container className="p-4 d-flex justify-content-center">
      <Card className="Perfil-Card">

        <Card.Body className="d-flex flex-column align-items-center mb-3">

          <div
            className="logo-perfil rounded-circle bg-primary text-white d-flex justify-content-center align-items-center mb-3"
          >
            {iniciales}
          </div>

          <Card.Title as="h4">
            Perfil de Usuario
          </Card.Title>

        </Card.Body>

        <ListGroup className="list-group-flush">

          <ListGroup.Item>
            <strong>Nombre Completo</strong>
            <br />
            <span className="text-muted">
              {usuarioActivo?.nombre}
            </span>
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>Rol</strong>
            <br />
            <span className="text-muted">
              {usuarioActivo?.rol}
            </span>
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>Universidad</strong>
            <br />
            <span className="text-muted">
              Universidad Nacional de Jujuy
            </span>
          </ListGroup.Item>

        </ListGroup>

      </Card>
    </Container>
  );
};

export default PerfilUsuario;