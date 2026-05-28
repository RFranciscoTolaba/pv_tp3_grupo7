import { useState, useEffect,useRef } from "react";
import { Container, InputGroup, Form, Button } from "react-bootstrap";

import "./css/style.css";

import {
  obtenerProyectosDisp,
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

  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  //const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [fechaActualizacion, setFechaActualizacion] = useState(null);
  const estaMontado = useRef(false)

  useEffect(() => {
    setProyectos(obtenerProyectosDisp());
  }, []);

  useEffect(() => {
    if (!estaMontado.current) {
      estaMontado.current = true;
      return;
    }
    setFechaActualizacion(new Date());
  }, [proyectos]);

  const agregarNuevoProyecto = (nuevoProyecto) => {

    agregarProyecto(nuevoProyecto);

    setProyectos(obtenerProyectosDisp());
    //setMostrarFormulario(false);

  };

  const Eliminar = (id) => {

    eliminarProyecto(id);

    setProyectos(obtenerProyectosDisp());
    if (proyectoSeleccionado && proyectoSeleccionado.id === id) {
      setProyectoSeleccionado(null);
    }

  };

  const proyectosVisibles = buscarProyectos(busqueda);

  return (

    <>

      <Header />

      {proyectoSeleccionado ? (

        <Container className="detalleContainer">

          <DetalleProyecto
            proyecto={proyectoSeleccionado}
            onVolver={() => setProyectoSeleccionado(null)}
          />

        </Container>

      ) : (

        <>

          <Container fluid className="d-flex justify-content-end align-items-center mt-2 pe-3">

           {/*  <Button 
              variant={mostrarFormulario ? "danger" : "primary"}
              onClick={() => setMostrarFormulario(!mostrarFormulario)}
              
            >
              {mostrarFormulario ? "✕ Cerrar Formulario" : "➕ Añadir Proyecto"}
            </Button> */}

            <Form.Control
              name="inputSearch"
              type="text"
              placeholder="Buscar proyecto"
              className="searchInput"
              style={{ width: "250px" }}
              onChange={(e) => setBusqueda(e.target.value)}
            />

          </Container>

         {/*  {mostrarFormulario && (
            <FormularioProyecto onAgregarProyecto={agregarNuevoProyecto} />
          )} */}

          <FormularioProyecto onAgregarProyecto={agregarNuevoProyecto} />

          <ListaProyectos
            proyectos={proyectosVisibles}
            //totalProyectos={proyectos.length}
            onEliminar={Eliminar}
            onVerDetalle={setProyectoSeleccionado}
            fechaActualizacion={fechaActualizacion}
          />

        </>

      )}

      <Footer />

    </>

  );

}

export default App;

