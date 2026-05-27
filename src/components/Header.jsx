import Nav from "./Nav";
import logo from "../assets/img/logo.png";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {

  return (

    <Navbar style={{ backgroundColor: "var(--bg-secondary-color)" }} sticky="top" expand="md">

      <Container fluid>

        <Navbar.Brand className="d-flex align-items-center gap-2">

          <img
            src={logo}
            alt="Logo equipo"
            style={{ width: "60px", height: "auto", objectFit: "contain" }}
          />

          <span style={{ color: "var(--primary-text-color)", fontSize: "35px", fontWeight: "bold" }}>
            Grupo 7
          </span>

        </Navbar.Brand>

        <Nav />

      </Container>

    </Navbar>

  );

};

export default Header;
