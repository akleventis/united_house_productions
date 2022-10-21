import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../../cart/Cart.js";
import { SocialIcon } from "react-social-icons";
import "./Header.css";

const Socials = ({ size }) => {
  const cssClass = size === "large" ? "social-large" : "social-small";
  return (
    <>
      <SocialIcon
        className={"social linktree " + cssClass}
        bgColor="#E7E7E7"
        style={{ height: 30, width: 30 }}
        rel="noreferrer"
        url="https://linktree.com/unitedhouseproductions"
      />
      <SocialIcon
        className={"social insta " + cssClass}
        bgColor="#E7E7E7"
        style={{ height: 30, width: 30 }}
        rel="noreferrer"
        url="https://www.instagram.com/unitedhouseproductions/"
      />
      <SocialIcon
        className={"social facebook " + cssClass}
        bgColor="#E7E7E7"
        style={{ height: 30, width: 30 }}
        rel="noreferrer"
        url="https://www.facebook.com/UnitedHouseProductions/"
      />
    </>
  );
};

const Navigate = ({ showCart, setCart }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="md navbar-dark" className="nav-links">
        <Container className="nav-container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link eventKey="1" as={Link} to="/">
                Events
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link eventKey="3" as={Link} to="/booking">
                Booking
              </Nav.Link>
              <Nav.Link eventKey="4" as={Link} to="/merch">
                Merch
              </Nav.Link>
              <Nav.Link onClick={() => setCart(true)}>
                Cart
              </Nav.Link>
            </Nav>
            <Cart
              showCart={showCart}
              setCart={setCart}
            />
            <Socials size="large" />
          </Navbar.Collapse>
        </Container>
        <Socials />
      </Navbar>
    </>
  );
};

export default Navigate;
