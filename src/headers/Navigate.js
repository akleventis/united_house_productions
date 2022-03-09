import {LinkTree, Instagram, Facebook } from '../assets/images'   
import { Navbar, Container, Nav} from 'react-bootstrap';
import "./headers.css";

const Navigate = () => {




    return (
        <nav>
            <Navbar bg="light" expand="lg" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Events</Nav.Link>
                    <Nav.Link href="#link">Merch</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <div>
                    <img src={LinkTree} alt='link tree' />
                    <img src={Instagram} alt='instagram' />
                    <img src={Facebook} alt='facebook' />
                </div>
            </Container>

            </Navbar>
        </nav>
    )
};

export default Navigate