import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

export default function navbar(props) {
    const heading = props.heading;
    const Courses = props.Courses;
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-5">
            <Container fluid>
                <Navbar.Brand href="">{heading}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <LinkContainer to="/teacherhome">
                            <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                        <NavDropdown title="Courses" id="navbarScrollingDropdown">
                            <Nav.Link href="#action3">View Courses</Nav.Link>
                            <LinkContainer to="/teacheraddcourses">
                                <Nav.Link>{Courses}</Nav.Link>
                                </LinkContainer>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}