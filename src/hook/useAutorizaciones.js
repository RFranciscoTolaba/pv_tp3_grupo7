import { useContext } from "react";
import { AutorizacionesContext } from "../context/AutorizacionesContext";

const useAutorizaciones = () => {
  const context = useContext(AutorizacionesContext);

  if (context === undefined) {
    throw new Error("useAutorizaciones tiene que ser usado dentro de un provedorAutorizaciones");
  }

  return context;
};

export default useAutorizaciones;