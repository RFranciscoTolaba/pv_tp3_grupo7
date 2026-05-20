import ProyectoCard from "./ProyectoCard";

const ListaProyectos = ({ proyectos, onEliminar }) => {

  return (

    <section className="tarjet">

      {proyectos.map((proyecto) => (

        <ProyectoCard
          key={proyecto.id}
          proyecto={proyecto}
          onEliminar={onEliminar}
        />

      ))}

    </section>

  );

};

export default ListaProyectos;
