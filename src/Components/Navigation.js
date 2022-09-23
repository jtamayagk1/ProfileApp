import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export default function Navigation(){
    return(
        <Navbar className="expand-lg" variant="dark" bg="dark" fixed="top">
            <Container className="fluid">
                <Navbar.Brand>Jonathan Amaya</Navbar.Brand>
                <Nav className="d-flex">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <Nav.Link>Work</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}