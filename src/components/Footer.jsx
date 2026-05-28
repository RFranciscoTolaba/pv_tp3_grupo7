import { Container } from "react-bootstrap";

const Footer = () => {

  return (

    <footer className="footerPers" style={{ backgroundColor: "var(--bg-secondary-color)", color: "var(--primary-text-color)", padding: "15px", textAlign: "center", fontSize: "18px" }}>

      <Container>

        <p className="mb-1">Copyright © Grupo7. Todos los derechos reservados.</p>

        <p className="mb-0">Francisco, Kevin, Ricardo, Lucas, Gerardo</p>

      </Container>

    </footer>

  );

};

export default Footer;
