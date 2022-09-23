import React, { useState } from "react";
import { Card } from "react-bootstrap";

export default function SkillItem(props){
    var rand = Math.floor(Math.random() * 4);
    var colors = ['#590696', '#4700D8', '#2FA4FF', '#FF008E']
    console.log(typeof(colors[rand]))
    return(
        <Card 
            className="m-2 py-2 px-2 text-center" 
            style={{backgroundColor:colors[rand]}}>
            {props.name}
        </Card>
    );
}