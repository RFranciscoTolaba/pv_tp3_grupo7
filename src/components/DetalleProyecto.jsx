import { Button, Card, ListGroup, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const DetalleProyecto = ({ proyecto }) => {

  const { titulo, descripcion, recursos, equipo } = proyecto;

  return (

    <Card className="detail-prj">

      <Card.Body>

        <Link
          to="/proyectos"
        >
          <Button
            variant="secondary"
            className="mb-3"
          >
            ← Volver al listado
          </Button>
        </Link>

        <Card.Title
          as="h2"
        >
          {titulo}
        </Card.Title>

        <Card.Subtitle
          as="h3"
          className="mt-4 mb-2"
        >
          Descripción del Proyecto
        </Card.Subtitle>

        {descripcion.split("\n").map((parrafo, index) => (
          <p key={index}>{parrafo}</p>
        ))}

        <Card.Subtitle
          as="h3"
          className="mt-4 mb-3"
        >
          Recursos
        </Card.Subtitle>

        <Stack
          direction="horizontal"
          gap={2}
          className="flex-wrap"
        >

          <Button
            variant="dark"
            href={recursos.pdf}
            target="_blank"
            rel="noopener noreferrer"
            as="a"
          >
            Documento PDF
          </Button>

          <Button
            variant="dark"
            href={recursos.drive}
            target="_blank"
            rel="noopener noreferrer"
            as="a"
          >
            Carpeta de Drive
          </Button>

          <Button
            variant="dark"
            href={recursos.github}
            target="_blank"
            rel="noopener noreferrer"
            as="a"
          >
            Repositorio de GitHub
          </Button>

        </Stack>

        <Card.Subtitle
          as="h3"
          className="mt-4 mb-2"
        >
          Equipo
        </Card.Subtitle>

        <ListGroup variant="flush">

          {equipo.map((integrante, index) => (

            <ListGroup.Item
              key={index}
              className="team-detail-prj"
            >
              <strong>{integrante.nombre}</strong> — {integrante.rol}
            </ListGroup.Item>

          ))}

        </ListGroup>

      </Card.Body>

    </Card>

  );

};

export default DetalleProyecto;
