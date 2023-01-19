/* eslint-disable jsx-a11y/anchor-is-valid */
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../../cart/Cart.js";
import { SocialIcon } from "react-social-icons";
import "./Header.css";

const Socials = ({ setCart, size }) => {
  const cssClass = size === "large" ? "social-large" : "social-small";
  return (
    <>
      <a
        onClick={() => setCart(true)}
        title="Shopping Cart"
        rel="noreferrer"
        className={"social-icon social shopping-cart " + cssClass}
        style={{ height: 30, width: 30 }}
      >
        <svg viewBox="0 0 700.000000 700.000000">
          <g
            transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)"
            fill="#E7E7E7"
            stroke="none"
          >
            <path
              d="M3160 6969 c-683 -76 -1276 -313 -1810 -725 -143 -110 -477 -443 -586 -584 -395 -510 -629 -1068 -721 -1720 -25 -178 -25 -691 0 -870 112 -791 449 -1474 997 -2020 562 -562 1258 -896 2070 -996 164 -21 553 -23 720 -6 522 56 1028 225 1467 491 331 201 669 498 907 796 408 511 662 1123 742 1785 21 175 24 570 6 735 -78 690 -331 1303 -755 1833 -130 162 -366 399 -528 529 -500 400 -1083 649 -1729 739 -137 19 -649 28 -780 13z m-845 -1844 c21 -44 58 -123 80 -175 l42 -95 1364 -5 c1506 -6 1410 -1 1457 -67 46 -65 47 -148 4 -210 -11 -15 -113 -197 -227 -403 -114 -206 -262 -474 -329 -595 -131 -238 -166 -282 -254 -323 l-57 -27 -715 -3 -715 -3 -33 -62 c-139 -261 -136 -255 -118 -282 l16 -25 1053 -2 1052 -3 0 -170 0 -170 -1125 0 -1125 0 -61 28 c-113 52 -199 171 -211 289 -10 109 15 181 143 402 65 110 123 212 131 226 14 23 11 33 -45 150 -89 185 -238 499 -387 815 -73 154 -149 315 -170 358 l-37 77 -179 0 -179 0 0 173 c0 96 3 177 7 180 4 4 135 6 292 5 l286 -3 40 -80z m602 -2849 c76 -34 144 -104 180 -182 20 -45 25 -71 25 -139 0 -73 -4 -94 -30 -148 -35 -76 -96 -138 -172 -175 -49 -24 -66 -27 -155 -27 -89 0 -106 3 -150 27 -60 31 -139 107 -164 157 -68 135 -43 301 62 409 82 84 153 113 267 109 57 -2 90 -9 137 -31z m1815 -4 c121 -59 201 -186 201 -317 0 -103 -30 -174 -107 -251 -83 -83 -148 -108 -266 -102 -119 6 -209 54 -271 145 -92 133 -89 286 7 425 90 130 285 175 436 100z"
            />
          </g>
        </svg>
      </a>
      <SocialIcon
        className={"social linktree " + cssClass}
        bgColor="#E7E7E7"
        style={{ height: 30, width: 30 }}
        rel="noreferrer"
        title="Linktree"
        url="https://linktree.com/unitedhouseproductions"
      />
      <SocialIcon
        className={"social insta " + cssClass}
        bgColor="#E7E7E7"
        style={{ height: 30, width: 30 }}
        rel="noreferrer"
        title="Instagram"
        url="https://www.instagram.com/unitedhouseproductions/"
      />
      <SocialIcon
        className={"social facebook " + cssClass}
        bgColor="#E7E7E7"
        style={{ height: 30, width: 30 }}
        rel="noreferrer"
        title="Facebook"
        url="https://www.facebook.com/UnitedHouseProductions/"
      />
    </>
  );
};

const Navigate = ({ showCart, setCart, toggleToast, displayToast }) => {
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
            </Nav>
            <Cart
              showCart={showCart}
              setCart={setCart}
              toggleToast={toggleToast}
              displayToast={displayToast}
            />
            <Socials setCart={setCart} size="large" />
          </Navbar.Collapse>
        </Container>
        <Socials setCart={setCart} />
      </Navbar>
    </>
  );
};

export default Navigate;
