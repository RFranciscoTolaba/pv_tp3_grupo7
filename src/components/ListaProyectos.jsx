<<<<<<< HEAD
const ListaProyectos = ({ proyectos, onEliminar }) => {
  return (
    <section className="tarjet">
      {proyectos.map((proyecto) => (
        <article key={proyecto.id} className="Cont-Proy">
          <h2>{proyecto.titulo}</h2>
          <p>Categoría: {proyecto.categoria}</p>
          <p>Estado: {proyecto.estado}</p>
          <div className="ButtonsAction">
            <button className="btn-delete" onClick={() => onEliminar(proyecto.id)}>
              Eliminar
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ListaProyectos;
=======
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
>>>>>>> origin/rama-fran
