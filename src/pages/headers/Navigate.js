import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShoppingCart } from "../../components/index.js";
import { SocialIcon } from "react-social-icons";
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
            <SocialIcon className="social" url="https://linktr.ee/unitedhouseproductions" />
            <SocialIcon className="social" url="https://www.instagram.com/unitedhouseproductions/" />
            <SocialIcon className="social" url="https://facebook.com" />
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
