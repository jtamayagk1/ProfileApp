import React from "react";
import { Col, Container } from "react-bootstrap";
import SkillItem from "./SkillItem";

var skills = [
    "AWS Development",
    "React", 
    "Bootstrap", 
    "Java", 
    "JavaScript",
    "HTML",
    "CSS"]

export default function Skills(){
    return(
        <Col className ="col-6 text-center">
            <h3>Skills</h3>
            <Container className="d-inline-flex flex-wrap">
                {skills.map(s => 
                    <SkillItem name={s}/>
                )}
            </Container>
        </Col>
    );
}