import ProyectoCard from "./ProyectoCard";

const ListaProyectos = ({ proyectos, onEliminar,onVerDetalle }) => {

  return (

    <section className="tarjet">

      {proyectos.map((proyecto) => (

        <ProyectoCard
          key={proyecto.id}
          proyecto={proyecto}
          onEliminar={onEliminar}
          onVerDetalle={onVerDetalle}
        />

      ))}

    </section>

  );

};

export default ListaProyectos;
