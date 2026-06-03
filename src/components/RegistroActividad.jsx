import { Alert } from "react-bootstrap";

const RegistroActividad = ({ fecha }) => {

  const fechaObjeto = new Date(fecha);

  const dia = String(fechaObjeto.getDate()).padStart(2, "0");
  const mes = String(fechaObjeto.getMonth() + 1).padStart(2, "0");
  const anio = fechaObjeto.getFullYear();
  const horas = String(fechaObjeto.getHours()).padStart(2, "0");
  const minutos = String(fechaObjeto.getMinutes()).padStart(2, "0");

  return (
    <Alert
      variant="success"
      className="mx-3 mt-3 mb-0"
    >
      <strong>Última actualización de la lista:</strong>{" "}
      {dia}/{mes}/{anio} a las {horas}:{minutos} hs.
    </Alert>
  );

};

export default RegistroActividad;