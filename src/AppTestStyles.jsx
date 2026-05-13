import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "./assets/vite.svg";
//import heroImg from "./assets/hero.png";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/style.css";
import lupa from "./assets/img/lupa.png";
const AppTestStyles = () => {
  return (
    <>
      <Header />

      <main>
        <section>
          <div className="searchDiv">
            <input name="inputSearch" type="text" placeholder="Buscar proyecto" className="searchInput"/>
            
            <button type="submit" className="searchBtn">
              <img src={lupa} alt="lupa" />
            </button>
          </div>
          <section className="registrationDiv">
            <h2>Cargar Nuevo Proyecto</h2>
            <form className="project-form">
              <div className="inputGroup">
                <label htmlFor="title">Título:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Ej: Sistema de Gestion"
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="category">Categoría:</label>
                <select id="category" name="category">
                  <option value="Gestion">Gestión</option>
                  <option value="Educacion">Educación</option>
                  <option value="Videojuegos">Videojuegos</option>
                  <option value="Acceso">Acceso</option>
                </select>
              </div>

              <div className="inputGroup">
                <label htmlFor="status">Estado:</label>
                <select id="status" name="status">
                  <option value="En curso">En curso</option>
                  <option value="Finalizado">Finalizado</option>
                </select>
              </div>
              <div className="formActions">  <button type="submit" className="btn-save">
                Guardar Proyecto
              </button></div>

            
            </form>
          </section>
          <div className="tarjet">
            <article>
              <h2>Biblioteca Digital</h2>
              <img
                src="assets/img/library.png"
                alt="imagen biblioteca digital"
              />
              <p>
                Plataforma de consulta publica para proyectos finales y trabajos
                de investigacion de la Facultad de Ingenieria
              </p>
              <p>
                <b>Categoria: </b>Gestion
              </p>
              <div className="buttonsAction">
                <a href="detalle.html" className="btn">
                  {" "}
                  Ver Detalle
                </a>
                <button className="btnDelete">Eliminar</button>
              </div>
            </article>
            <article>
              <h2>Plataforma de Videojuegos Educativos</h2>
              <img src="assets/img/vj.jfif" alt="imagen Vj educativos" />
              <p>
                Plataforma para acceder a entornos ludicos interactivos para
                fortalecer el aprendizaje en el nivel primario.
              </p>
              <p>
                <b>Categoria: </b>Educacion
              </p>
              <div className="buttonsAction">
                <a href="detalle.html" className="btn">
                  {" "}
                  Ver Detalle
                </a>
                <button className="btnDelete">Eliminar</button>
              </div>
            </article>
            <article>
              <h2>Pagina de Educacion a Distancia</h2>
              <img src="assets/img/dev.png" alt="imagen bootcamp" />
              <p>
                Espacio de encuentro para tutorias, enfocadas en la resolucion
                de problemas de desarrollo web
              </p>
              <p>
                <b>Categoria: </b>Educacion
              </p>
              <div className="buttonsAction">
                <a href="detalle.html" className="btn">
                  {" "}
                  Ver Detalle
                </a>
                <button className="btnDelete">Eliminar</button>
              </div>
            </article>
            <article>
              <h2>Web de Gestion Universitaria</h2>
              <img
                src="assets/img/mg_sc.png"
                alt="imagen gestion universitaria"
              />
              <p>
                Sistema diseñado para automatizar la recepcion y evaluacion de
                ingresantes/alumnos, y solicitudes de becas estudiantiles
              </p>
              <p>
                <b>Categoria: </b>Gestion
              </p>
              <div className="buttonsAction">
                <a href="detalle.html" className="btn">
                  {" "}
                  Ver Detalle
                </a>
                <button className="btnDelete">Eliminar</button>
              </div>
            </article>
            <article>
              <h2>Verificador de Asistencia por QR</h2>
              <img src="assets/img/qr.png" alt="imagen verificador qr" />
              <p>
                Herramienta agil para el registro de presencia en clases
                presenciales mediante QR
              </p>
              <p>
                <b>Categoria: </b>Control, Acceso
              </p>
              <div className="buttonsAction">
                <a href="detalle.html" className="btn">
                  {" "}
                  Ver Detalle
                </a>
                <button className="btnDelete">Eliminar</button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AppTestStyles;
