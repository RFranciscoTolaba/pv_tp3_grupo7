let proyectos = [
    {
        id: 1,
        titulo: "Sistema de Notas",
        categoria: "Educación",
        estado: "Activo",
        descripcion: "Este sistema permite a los docentes registrar y gestionar las calificaciones de los estudiantes de forma digital. Cuenta con un panel de administración donde se pueden cargar notas por materia y período.\nAdemás, genera reportes automáticos por alumno y permite exportar los resultados en distintos formatos para su posterior análisis.",
        recursos: {
            pdf: "https://drive.google.com/file/sistema-notas.pdf",
            drive: "https://drive.google.com/drive/sistema-notas",
            github: "https://github.com/grupo7/sistema-notas"
        },
        equipo: [
            { nombre: "Ricardo Condori", rol: "Desarrollador Frontend" },
            { nombre: "Kevin Llampa", rol: "Desarrollador Backend" },
            { nombre: "Gerardo Reyes", rol: "Tester" }
        ]
    },
    {
        id: 2,
        titulo: "E-commerce React",
        categoria: "Ventas",
        estado: "Pausado",
        descripcion: "Plataforma de comercio electrónico desarrollada con React que permite a los usuarios navegar un catálogo de productos, agregar artículos al carrito y realizar compras en línea.\nEl proyecto incorpora integración con una pasarela de pagos y un panel de administración para gestionar el inventario y los pedidos recibidos.",
        recursos: {
            pdf: "https://drive.google.com/file/ecommerce.pdf",
            drive: "https://drive.google.com/drive/ecommerce",
            github: "https://github.com/grupo7/ecommerce-react"
        },
        equipo: [
            { nombre: "Lucas Segovia", rol: "Desarrollador Full Stack" },
            { nombre: "Francisco Tolaba", rol: "Diseñador UI/UX" }
        ]
    },
    {
        id: 3,
        titulo: "App de Clima",
        categoria: "Utilidades",
        estado: "Completado",
        descripcion: "Aplicación web que consume una API meteorológica para mostrar el clima actual y el pronóstico de los próximos días según la ubicación del usuario.\nIncluye visualización de temperatura, humedad, viento y condiciones generales, con una interfaz limpia y adaptada a dispositivos móviles.",
        recursos: {
            pdf: "https://drive.google.com/file/app-clima.pdf",
            drive: "https://drive.google.com/drive/app-clima",
            github: "https://github.com/grupo7/app-clima"
        },
        equipo: [
            { nombre: "Ricardo Condori", rol: "Desarrollador Frontend" },
            { nombre: "Gerardo Reyes", rol: "Documentación" }
        ]
    },
    {
        id: 4,
        titulo: "Gestor de Tareas",
        categoria: "Productividad",
        estado: "Activo",
        descripcion: "Herramienta para organizar y gestionar tareas personales o de equipo, con soporte para categorías, prioridades y fechas de vencimiento.\nPermite marcar tareas como completadas, filtrarlas por estado y asignarlas a distintos integrantes del equipo de trabajo.",
        recursos: {
            pdf: "https://drive.google.com/file/gestor-tareas.pdf",
            drive: "https://drive.google.com/drive/gestor-tareas",
            github: "https://github.com/grupo7/gestor-tareas"
        },
        equipo: [
            { nombre: "Kevin Llampa", rol: "Desarrollador Full Stack" },
            { nombre: "Lucas Segovia", rol: "Tester" }
        ]
    },
    {
        id: 5,
        titulo: "Blog Personal",
        categoria: "Social",
        estado: "En revisión",
        descripcion: "Plataforma de blog personal donde el usuario puede publicar artículos, organizarlos por categorías y recibir comentarios de los lectores.\nCuenta con un editor de texto enriquecido, sistema de etiquetas y vista previa antes de publicar cada entrada.",
        recursos: {
            pdf: "https://drive.google.com/file/blog-personal.pdf",
            drive: "https://drive.google.com/drive/blog-personal",
            github: "https://github.com/grupo7/blog-personal"
        },
        equipo: [
            { nombre: "Francisco Tolaba", rol: "Desarrollador Frontend" },
            { nombre: "Gerardo Reyes", rol: "Diseñador UI/UX" }
        ]
    }
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