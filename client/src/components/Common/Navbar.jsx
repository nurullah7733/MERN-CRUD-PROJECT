import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = (id) => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>Home</Navbar.Brand>
                </NavLink>
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="/create-product">
                        Create
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
