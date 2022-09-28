import React from "react";
import Title from "../Components/Title";
import AboutMe from "../Components/AboutMe";
import Experience from "../Components/Experience";
import Certifications from "../Components/Certifications";
import Skills from "../Components/Skills";
import { Container, Row } from "react-bootstrap";

export default function Home(){
    return(

        <Container className="justify-content-center"
                style={{maxWidth:"100%", flex:"1"}}>
            <Title/>
            <AboutMe/>
            <Experience/>
            <Row className="mt-2">
                <Certifications/>
                <Skills/>
            </Row>
        </Container>
        
    );
    
}