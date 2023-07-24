import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import StudentLogin from './studentLogin'

export default function navbar(props) {
    const heading = props.heading;
    const Courses = props.Courses;

    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-5">
            <Container fluid>
                <LinkContainer to="/studenthome">
                    <Navbar.Brand >{heading}</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <LinkContainer to="/studenthome">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Courses" id="navbarScrollingDropdown">
                            <LinkContainer to="/viewstudentcourses">
                                <Nav.Link>View Courses</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/studentaddcourses">
                                <Nav.Link>{Courses}</Nav.Link>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown title="User Email">
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}