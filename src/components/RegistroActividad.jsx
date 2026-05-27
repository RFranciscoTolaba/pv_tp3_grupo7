const RegistroActividad = ({ fecha }) => {

    const fechaObjeto = new Date(fecha);

    const dia = String(fechaObjeto.getDate()).padStart(2, "0");

    const mes = String(
        fechaObjeto.getMonth() + 1
    ).padStart(2, "0");

    const anio = fechaObjeto.getFullYear();

    const horas = String(
        fechaObjeto.getHours()
    ).padStart(2, "0");

    const minutos = String(
        fechaObjeto.getMinutes()
    ).padStart(2, "0");

    return (

        <p className="registro-actividad">

            Última actualización de la lista:
            {" "}
            {dia}/{mes}/{anio}
            {" "}
            a las
            {" "}
            {horas}:{minutos}
            {" "}
            hs.

        </p>

    );

};

export default RegistroActividad;