import React from "react";
import './Navbar.css'

export default function Navbar(){
    return(
        <ul class="navbar">
            <li class="navItem"><a href="work.html" class="navLink">Work</a></li>
            <li class="navItem"><a href="contact.html" class="navLink">Contact</a></li>
            <li class="navItem"><a href="index.html" class="navLink active">Home</a></li>
        </ul>
    );
}