import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="header-Nav">
      <ul>
        <li>
          <NavLink to="/dashboard" className="header-Navlink">
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink to="/proyectos" className="header-Navlink">
            Proyectos
          </NavLink>
        </li>


        <li>
          <NavLink to="/perfil" className="header-Navlink">
            Perfil
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;