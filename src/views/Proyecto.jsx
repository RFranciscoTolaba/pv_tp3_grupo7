import { useParams } from "react-router-dom";
import { Container, Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { obtenerProyectoPorId } from "../services/proyectoService";

const Proyecto = () => {

    const { id } = useParams();

    const proyecto = obtenerProyectoPorId(id);

    if (!proyecto) {

        return (

            <Container className="mt-5">

                <h2>Proyecto no encontrado</h2>

                <Link to="/proyectos">
                    <Button variant="primary">
                        Volver
                    </Button>
                </Link>

            </Container>

        );

    }

    return (

        <Container className="mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        {proyecto.titulo}
                    </Card.Title>

                    <Card.Text>
                        <strong>Categoría:</strong> {proyecto.categoria}
                    </Card.Text>

                    <Card.Text>
                        <strong>Estado:</strong>{" "}
                        <Badge bg="success">
                            {proyecto.estado}
                        </Badge>
                    </Card.Text>

                    <Card.Text>
                        <strong>Descripción:</strong>
                    </Card.Text>

                    <Card.Text>
                        {proyecto.descripcion}
                    </Card.Text>

                    <hr />

                    <h5>Equipo</h5>

                    {proyecto.equipo.map((persona, index) => (

                        <div key={index}>

                            <strong>{persona.nombre}</strong>
                            {" - "}
                            {persona.rol}

                        </div>

                    ))}

                    <hr />

                    <h5>Recursos</h5>

                    <p>
                        <a
                            href={proyecto.recursos.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </p>

                    <p>
                        <a
                            href={proyecto.recursos.drive}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Drive
                        </a>
                    </p>

                    <p>
                        <a
                            href={proyecto.recursos.pdf}
                            target="_blank"
                            rel="noreferrer"
                        >
                            PDF
                        </a>
                    </p>

                    <Link to="/proyectos">

                        <Button
                            variant="secondary"
                            className="mt-3"
                        >
                            Volver
                        </Button>

                    </Link>

                </Card.Body>

            </Card>

        </Container>

    );

};

export default Proyecto;