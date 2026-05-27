import { useState } from "react";

function FormularioProyecto({ onAgregarProyecto }) {

  const [nuevoProyecto, setNuevoProyecto] = useState({

    titulo: "",
    categoria: "",
    estado: "Activo",
    descripcion: "",
    recursos: {
      pdf: "",
      drive: "",
      github: "",
    },
    equipo: "",

  });

  const Agregar = () => {

    if (!nuevoProyecto.titulo) return;

    const equipoArray = nuevoProyecto.equipo
      .split(",")
      .map((item) => {

        const [nombre, rol] =
          item.split(":").map((s) => s.trim());

        return {
          nombre: nombre || item.trim(),
          rol: rol || "Integrante",
        };

      });

    const proyectoFinal = {

      ...nuevoProyecto,
      equipo: equipoArray,

    };

    onAgregarProyecto(proyectoFinal);

    setNuevoProyecto({

      titulo: "",
      categoria: "",
      estado: "Activo",
      descripcion: "",
      recursos: {
        pdf: "",
        drive: "",
        github: "",
      },
      equipo: "",

    });

  };

  return (

    <div className="registrationDiv">

      <h2>Cargar Nuevo Proyecto</h2>

      <div className="inputGroup">

        <label htmlFor="title">Título:</label>

        <input
          id="title"
          type="text"
          placeholder="Título"
          value={nuevoProyecto.titulo}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              titulo: e.target.value,
            })
          }
        />

      </div>

      <div className="inputGroup">

        <label htmlFor="category">Categoría:</label>

        <input
          id="category"
          type="text"
          placeholder="Categoría"
          value={nuevoProyecto.categoria}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              categoria: e.target.value,
            })
          }
        />

      </div>

      <div className="inputGroup">

        <label htmlFor="status">Estado:</label>

        <select
          value={nuevoProyecto.estado}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              estado: e.target.value,
            })
          }
        >

          <option value="Activo">Activo</option>
          <option value="Pausado">Pausado</option>
          <option value="Completado">Completado</option>
          <option value="En revisión">En revisión</option>

        </select>

      </div>

      <div className="inputGroup">

        <label>Descripción:</label>

        <textarea
          value={nuevoProyecto.descripcion}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              descripcion: e.target.value,
            })
          }
        />

      </div>

      <div className="inputGroup">

        <label>PDF:</label>

        <input
          type="url"
          value={nuevoProyecto.recursos.pdf}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              recursos: {
                ...nuevoProyecto.recursos,
                pdf: e.target.value,
              },
            })
          }
        />

      </div>

      <div className="inputGroup">

        <label>Drive:</label>

        <input
          type="url"
          value={nuevoProyecto.recursos.drive}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              recursos: {
                ...nuevoProyecto.recursos,
                drive: e.target.value,
              },
            })
          }
        />

      </div>

      <div className="inputGroup">

        <label>GitHub:</label>

        <input
          type="url"
          value={nuevoProyecto.recursos.github}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              recursos: {
                ...nuevoProyecto.recursos,
                github: e.target.value,
              },
            })
          }
        />

      </div>

      <div className="inputGroup">

        <label>Equipo:</label>

        <input
          type="text"
          placeholder="Juan: Frontend, Ana: Backend"
          value={nuevoProyecto.equipo}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              equipo: e.target.value,
            })
          }
        />

      </div>

      <button
        onClick={Agregar}
        className="btnSave"
      >
        Agregar Proyecto
      </button>

    </div>

  );

}

export default FormularioProyecto;