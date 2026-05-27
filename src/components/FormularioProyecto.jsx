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

    <Card
      className="mx-auto my-4"
      style={{
        maxWidth: "600px",
        backgroundColor: "var(--bg-secondary-color)",
        borderRadius: "var(--border-radius)",
        color: "var(--primary-text-color)",
        boxShadow: "var(--tarjet-shadow)",
      }}
    >

      <Card.Body className="p-4">

        <Card.Title
          as="h2"
          className="mb-4 pb-2"
          style={{ borderBottom: "2px solid var(--bg-button-color)" }}
        >
          Cargar Nuevo Proyecto
        </Card.Title>

        <Form>

          <Form.Group className="mb-3">
            <Form.Label>Título:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título"
              value={nuevoProyecto.titulo}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, titulo: e.target.value })}
              style={{ backgroundColor: "var(--bg-secondary-color)", color: "var(--primary-text-color)", border: "2px solid #5b5a5a" }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoría:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Categoría"
              value={nuevoProyecto.categoria}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, categoria: e.target.value })}
              style={{ backgroundColor: "var(--bg-secondary-color)", color: "var(--primary-text-color)", border: "2px solid #5b5a5a" }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Estado:</Form.Label>
            <Form.Select
              value={nuevoProyecto.estado}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, estado: e.target.value })}
              style={{ backgroundColor: "var(--bg-secondary-color)", color: "var(--primary-text-color)", border: "2px solid #5b5a5a" }}
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
              value={nuevoProyecto.descripcion}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, descripcion: e.target.value })}
              style={{ backgroundColor: "var(--bg-secondary-color)", color: "var(--primary-text-color)", border: "2px solid #5b5a5a" }}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>PDF:</Form.Label>
                <Form.Control
                  type="url"
                  value={nuevoProyecto.recursos.pdf}
                  onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, recursos: { ...nuevoProyecto.recursos, pdf: e.target.value } })}
                  style={{ backgroundColor: "var(--bg-secondary-color)", color: "var(--primary-text-color)", border: "2px solid #5b5a5a" }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Drive:</Form.Label>
                <Form.Control
                  type="url"
                  value={nuevoProyecto.recursos.drive}
                  onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, recursos: { ...nuevoProyecto.recursos, drive: e.target.value } })}
                  style={{ backgroundColor: "var(--bg-secondary-color)", color: "var(--primary-text-color)", border: "2px solid #5b5a5a" }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>GitHub:</Form.Label>
            <Form.Control
              type="url"
              value={nuevoProyecto.recursos.github}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, recursos: { ...nuevoProyecto.recursos, github: e.target.value } })}
              style={{ backgroundColor: "var(--bg-secondary-color)", color: "var(--primary-text-color)", border: "2px solid #5b5a5a" }}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Equipo:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Juan: Frontend, Ana: Backend"
              value={nuevoProyecto.equipo}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, equipo: e.target.value })}
              style={{ backgroundColor: "var(--bg-secondary-color)", color: "var(--primary-text-color)", border: "2px solid #5b5a5a" }}
            />
          </Form.Group>

          <Button
            variant="secondary"
            className="btnSave w-100"
            onClick={Agregar}
          >
            Agregar Proyecto
          </Button>

        </Form>

      </Card.Body>

    </Card>

  );

}

export default FormularioProyecto;
