import { useState } from "react"
import ListaProyectos from "./components/ListaProyectos"
<<<<<<< HEAD
=======
import './App.css'
>>>>>>> origin/rama-lucas

function App() {

  const [proyectos, setProyectos] = useState([

    {
      id: 1,
      titulo: "Sistema Escolar",
      categoria: "Educación",
      estado: "Activo"
    },

    {
      id: 2,
      titulo: "Biblioteca Virtual",
      categoria: "Web",
      estado: "Pendiente"
    }

  ])

  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [estado, setEstado] = useState("")

  const eliminarProyecto = (id) => {

    const nuevosProyectos = proyectos.filter(
      (proyecto) => proyecto.id !== id
    )

    setProyectos(nuevosProyectos)

  }

  const agregarProyecto = () => {

    const nuevoProyecto = {

      id: proyectos.length + 1,
      titulo: titulo,
      categoria: categoria,
      estado: estado

    }

    setProyectos([...proyectos, nuevoProyecto])

    setTitulo("")
    setCategoria("")
    setEstado("")

  }

  return (

<<<<<<< HEAD
    <div>

      <h1>Lista de Proyectos</h1>

=======
  <div>

<div className="filtro">
>>>>>>> origin/rama-lucas
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        type="text"
        placeholder="Categoría"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />

      <input
        type="text"
        placeholder="Estado"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
      />

      <button onClick={agregarProyecto}>
        Agregar Proyecto
      </button>
<<<<<<< HEAD

=======
</div>
<div>
>>>>>>> origin/rama-lucas
      <ListaProyectos
        proyectos={proyectos}
        eliminarProyecto={eliminarProyecto}
      />
<<<<<<< HEAD

=======
</div>
>>>>>>> origin/rama-lucas
    </div>

  )

}

export default App