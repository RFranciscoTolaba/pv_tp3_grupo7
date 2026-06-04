import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";

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
import FormularioProyecto from "./components/FormularioProyecto";

import Dashboard from "./views/Dashboard";
import PerfilUsuario from "./views/PerfilUsuario";
import ProyectoDetalle from "./views/ProyectoDetalle";
function App() {

  const [proyectos, setProyectos] = useState([]);

  const [busqueda, setBusqueda] = useState("");


  const [fechaActualizacion, setFechaActualizacion] = useState(null);

  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  useEffect(() => {
    setProyectos(obtenerProyectosDisp());
  }, []);

const agregarNuevoProyecto = (nuevoProyecto) => {
  agregarProyecto(nuevoProyecto);
  setProyectos(obtenerProyectosDisp());
  
  setFechaActualizacion(new Date()); 
  setMostrarRegistro(true);
};

const Eliminar = (id) => {
  eliminarProyecto(id);
  setProyectos(obtenerProyectosDisp());
  
  setFechaActualizacion(new Date());
  setMostrarRegistro(true); 
};

  const proyectosVisibles = buscarProyectos(busqueda);
return (
    <div className="app-wrapp">
      <Header />

      <main className="flex-grow-1 my-4">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/proyectos"
            element={
              <Container>
                <Container fluid className="d-flex justify-content-end align-items-center mb-4 px-0">
                  <Form.Control
                    name="inputSearch"
                    type="text"
                    placeholder="Buscar proyecto"
                    className="searchInput"
                    //style={{ width: "280px" }}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                </Container>

                <FormularioProyecto onAgregarProyecto={agregarNuevoProyecto} />

                <ListaProyectos
                  proyectos={proyectosVisibles}
                  onEliminar={Eliminar}
                  fechaActualizacion={mostrarRegistro ? fechaActualizacion : null}
                />
              </Container>
            }
          />

          <Route path="/proyectos/:id" element={<ProyectoDetalle />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
 
}

export default App;

