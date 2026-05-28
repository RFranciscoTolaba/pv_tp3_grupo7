//import { useState, useEffect, useRef } from "react";

import ProyectoCard from "./ProyectoCard";

import RegistroActividad from "./RegistroActividad";

const ListaProyectos = ({
  proyectos,
  /*totalProyectos,*/
  onEliminar,
  onVerDetalle,
  fechaActualizacion,
}) => {


  return (
    <>
      {fechaActualizacion && (<RegistroActividad fecha={fechaActualizacion} />)}
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
