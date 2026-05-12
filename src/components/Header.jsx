import { useState } from 'react';

const Header = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div>
          <h1>
            Proyectos
          </h1>
        </div>
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
      </header>
    </>
  );
}

export default Header;
