import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../images/logo/logo2.jpg"

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ height: "50px", width: "100px" }} src={logo}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="text-white" href="#features">Home</Nav.Link>
                            <Nav.Link className="text-white" href="#pricing">Services</Nav.Link>
                            <Nav.Link className="text-white" href="#features">Checkout</Nav.Link>
                            <Nav.Link className="text-white" href="#features">Blogs</Nav.Link>
                            <Nav.Link className="text-white" href="#pricing">About</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link className="text-white" href="#login">LogIn</Nav.Link>
                            <Nav.Link className="text-white" href="#register">
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;