// import {LinkTree, Instagram, Facebook } from '../assets/images/index'
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./headers.css";

const Navigate = () => {
  return (
    <Navbar expand="md navbar-dark" className="nav-links">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/merch">
              Merch
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
          {/* <img src={LinkTree} alt='link tree' />
                        <img src={Instagram} alt='instagram' />
                        <img src={Facebook} alt='facebook' /> */}
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigate;
