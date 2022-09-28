import React from "react";
import { Container, Row } from "react-bootstrap";
import CardAboutMe from "./CardAboutMe";
import frontend from "../Images/frontend.png";
import backend from "../Images/backend.jpg";
import cloud from "../Images/cloudeve.jpg";


export default function AboutMe(){
    return(
        <Row className="my-3 text-center">
            <h3>Full-Stack Developer </h3>
            <Container className="justify-content-center mt-4">
                <Row className="d-flex justify-content-center">
                <CardAboutMe src={frontend} title="Front end" description="Responsive websites using HTML, CSS, JavaScipt, and Bootstrap"/>
                <CardAboutMe src={backend} title="Back end" description="Use of Java to build API's and connect to backend infrastructure"/>
                <CardAboutMe src={cloud} title="Cloud" description="Focus on utilizing AWS to build highly avaliable and durable applications"/>
                </Row>
            </Container>
        </Row>

    );
}