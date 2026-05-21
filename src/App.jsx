import { useState, useEffect } from "react";
import "./css/style.css";
import {
  obtenerProyectos,
  agregarProyecto,
  eliminarProyecto,
  buscarProyectos,
} from "./services/proyectoService";
import ListaProyectos from "./components/ListaProyectos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetalleProyecto from "./components/DetalleProyecto";

function App() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [proyectoSeleccionado,setProyectoSeleccionado] = useState(null);
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

  useEffect(() => {
    setProyectos(obtenerProyectos());
  }, []);

  const Agregar = () => {
    if (!nuevoProyecto.titulo) return;

    const equipoArray = nuevoProyecto.equipo
      .split(",")
      .map((item) => {
        const [nombre, rol] = item.split(":").map((s) => s.trim());
        return { nombre: nombre || item.trim(), rol: rol || "Integrante" };
      });

    agregarProyecto({ ...nuevoProyecto, equipo: equipoArray });
    setProyectos(obtenerProyectos());
    setNuevoProyecto({
      titulo: "",
      categoria: "",
      estado: "Activo",
      descripcion: "",
      recursos: { pdf: "", drive: "", github: "" },
      equipo: "",
    });
  };

  const Eliminar = (id) => {
    eliminarProyecto(id);
    setProyectos(obtenerProyectos());
  };

  const proyectosVisibles = buscarProyectos(busqueda);

  return (
    <>
      <Header />
      {proyectoSeleccionado ? (
        <div className="detalleContainer">
          <DetalleProyecto
            proyecto={proyectoSeleccionado}
            onVolver={() => setProyectoSeleccionado(null)}
          />
        </div>
      ) : (
        <>

          <div className="searchDiv">
            <input
              name="inputSearch"
              type="text"
              placeholder="Buscar proyecto"
              className="searchInput"
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div>
            <div className="registrationDiv">
              <h2>Cargar Nuevo Proyecto</h2>

              <div className="inputGroup">
                <label htmlFor="title">Título:</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Título"
                  required
                  value={nuevoProyecto.titulo}
                  onChange={(e) =>
                    setNuevoProyecto({ ...nuevoProyecto, titulo: e.target.value })
                  }
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="category">Categoría:</label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  placeholder="Categoría"
                  required
                  value={nuevoProyecto.categoria}
                  onChange={(e) =>
                    setNuevoProyecto({ ...nuevoProyecto, categoria: e.target.value })
                  }
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="status">Estado:</label>
                <select
                  id="status"
                  name="status"
                  required
                  value={nuevoProyecto.estado}
                  onChange={(e) =>
                    setNuevoProyecto({ ...nuevoProyecto, estado: e.target.value })
                  }
                >
                  <option value="Activo">Activo</option>
                  <option value="Pausado">Pausado</option>
                  <option value="Completado">Completado</option>
                  <option value="En revisión">En revisión</option>
                </select>
              </div>

              <div className="inputGroup">
                <label htmlFor="descripcion">Descripción:</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  required
                  placeholder="Descripción del proyecto (mínimo dos párrafos)"
                  value={nuevoProyecto.descripcion}
                  onChange={(e) =>
                    setNuevoProyecto({ ...nuevoProyecto, descripcion: e.target.value })
                  }
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="recursoPdf">Recurso PDF:</label>
                <input
                  id="recursoPdf"
                  name="recursoPdf"
                  type="url"
                  required
                  placeholder="URL del PDF"
                  value={nuevoProyecto.recursos.pdf}
                  onChange={(e) =>
                    setNuevoProyecto({
                      ...nuevoProyecto,
                      recursos: { ...nuevoProyecto.recursos, pdf: e.target.value },
                    })
                  }
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="recursoDrive">Recurso Drive:</label>
                <input
                  id="recursoDrive"
                  name="recursoDrive"
                  type="url"
                  required
                  placeholder="URL de Drive"
                  value={nuevoProyecto.recursos.drive}
                  onChange={(e) =>
                    setNuevoProyecto({
                      ...nuevoProyecto,
                      recursos: { ...nuevoProyecto.recursos, drive: e.target.value },
                    })
                  }
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="recursoGithub">Recurso GitHub:</label>
                <input
                  id="recursoGithub"
                  name="recursoGithub"
                  type="url"
                  required
                  placeholder="URL de GitHub"
                  value={nuevoProyecto.recursos.github}
                  onChange={(e) =>
                    setNuevoProyecto({
                      ...nuevoProyecto,
                      recursos: { ...nuevoProyecto.recursos, github: e.target.value },
                    })
                  }
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="equipo">Equipo:</label>
                <input
                  id="equipo"
                  name="equipo"
                  type="text"
                  required
                  placeholder="Ej: Juan Pérez: Frontend, Ana García: Backend"
                  value={nuevoProyecto.equipo}
                  onChange={(e) =>
                    setNuevoProyecto({ ...nuevoProyecto, equipo: e.target.value })
                  }
                  
                />
              </div>

              <button onClick={Agregar} className="btnSave">
                Agregar Proyecto
              </button>
            </div>

            <div>
              <ListaProyectos 
                proyectos={proyectosVisibles} 
              onEliminar={Eliminar} 
              onVerDetalle={setProyectoSeleccionado}
              />
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

      

    

export default App;