import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "mdb-react-ui-kit";

import Rating from '@mui/material/Rating';

export default function SkillItem(props){
    var rand = Math.floor(Math.random() * 7);
    var colors = ['#FF9494', '#FFD1D1', '#D2DAFF', '#AAC4FF', '#CDF0EA','#ECC5FB', '#FAF4B7']
    console.log(props)
    return(
        <Card 
            className="m-2 py-2 px-2 text-center justify-content-center" 
            style={{backgroundColor:colors[rand], color:'black'}}
            >
            {props.skill.skill}
            <Rating defaultValue={props.skill.stars} readOnly='true' style={{color:"black"}} />
        </Card>
    );
}