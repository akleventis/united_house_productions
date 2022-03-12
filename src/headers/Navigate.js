// import {LinkTree, Instagram, Facebook } from '../assets/images/index'
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShoppingCart } from "../components/index.js";
import "./headers.css";

const Navigate = ({ showShoppingCart, setShowShoppingCart }) => {
  return (
    <>
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
              <Button onClick={() => setShowShoppingCart(true)}>🛒</Button>
            </Nav>
          </Navbar.Collapse>
          <div>
            {/* <img src={LinkTree} alt='link tree' />
                        <img src={Instagram} alt='instagram' />
                        <img src={Facebook} alt='facebook' /> */}
          </div>
        </Container>
      </Navbar>
      <ShoppingCart
        showShoppingCart={showShoppingCart}
        setShowShoppingCart={setShowShoppingCart}
      />
    </>
  );
};

export default Navigate;
