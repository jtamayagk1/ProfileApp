import React from "react";
import { Card } from "react-bootstrap";
import './CardAboutMe.css';

export default function CardAboutMe(props){

    return(
        <Card 
            className="mx-4 bg-dark cardaboutme"
            variant="round" 
            style={{   
                width:"260px",
                height:"320px"}}>
            <Card.Img className="cardaboutmeimg" src={props.src} style={{width:"100%", height:"9rem"}}/>
            <Card.Text className="mt-3">{props.title}</Card.Text>
            <Card.Text>{props.description}</Card.Text>
        </Card>
    );
}