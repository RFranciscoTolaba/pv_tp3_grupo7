import { Nav as BsNav } from "react-bootstrap";

const Nav = () => {

  return (

    <BsNav className="ms-auto">

      <BsNav.Link href="/" style={{ color: "rgb(240, 240, 227)", fontSize: "20px", padding: "0 20px" }}>
        Inicio
      </BsNav.Link>

      <BsNav.Link href="#" style={{ color: "rgb(240, 240, 227)", fontSize: "20px", padding: "0 20px" }}>
        Proyectos
      </BsNav.Link>

      <BsNav.Link href="#" style={{ color: "rgb(240, 240, 227)", fontSize: "20px", padding: "0 20px" }}>
        Detalle
      </BsNav.Link>

      <BsNav.Link href="#" style={{ color: "rgb(240, 240, 227)", fontSize: "20px", padding: "0 20px" }}>
        Perfil
      </BsNav.Link>

    </BsNav>

  );

};

export default Nav;

