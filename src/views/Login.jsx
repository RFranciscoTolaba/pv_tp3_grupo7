import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import autorizacionesService from "../services/autorizacionesService";
import useAutorizaciones from "../hook/useAutorizaciones";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { guardarSesion } = useAutorizaciones();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const datosUsuario = await autorizacionesService.login(
        user,
        password
      );

      guardarSesion(datosUsuario);

      alert(
        `Ingreso exitoso. Bienvenido, ${datosUsuario.nombre}`
      );

    } catch (error) {

      alert(
        "Error de acceso: " + error.message
      );

    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card
        className="shadow p-4"
        style={{
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Card.Body>

          <Card.Title
            as="h3"
            className="text-center mb-4"
          >
            Iniciar Sesión
          </Card.Title>

          <Form onSubmit={handleSubmit}>

            <Form.Group
              className="mb-3"
              controlId="formUsuario"
            >
              <Form.Label>
                Usuario
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="Ingrese nombre de usuario"
                value={user}
                onChange={(e) =>
                  setUser(e.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-4"
              controlId="formPassword"
            >
              <Form.Label>
                Contraseña
              </Form.Label>

              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
            >
              Iniciar Sesión
            </Button>

          </Form>

        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;