import { Badge } from "react-bootstrap";

const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
  const { titulo, categoria, estado, id } = proyecto;

  const estadoVariant = {
    Activo: "success",
    Pausado: "warning",
    Completado: "primary",
    "En revisión": "info",
  };

  return (
    <article className="Cont-Proy">
      <h2>{titulo}</h2>

      <p>
        <b>Categoría:</b> {categoria}
      </p>

      <p>
        <b>Estado:</b>{" "}
        <Badge bg={estadoVariant[estado] ?? "secondary"}>
          {estado}
        </Badge>
      </p>

      <div className="buttonsAction">
        <button
          className="btn"
          onClick={() => onVerDetalle(proyecto)}
        >
          Ver Detalle
        </button>

        <button
          className="btn-delete"
          onClick={() => onEliminar(id)}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
};

export default ProyectoCard;