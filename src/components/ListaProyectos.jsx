function ListaProyectos({ proyectos, eliminarProyecto }) {

    return (

        <section>

            {proyectos.map((proyecto) => (

                <div key={proyecto.id}>

                    <h2>{proyecto.titulo}</h2>

                    <p>Categoría: {proyecto.categoria}</p>

                    <p>Estado: {proyecto.estado}</p>

                    <button
                        onClick={() => eliminarProyecto(proyecto.id)}
                    >
                        Eliminar
                    </button>

                </div>

            ))}

        </section>

    )
}

export default ListaProyectos