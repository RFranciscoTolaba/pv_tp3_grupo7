import { useState } from 'react';
import { obtenerProyectos } from '../services/proyectoService';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(obtenerProyectos());

    return (
        <main className="main-content">
            <h2>Gestión de Proyectos</h2>
            
            <div className="proyectos-container">
                {/* Integrante 4 tomará este estado 'proyectos' y usar un .map() 
                  justo aquí debajo para renderizar las Cards o la tabla.
                */}
            </div>
        </main>
    );
};

export default ListaProyectos;