import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo/logo2.jpg"

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ height: "50px", width: "100px" }} src={logo}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/home#services">Services</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/checkout">Checkout</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/blog">Blogs</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/about">About</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link className="text-white" as={Link} to="/login">LogIn</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/register">
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;