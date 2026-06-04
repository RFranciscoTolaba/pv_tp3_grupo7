
import { proyectosIniciales } from "./proyectosData";

let proyectos = [...proyectosIniciales];

export const obtenerProyectos = () => {
    return [...proyectos];
};

export const obtenerProyectosDisp = () =>{
    return obtenerProyectos().filter(
        p => p.disponible === true
    );
};

export const agregarProyecto = (nuevo) => {
    const proyecto = { ...nuevo, id: Date.now(),disponible:true };
    proyectos = [...proyectos, proyecto];
    return proyecto;
};


export const eliminarProyecto = (id) => {
    const proyecto = proyectos.find(p => p.id === id);
    
    if(proyecto){
        proyecto.disponible = false;
    }
};

export const buscarProyectos = (termino) => {
    return obtenerProyectosDisp().filter(p =>
        p.titulo.toLowerCase().includes(termino.toLowerCase()) ||
        p.categoria.toLowerCase().includes(termino.toLowerCase())
    );
};

export const obtenerProyectoPorId = (id) => {
    return proyectos.find(
        p => p.id === Number(id)
    );
};

