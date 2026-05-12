function ListaProyectos({ proyectos }) {

    return (

        <section>

            {proyectos.map((proyecto) => (

                <div key={proyecto.id} className="card">

                    <h2>{proyecto.titulo}</h2>

                    <p>Categoría: {proyecto.categoria}</p>

                    <p>Estado: {proyecto.estado}</p>

                </div>

            ))}

        </section>

    )
}

export default ListaProyectos