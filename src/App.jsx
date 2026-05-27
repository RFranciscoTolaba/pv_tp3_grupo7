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
import FormularioProyecto from "./components/FormularioProyecto";

function App() {

  const [proyectos, setProyectos] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  const [proyectoSeleccionado, setProyectoSeleccionado] =
    useState(null);

  useEffect(() => {

    setProyectos(obtenerProyectos());

  }, []);

  const agregarNuevoProyecto = (nuevoProyecto) => {

    agregarProyecto(nuevoProyecto);

    setProyectos(obtenerProyectos());

  };

  const Eliminar = (id) => {

    eliminarProyecto(id);

    setProyectos(obtenerProyectos());

  };

  const proyectosVisibles =
    buscarProyectos(busqueda);

  return (

    <>

      <Header />

      {proyectoSeleccionado ? (

        <div className="detalleContainer">

          <DetalleProyecto
            proyecto={proyectoSeleccionado}
            onVolver={() =>
              setProyectoSeleccionado(null)
            }
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
              onChange={(e) =>
                setBusqueda(e.target.value)
              }
            />

          </div>

          <FormularioProyecto
            onAgregarProyecto={agregarNuevoProyecto}
          />

          <ListaProyectos
            proyectos={proyectosVisibles}
            onEliminar={Eliminar}
            onVerDetalle={setProyectoSeleccionado}
          />

        </>

      )}

      <Footer />

    </>

  );

}

export default App;