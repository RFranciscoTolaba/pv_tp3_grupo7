import { useState, useEffect } from "react";

import ProyectoCard from "./ProyectoCard";

import RegistroActividad from "./RegistroActividad";

const ListaProyectos = ({ proyectos, onEliminar, onVerDetalle }) => {

  const [fechaActualizacion, setFechaActualizacion] = useState(null);

  useEffect(() => {

    setFechaActualizacion(new Date());

  }, [proyectos]);

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

      {fechaActualizacion && (

        <RegistroActividad fecha={fechaActualizacion} />

      )}

    </section>

  );

};

export default ListaProyectos;
