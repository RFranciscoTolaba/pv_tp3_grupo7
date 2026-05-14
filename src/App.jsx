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
import lupa from "./assets/img/lupa.png";

function App() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: "",
    categoria: "",
    estado: "Activo",
  });

  useEffect(() => {
    setProyectos(obtenerProyectos());
  }, []);

  const Agregar = () => {
    if (!nuevoProyecto.titulo) return;
    agregarProyecto(nuevoProyecto);
    setProyectos(obtenerProyectos());
    setNuevoProyecto({ titulo: "", categoria: "", estado: "Activo" });
  };

  const Eliminar = (id) => {
    eliminarProyecto(id);
    setProyectos(obtenerProyectos());
  };

  const proyectosVisibles = buscarProyectos(busqueda);
  

  return (
    <>
      <Header />

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
              value={nuevoProyecto.titulo}
              onChange={(e) =>
                setNuevoProyecto({ ...nuevoProyecto, titulo: e.target.value })
              }
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="category">Categoria:</label>
            <input
              id="category"
              name="category"
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
              id="status"
              name="status"
              onChange={(e) =>
                setNuevoProyecto({ ...nuevoProyecto, estado: e.target.value })
              }
            >
              <option value="En curso">Activo</option>
              <option value="Pendiente">Pausado</option>
              <option value="Finalizado">Compeltado</option>
              <option value="Finalizado">En revision</option>
            </select>
          </div>
          <button onClick={Agregar} className="btnSave">
            Agregar Proyecto
          </button>
        </div>
        <div>
          <ListaProyectos proyectos={proyectosVisibles} onEliminar={Eliminar} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
