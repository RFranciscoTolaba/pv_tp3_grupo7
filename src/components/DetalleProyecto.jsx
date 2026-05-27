const DetalleProyecto = ({ proyecto,onVolver }) => {
/*   if (!proyecto) {
    return <p className="no-project">Debe seleccionar un proyecto para ver su correspondiente detalle</p>;
  } */

  const { titulo, descripcion, recursos, equipo } = proyecto;

  return (
    <section className="detalle-proyecto">
      <button className="_button" onClick={onVolver}>
        Volver al listado
      </button>
      <h2>{titulo}</h2>
      

      <article className="detalle-seccion">
        <h3>Descripcion del Proyecto</h3>
        {descripcion.split("\n").map((parrafo, index) => (
          <p key={index}>{parrafo}</p>
        ))}
      </article>

      <article className="detalle-seccion">
        <h3>Recursos </h3>
        <div className="recursos-links">
          <a href={recursos.pdf} target="_blank" rel="noopener noreferrer" className="_button">
             Documento PDF
          </a>
          <a href={recursos.drive} target="_blank" rel="noopener noreferrer" className="_button">
             Carpeta de Drive
          </a>
          <a href={recursos.github} target="_blank" rel="noopener noreferrer" className="_button">
             Repositorio de GitHub
          </a>
        </div>
      </article>

      <article className="detalle-seccion">
        <h3>Equipo </h3>
        <ul className="equipo-lista">
          {equipo.map((integrante, index) => (
            <li key={index}>
              <strong>{integrante.nombre}</strong> — {integrante.rol}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default DetalleProyecto;