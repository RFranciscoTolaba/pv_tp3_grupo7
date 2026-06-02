import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/" className="Navlink">
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink to="/proyectos" className="Navlink">
            Proyectos
          </NavLink>
        </li>

        <li>
          <NavLink to="/detalle" className="Navlink">
            Detalle
          </NavLink>
        </li>

        <li>
          <NavLink to="/perfil" className="Navlink">
            Perfil
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;