import { Navigate, Outlet } from "react-router-dom";
import useAutorizaciones from "../hook/useAutorizaciones";

const RutaProtegida = () => {
    const { usuarioActivo } = useAutorizaciones();

    return usuarioActivo
        ? <Outlet />
        : <Navigate to="/login" replace />;
};

export default RutaProtegida;