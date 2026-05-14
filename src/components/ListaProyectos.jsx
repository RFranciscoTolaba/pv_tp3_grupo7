import { useState } from 'react';
// Asegúrate de que la ruta de importación coincida con donde el Integrante 3 creó el archivo
import { obtenerProyectos } from '../services/proyectoService';

const ListaProyectos = () => {
    // 1. Inicializamos el estado 'proyectos' ejecutando la función del servicio
    const [proyectos, setProyectos] = useState(obtenerProyectos());

    return (
        <main className="main-content">
            <h2>Gestión de Proyectos</h2>
            
            <div className="proyectos-container">
                {/* Aquí termina tu responsabilidad del inciso 3. 
                  El Integrante 4 tomará este estado 'proyectos' y usará un .map() 
                  justo aquí debajo para renderizar las Cards o la tabla.
                */}
            </div>
        </main>
    );
};

export default ListaProyectos;