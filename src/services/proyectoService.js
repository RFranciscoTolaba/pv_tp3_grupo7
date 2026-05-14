// proyectoService.js

const proyectos = [
    { id: 1, titulo: "Sistema de Notas", categoria: "Educación", estado: "Activo" },
    { id: 2, titulo: "E-commerce React", categoria: "Ventas", estado: "Pausado" },
    { id: 3, titulo: "App de Clima", categoria: "Utilidades", estado: "Completado" },
    { id: 4, titulo: "Gestor de Tareas", categoria: "Productividad", estado: "Activo" },
    { id: 5, titulo: "Blog Personal", categoria: "Social", estado: "En revisión" }
];

export const obtenerProyectos = () => {
    return [...proyectos];
};

// Las demás funciones (agregar, eliminar, buscar) las pueden completar después