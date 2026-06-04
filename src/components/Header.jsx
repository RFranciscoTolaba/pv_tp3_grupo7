import Nav from "./Nav";
import logo from "../assets/img/logo.png";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {

  return (

    <Navbar expand="md" sticky="top">

      <Container fluid>

        <Navbar.Brand className="d-flex align-items-center gap-2">

          <img
            src={logo}
            alt="Logo equipo"
            className="header-logo "
          />

          <span className="header-title">
            Grupo 7
          </span>

        </Navbar.Brand>

        <Nav />

      </Container>

    </Navbar>

  );

};

export default Header;
