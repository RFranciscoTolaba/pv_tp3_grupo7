import { Card, Badge, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const estadoVariant = {
  "Activo": "success",
  "Pausado": "warning",
  "Completado": "primary",
  "En revisión": "info",
};

const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {

  const { titulo, categoria, estado, id } = proyecto;

  const estadoVariant = {
    Activo: "success",
    Pausado: "warning",
    Completado: "primary",
    "En revisión": "info",
  };

  return (

    <Card className="card-project">

      <Card.Body className="text-center">

        <Card.Title className="card-project-title">
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

          <Link
            to={`/proyectos/${id}`}
          >
            <Button
              variant="secondary"
              size="sm"
              className="btn-detail"
            >
              Ver Detalle
            </Button>
          </Link>

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
