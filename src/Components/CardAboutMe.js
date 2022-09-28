import React from "react";
import { Col, Card } from "react-bootstrap";
import './CardAboutMe.css';

export default function CardAboutMe(props){

    return(
        <Col className="col-12 col-md-6 col-lg-3 mx-auto">
            <Card 
                className="bg-dark cardaboutme mx-auto my-3"
                variant="round" 
                style={{   
                    width:"260px",
                    height:"320px"}}>
                <Card.Img className="cardaboutmeimg" src={props.src} style={{width:"100%", height:"9rem"}}/>
                <Card.Text className="mt-3">{props.title}</Card.Text>
                <Card.Text>{props.description}</Card.Text>
            </Card>
        </Col>
        
    );
}