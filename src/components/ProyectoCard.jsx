const ProyectoCard = ({ proyecto, onEliminar }) => {

    const {
        titulo,
        categoria,
        estado,
        id
    } = proyecto;

    return (

        <article className="Cont-Proy">

            <h2>{titulo}</h2>

            <p>
                <b>Categoría:</b> {categoria}
            </p>

            <p>
                <b>Estado:</b> {estado}
            </p>

            <div className="ButtonsAction">

                <button
                    className="btn-delete"
                    onClick={() => onEliminar(id)}
                >
                    Eliminar
                </button>

                <button className="btn-detail">
                    Ver Detalle
                </button>

            </div>

        </article>

    );

};

export default ProyectoCard;