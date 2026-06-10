import { NavLink } from "react-router-dom";
import useAutorizaciones from "../hook/useAutorizaciones";


const Nav = () => {

  const { usuarioActivo, cerrarSesion } = useAutorizaciones();

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

        {!usuarioActivo ? (
          <li>
            <NavLink to="/login" className="header-Navlink">
              Ingresar
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <span className="header-Navlink">
                {usuarioActivo.nombre} ({usuarioActivo.rol})
              </span>
            </li>

            <li>
              <span
                className="header-Navlink"
                onClick={cerrarSesion}
                style={{ cursor: "pointer" }}
              >
                Cerrar sesión
              </span>
            </li>
          </>
        )}

      </ul>
    </nav>
  );
};

export default Nav;