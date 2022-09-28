import React, {useState} from "react";
import { Tabs, Tab, Row, Col, Nav } from "react-bootstrap";
import arrowleft from "../Images/arrowleft.png";
import arrowright from "../Images/arrowright.png";
import "./Experience.css"

export default function Experience(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const prev = <img src={arrowleft} />
    const next = <img src={arrowright} />

    return(
        <Row className="py-3 justify-content-center">
            <h3 className="subtitle text-center">Work Experience</h3>
            {/* <Col className="col-8 px-5">
            <Tabs className="">
                <Tab eventKey="skillmatrix" title="Skill Matrix">
                    <p>Caceaveav</p>
                </Tab>
                <Tab eventKey="power platform" title="Skill Matrix">
                    <p>Caceaveav</p>
                </Tab>
            </Tabs>
            </Col> */}
            <Col className="col-9 expcol py-3">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="mx-auto">
                <Row>
                    <Col md={3} >
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Skill Matrix</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Power Platform</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Profile App</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col md={9} className="py-2">
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <p>
                                My team and I designed and build a React.js 
                                application with HTML, CSS, React Bootstrap, and C# backend.
                            </p>
                            <p>
                                The purpose of the appliation was to be a place where 
                                SoftwareONE employees could select their top skills and 
                                display them for their coworkers to see. This would make it 
                                easier to find collegues with skills set that would useful on 
                                new projects
                            </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <p>
                                I was apart of a team that converted 16 forms 
                                to Microsoft Forms. Upon submission each response was sent to a 
                                Power Automate flow that inserted data into a Sharepoint list. 
                                The Power Automate flow also extracted attachments sent with 
                                the form and attached them to an email that was sent employees. 
                                We also built a Microsoft Power App for each form. Inside the 
                                Power App you could see each form submission and had the ability 
                                to drill down into a specific response to see all question and answer pairs.
                            </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <p>
                                What you're looking at right now!
                            </p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </Col>
        </Row>
    );
}