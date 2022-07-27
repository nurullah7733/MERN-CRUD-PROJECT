import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = (id) => {
  return (
    <Navbar bg="primary" variant="dark" className="my-3 ">
      <Container>
        <NavLink to="/">
          <Navbar.Brand style={{ fontSize: "18px", color: "#fff" }}>
            Home
          </Navbar.Brand>
        </NavLink>
        <Nav className="me-auto">
          <NavLink
            className="nav-link"
            to="/create-product"
            style={{ fontSize: "18px", color: "#fff" }}
          >
            Create
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
