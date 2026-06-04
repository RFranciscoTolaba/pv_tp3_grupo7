
import ProyectoCard from "./ProyectoCard";

import RegistroActividad from "./RegistroActividad";

const ListaProyectos = ({
  proyectos,
  onEliminar,
  onVerDetalle,
  fechaActualizacion,
}) => {


  return (
    <>
      {fechaActualizacion && (<RegistroActividad fecha={fechaActualizacion} />)}
      <section className="list-projects">
        {proyectos.map((proyecto) => (
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
            onEliminar={onEliminar}
            onVerDetalle={onVerDetalle}
          />
        ))}
        
      </section>
    </>
  );
};

export default ListaProyectos;
