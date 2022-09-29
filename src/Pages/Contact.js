import React, {useState} from "react";
import { Container, Form, Button, Alert, Row, Nav } from "react-bootstrap";
import './Contact.css';

export default function Contact(){

    const [subject, setSubject] = useState();
    const [body, setBody] = useState(); 
    const [show, setShow] = useState(false);

    const handleSubmit = () => {
        console.log(subject + " " + body);

        fetch("https://iit3zgbhth.execute-api.us-east-2.amazonaws.com/sendEmail", {
            mode: "no-cors",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                subject: subject,
                message: body,
                date: new Date(),
            })
        });
        setShow(true);
    }

    return(
        <Container className="d-flex-inline">
            <Form className="section m-4 p-4">
                <Alert className="" variant="success" show={show} dismissible onClose={() => setShow(false)}>
                    <Alert.Heading>Email Sent!</Alert.Heading>
                </Alert>
                    <h1 className="title">Send me an email</h1>
                    <Form.Group className="my-2">
                        <Form.Label className="text">Subject</Form.Label>
                        <Form.Control onChange={(e) => setSubject(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="my-2">
                        <Form.Label className="text">Message</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => setBody(e.target.value)} placeholder="What would you like to say..."/>
                    </Form.Group>
                <Container className="text-center">
                <Button className="button" onClick={handleSubmit}>Send</Button>
                </Container>
            </Form>
        </Container>
    );
}