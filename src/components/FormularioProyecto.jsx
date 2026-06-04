import { useState } from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";

function FormularioProyecto({ onAgregarProyecto }) {

  const [nuevoProyecto, setNuevoProyecto] = useState({

    titulo: "",
    categoria: "",
    estado: "Activo",
    descripcion: "",
    recursos: {
      pdf: "",
      drive: "",
      github: "",
    },
    equipo: "",

  });

  const Agregar = () => {

    if (!nuevoProyecto.titulo) return;

    const equipoArray = nuevoProyecto.equipo
      .split(",")
      .map((item) => {

        const [nombre, rol] = item.split(":").map((s) => s.trim());

        return {
          nombre: nombre || item.trim(),
          rol: rol || "Integrante",
        };

      });

    const proyectoFinal = {
      ...nuevoProyecto,
      equipo: equipoArray,
    };

    onAgregarProyecto(proyectoFinal);

    setNuevoProyecto({
      titulo: "",
      categoria: "",
      estado: "Activo",
      descripcion: "",
      recursos: { pdf: "", drive: "", github: "" },
      equipo: "",
    });

  };

  return (

    <Card className="form-add-prj mx-auto my-4">

      <Card.Body className="p-4">

        <Card.Title
          as="h2"
          className="mb-4 pb-2"
        >
          Cargar Nuevo Proyecto
        </Card.Title>

        <Form>

          <Form.Group className="mb-3">
            <Form.Label>Título:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título"
              className="input-text-form"
              value={nuevoProyecto.titulo}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, titulo: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoría:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Categoría"
              className="input-text-form"
              value={nuevoProyecto.categoria}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, categoria: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Estado:</Form.Label>
            <Form.Select
              value={nuevoProyecto.estado}
              className="input-text-form"
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, estado: e.target.value })}
            >
              <option value="Activo">Activo</option>
              <option value="Pausado">Pausado</option>
              <option value="Completado">Completado</option>
              <option value="En revisión">En revisión</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="input-text-form"
              value={nuevoProyecto.descripcion}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, descripcion: e.target.value })}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>PDF:</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="URL"
                  className="input-text-form"
                  value={nuevoProyecto.recursos.pdf}
                  onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, recursos: { ...nuevoProyecto.recursos, pdf: e.target.value } })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Drive:</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="URL"
                  className="input-text-form"
                  value={nuevoProyecto.recursos.drive}
                  onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, recursos: { ...nuevoProyecto.recursos, drive: e.target.value } })}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>GitHub:</Form.Label>
            <Form.Control
              type="url"
              placeholder="URL"
              className="input-text-form"
              value={nuevoProyecto.recursos.github}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, recursos: { ...nuevoProyecto.recursos, github: e.target.value } })}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Equipo:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Juan: Frontend, Ana: Backend"
              className="input-text-form"
              value={nuevoProyecto.equipo}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, equipo: e.target.value })}
            />
          </Form.Group>

          <Button
            variant="secondary"
            className="btnSave w-50"
            onClick={Agregar}
          >
            Agregar 
          </Button>

        </Form>

      </Card.Body>

    </Card>

  );

}

export default FormularioProyecto;


