import { useState } from "react";
import Nav from "./Nav";
import logo from "../assets/img/logo.png";
const Header = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div>
          <div>
            <img src={logo} alt="Logo equipo" />
          </div>
          <div>
            <h1>Grupo 7</h1>
          </div>
        </div>

        <Nav />
      </header>
    </>
  );
};

export default Header;
