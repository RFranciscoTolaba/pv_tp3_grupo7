import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>

        <li>
          <NavLink to="/proyectos">Proyectos</NavLink>
        </li>

        <li>
          <NavLink to="/detalle">Detalle</NavLink>
        </li>

        <li>
          <NavLink to="/perfil">Perfil</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;