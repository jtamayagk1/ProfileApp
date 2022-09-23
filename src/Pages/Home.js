import React from "react";
import AboutMe from "../Components/AboutMe";
import Certifications from "../Components/Certifications";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills";
import Title from "../Components/Title";
import { Container, Row } from "react-bootstrap";

export default function Home(){
    return(

        <Container className="p-2 m-auto">
            <Title/>
            <AboutMe/>
            <Experience/>
            <Container className="">
                <Row>
                    <Certifications/>
                    <Skills/>
                </Row>
            </Container>
        </Container>
        
    );
    
}