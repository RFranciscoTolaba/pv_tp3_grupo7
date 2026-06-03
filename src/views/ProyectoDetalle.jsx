import { useParams } from "react-router-dom";

import DetalleProyecto from "../components/DetalleProyecto";

import { obtenerProyectoPorId } from "../services/proyectoService";

const ProyectoDetalle = () => {

  const { id } = useParams();

  const proyecto = obtenerProyectoPorId(id);

  if (!proyecto) {
    return <h2>Proyecto no encontrado</h2>;
  }

  return (
    <DetalleProyecto
      proyecto={proyecto}
    />
  );
};

export default ProyectoDetalle;