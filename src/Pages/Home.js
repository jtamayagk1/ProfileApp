import React, { useEffect, useState } from "react";
import Title from "../Components/Title";
import AboutMe from "../Components/AboutMe";
import Experience from "../Components/Experience";
import Certifications from "../Components/Certifications";
import Skills from "../Components/Skills";
import { Container, Row } from "react-bootstrap";
import sun from "../Images/sun.png"
import moon from "../Images/moon.png"

export default function Home(){
    const [source, setSource] = useState();

    useEffect(() => {
        if(document.body.classList.value === ''){
            setSource(moon);
        } else{
            setSource(sun);
        }
    },[])

    const handleClick = () => {
        if(source === moon){
            setSource(sun);
            document.body.classList.toggle('light')
        } else {
            setSource(moon);
            document.body.classList.toggle('light')
        }
        
    }
    return(

        <Container className="justify-content-center"
                style={{maxWidth:"100%", flex:"1"}}>
            <button className="themebtn me-3 position-absolute end-0" onClick={() => handleClick()} href="">
                <img className="" src={source} alt="theme toggle"/>
            </button>
            
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