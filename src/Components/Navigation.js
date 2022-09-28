import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import './Navigation.css';

export default function Navigation(){

    return(
        <Navbar collapseOnSelect={true} expand="lg" bg="dark" variant="dark" sticky="top" style={{minWidth:"100%"}}>
            <Nav.Item>
                <Nav.Link eventKey="1" as={Link} to="/ProfileApp/" className="navtitle ms-3">Home</Nav.Link>
            </Nav.Item>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="ms-2 me-lg-2" >
                    <Nav.Item>
                        <Nav.Link eventKey="2" as={Link} to='/ProfileApp/About' className="navitem">
                            About
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="3" as={Link} to='/ProfileApp/Contact' className="navitem">
                            Contact
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="4" as={Link} to='/ProfileApp/Portfolio' className="navitem">
                            Portfolio
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

// style={({isActive}) => {
//     return isActive ? {fontWeight:500} : {}
// }}