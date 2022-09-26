import React from "react";
import { Col, Container } from "react-bootstrap";
import SkillItem from "./SkillItem";

var skills = [
    {skill:"AWS", stars: 3},
    {skill:"React", stars:2},
    {skill:"Java", stars:2},
    {skill:"Bootstrap", stars:1},
    {skill:"Scrum", stars:4},
    {skill:"JavaScript",stars:2},
    {skill:"HTML", stars:3},
    {skill:"CSS", stars:3},
    {skill:"Power Apps", stars:2},
    {skill:"Power Automate",stars:1},
]

export default function Skills(){
    return(
        <Col className ="col-12 col-lg-6 text-center">
            <h3>Skills</h3>
            <Container className="d-flex flex-wrap justify-content-center">
                {skills.map(s => 
                    <SkillItem skill={s} key={Math.random()}/>
                )}
            </Container>
        </Col>
    );
}