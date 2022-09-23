import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Footer(){
    return(
        <Container className="bg-dark fluid" relative="bottom" style={{maxWidth:"100%"}}>
            <Row className="bg-warning text-center">
                <Col className="col-12 col-md-4 bg-primary">
                    <h2>test</h2>
                </Col>
                <Col className="col-12 col-md-4 bg-secondary">
                    <h2>test</h2>
                    <MDBBtn outline color="light" floating className="m-1">
                        <MDBIcon fab icon="github"/>
                    </MDBBtn>
                </Col>
                <Col className="col-12 col-md-4">
                    <h2>test</h2>
                </Col>
            </Row>
        </Container>
    );
}