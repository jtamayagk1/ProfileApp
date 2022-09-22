import React from "react";
import './Home.css'
import AboutMe from "../Components/AboutMe";
import Certifications from "../Components/Certifications";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills";

export default function Home(){
    return(
        <div>
            <div>
                <div className="titleContainer">
                    <h1>Jonathan Amaya</h1>
                </div>
            </div>
            <div className="page">
                <div>
                    <AboutMe/>
                </div>
                <div>
                    <Experience/>
                </div>
                <div className="certandskills">
                    <Certifications/>
                    <Skills/> 
                </div>
            </div>
            
        </div>
    );
    
}