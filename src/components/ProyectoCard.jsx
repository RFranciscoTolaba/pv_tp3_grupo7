import { Card, Badge, Button, Stack } from "react-bootstrap";

const estadoVariant = {
  "Activo": "success",
  "Pausado": "warning",
  "Completado": "primary",
  "En revisión": "info",
};

const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {

  const { titulo, categoria, estado, id } = proyecto;

  return (

    <Card
      style={{
        width: "320px",
        backgroundColor: "var(--tarjet-primary-color)",
        border: "4px solid rgb(165, 205, 19)",
        borderRadius: "var(--tarjet-border-radius)",
        boxShadow: "var(--tarjet-shadow)",
        color: "var(--secondary-text-color)"
      }}
    >

      <Card.Body className="text-center">

        <Card.Title style={{ textDecoration: "underline", fontSize: "25px" }}>
          {titulo}
        </Card.Title>

        <Card.Text>
          <strong>Categoría:</strong> {categoria}
        </Card.Text>

        <Card.Text>
          <strong>Estado:</strong>{" "}
          <Badge bg={estadoVariant[estado] ?? "secondary"}>{estado}</Badge>
        </Card.Text>

        <Stack direction="horizontal" gap={2} className="justify-content-between mt-3">

          <Button
            variant="secondary"
            size="sm"
            onClick={() => onVerDetalle(proyecto)}
            className="btnGeneral"
          >
            Ver Detalle
          </Button>

          <Button
            
            variant="danger"
            size="sm"
            onClick={() => onEliminar(id)}
            className="btn-delete"
          >
            Eliminar
          </Button>

        </Stack>

      </Card.Body>

    </Card>

  );

};

export default ProyectoCard;

