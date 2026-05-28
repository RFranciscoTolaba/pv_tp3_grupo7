import { useState, useEffect, useRef } from "react";

import ProyectoCard from "./ProyectoCard";

import RegistroActividad from "./RegistroActividad";

const ListaProyectos = ({
  proyectos,
  totalProyectos,
  onEliminar,
  onVerDetalle,
}) => {
  const [fechaActualizacion, setFechaActualizacion] = useState(null);

  const estaMontado = useRef(false);

  useEffect(() => {
    if (!estaMontado.current) {
      estaMontado.current = true;
      return;
    }

    setFechaActualizacion(new Date());
  }, [totalProyectos]);

  return (
    <>
      {fechaActualizacion && <RegistroActividad fecha={fechaActualizacion} />}
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
    </>
  );
};

export default ListaProyectos;
