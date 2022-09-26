import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Navigation.css';

export default function Navigation(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container className="fluid">
                <NavLink to="/ProfileApp/" className="navtitle">Home</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="">
                        <NavLink to='/ProfileApp/About' className="navitem"
                        style={({isActive}) => {
                            return isActive ? {fontWeight:500} : {}
                        }}>About</NavLink>
                        <NavLink to='/ProfileApp/Contact' className="navitem"
                        style={({isActive}) => {
                            return isActive ? {fontWeight:500} : {}
                        }}>Contact</NavLink>
                        <NavLink to='/ProfileApp/Portfolio' className="navitem"
                        style={({isActive}) => {
                            return isActive ? {fontWeight:500} : {}
                        }}>Portfolio</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}