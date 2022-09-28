import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Github from "../Images/github.png";
import LinkedIn from "../Images/linkedin.png";
import Email from "../Images/email.png";


export default function Footer(){
    return(
        <Container className="bg-dark bottom-0 left-0 right-0" sticky="bottom" style={{maxWidth:"100%"}}>
            <Row className="text-center">
                <Col className="col-12 col-md-4">
                </Col>
                <Col className="col-12 col-md-4 ">
                    <a href="http://github.com/jtamayagk1">
                        <img src={Github} alt="Github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-amaya-a562271b6/">
                        <img src={LinkedIn} alt="LinkedIn"/>
                    </a>
                    <a href="http://github.com/jtamayagk1">
                        <img src={Email} alt="Email"/>
                    </a>
                </Col>
                <Col className="col-12 col-md-4">
                </Col>
            </Row>
        </Container>
    );
}