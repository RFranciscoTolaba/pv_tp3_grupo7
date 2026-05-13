import { useState } from "react";

const Nav = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="Navbar">
        <ul>
          <li>
            <a href="index.html">Inicio</a>
          </li>
          <li>
            <a href="proyectos.html">Proyectos</a>
          </li>
          <li>
            <a href="detalle.html">Detalle</a>
          </li>
          <li>
            <a href="perfil.html">Perfil</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
