import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand to="/">MeDemy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto header">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/courses">Course</Link>
                            <Link to="/contact">Contact US</Link>
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="https://github.com/yeasirarafatpp">Yeasir Arafat</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;