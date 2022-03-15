import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShoppingCart } from "../../components/index.js";
import { SocialIcon } from "react-social-icons";
import "./headers.css";

const Navigate = ({ showShoppingCart, setShowShoppingCart }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="md navbar-dark" className="nav-links">
        <Container className='nav-container'>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link eventKey="1" as={Link} to="/">
                Events
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/merch">
                Merch
              </Nav.Link>
              <Nav.Link eventKey="3" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link eventKey="4" as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Button onClick={() => setShowShoppingCart(true)}>🛒</Button>
            </Nav>
            <SocialIcon className="social linktree social-large" style={{ height: 35, width: 35 }} url="https://linktree.com/unitedhouseproductions" />
            <SocialIcon className="social insta social-large" style={{ height: 35, width: 35 }} url="https://www.instagram.com/unitedhouseproductions/" />
            <SocialIcon className="social facebook social-large" bgColor="#34d8eb"  style={{ height: 35, width: 35 }} url="https://facebook.com" />
          </Navbar.Collapse>

        </Container>
            <SocialIcon className="social linktree social-small" style={{ height: 35, width: 35 }} url="https://linktree.com/unitedhouseproductions" />
            <SocialIcon className="social insta social-small" style={{ height: 35, width: 35 }} url="https://www.instagram.com/unitedhouseproductions/" />
            <SocialIcon className="social facebook social-small" bgColor="#34d8eb" style={{ height: 35, width: 35 }} url="https://facebook.com" />
            <ShoppingCart showShoppingCart={showShoppingCart} setShowShoppingCart={setShowShoppingCart} />
      </Navbar>
    </>
  );
};

export default Navigate;
