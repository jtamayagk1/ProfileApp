import React from "react";
import awsPractioner from '../Images/aws-certified-cloud-practitioner.png';
import awsDeveloper from '../Images/aws-certified-developer-associate.png';
import ms365 from '../Images/microsoft-365-certified-fundamentals.png';
import azure from '../Images/microsoft-certified-azure-fundamentals.png';
import scrumDev from '../Images/professional-scrum-developer.png';
import { Col } from "react-bootstrap";
export default function Certifications(){
    return(
        <Col className="col-12 col-lg-6 text-center my-3">
            <h3 className="subtitle">Certifications</h3>
            <div>
                <a href="https://www.credly.com/badges/56dd2c6b-9747-487d-92aa-133bd1a0e910/public_url">
                <img src={awsPractioner} alt="AWS Cloud Practitioner"/>
                </a>
                <a href="https://www.credly.com/badges/87e4a5b7-8cc6-40be-8fa4-88d71d33afb8/public_url">
                <img src={awsDeveloper} alt="AWS Associate Developer"/>
                </a>
                <a href="https://www.credly.com/badges/0033b2ff-d195-4bcc-a74c-f778d92b7554/public_ur">
                <img src={azure} alt="Microsoft Azure Fundamentals"/>
                </a>
                <a href="https://www.credly.com/badges/05beb4d4-7911-4e7c-9929-89e6b8a72b96/public_url">
                <img src={scrumDev} alt="Professional Scrum Developer"/>
                </a>
                <a href="https://www.credly.com/badges/45c7002d-c230-4711-bb03-e79ad8446c51/public_url">
                <img src={ms365} alt="Microsoft 365 Fundamentals"/>
                </a>
            </div>
        </Col>
    );
}