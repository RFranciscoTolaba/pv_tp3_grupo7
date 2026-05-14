
let proyectos = [
    { id: 1, titulo: "Sistema de Notas", categoria: "Educación", estado: "Activo" },
    { id: 2, titulo: "E-commerce React", categoria: "Ventas", estado: "Pausado" },
    { id: 3, titulo: "App de Clima", categoria: "Utilidades", estado: "Completado" },
    { id: 4, titulo: "Gestor de Tareas", categoria: "Productividad", estado: "Activo" },
    { id: 5, titulo: "Blog Personal", categoria: "Social", estado: "En revisión" }
];

export const obtenerProyectos = () => {
    return [...proyectos];
};
export const agregarProyecto = (nuevo) => {
    const proyecto = { ...nuevo, id: Date.now() }; 
    proyectos = [...proyectos, proyecto];
    return proyecto;
};

export const eliminarProyecto = (id) => {
    proyectos = proyectos.filter(p => p.id !== id);
    return id;
};

export const buscarProyectos = (termino) => {
    return proyectos.filter(p => 
        p.titulo.toLowerCase().includes(termino.toLowerCase()) ||
        p.categoria.toLowerCase().includes(termino.toLowerCase())
    );
};
