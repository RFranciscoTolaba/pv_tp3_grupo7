import { Button, Card, ListGroup, Stack } from "react-bootstrap";

const DetalleProyecto = ({ proyecto, onVolver }) => {

  const { titulo, descripcion, recursos, equipo } = proyecto;

  return (

    <Card
      style={{
        backgroundColor: "var(--tarjet-primary-color)",
        border: "5px solid rgb(165, 205, 19)",
        borderRadius: "15px",
        padding: "10px",
        margin: "30px auto",
        maxWidth: "800px",
      }}
    >

      <Card.Body>

        <Button
          variant="dark"
          className="mb-3"
          onClick={onVolver}
        >
          ← Volver al listado
        </Button>

        <Card.Title as="h2" style={{ textDecoration: "underline" }}>
          {titulo}
        </Card.Title>

        <Card.Subtitle as="h3" className="mt-4 mb-2">
          Descripción del Proyecto
        </Card.Subtitle>

        {descripcion.split("\n").map((parrafo, index) => (
          <p key={index}>{parrafo}</p>
        ))}

        <Card.Subtitle as="h3" className="mt-4 mb-3">
          Recursos
        </Card.Subtitle>

        <Stack direction="horizontal" gap={2} className="flex-wrap">

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

        <Card.Subtitle as="h3" className="mt-4 mb-2">
          Equipo
        </Card.Subtitle>

        <ListGroup variant="flush">

          {equipo.map((integrante, index) => (

            <ListGroup.Item
              key={index}
              style={{ backgroundColor: "transparent", borderColor: "rgba(0,0,0,0.15)" }}
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
