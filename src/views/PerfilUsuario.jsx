import {Container, Card, ListGroup } from 'react-bootstrap';

const PerfilUsuario = () => {
    return(
        <Container className="p-4 d-flex justify-content-center">
            <Card className='Perfil-Card'>
                <Card.Body className='d-flex flex-column align-items-center mb-3'>
                    <div
                        className="logo-perfil rounded-circle bg-primary text-white d-flex justify-content-center align-items-center mb-3"      
                    >
                        GR
                    </div>
                    <Card.Title as='h4'>Perfil de Usuario</Card.Title>

                </Card.Body>
                <ListGroup className='list-group-flush'>
                    <ListGroup.Item>
                        <strong>Nombre Completo</strong> <br/>
                        <span className='text-muted'> Gerardo Reyes</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Rol</strong> <br/>
                        <span className='text-muted'> Alumno (APU)</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Universidad</strong> <br/>
                        <span className='text-muted'>Universidad Nacional de Jujuy</span>
                    </ListGroup.Item>
                </ListGroup>

            </Card>
        </Container>
    );
};

export default PerfilUsuario;
/* 
import {Container, Card, ListGroup } from 'react-bootstrap';

const PerfilUsuario = () => {
    return(
        <Container className="p-4 d-flex justify-content-center">
            <Card className='shadow' style={{width:'100%',maxWidth:'500px',borderRadius:'10px'}}>
                <Card.Body className='d-flex flex-column align-items-center mb-3'>
                    <div
                        className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center mb-3" 
                        style={{ width: '80px', height: '80px', fontSize: '32px' }}
                    >
                        GR
                    </div>
                    <Card.Title as='h4'>Perfil de Usuario</Card.Title>

                </Card.Body>
                <ListGroup className='list-group-flush'>
                    <ListGroup.Item>
                        <strong>Nombre Completo</strong> <br/>
                        <span className='text-muted'> Gerardo Reyes</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Rol</strong> <br/>
                        <span className='text-muted'> Alumno (APU)</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Universidad</strong> <br/>
                        <span className='text-muted'>Universidad Nacional de Jujuy</span>
                    </ListGroup.Item>
                </ListGroup>

            </Card>
        </Container>
    );
};

export default PerfilUsuario; */