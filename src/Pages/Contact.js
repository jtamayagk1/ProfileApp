import React, {useState} from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import './Contact.css'

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
        <>
        <Container className="bg-white rounded my-3 p-4 w-50">
            <Alert className="" variant="success" show={show} dismissible onClose={() => setShow(false)}>
                <Alert.Heading>Email Sent!</Alert.Heading>
            </Alert>
            <h1 className="contacttitle">Send me an email</h1>
            <Form>
                <Form.Group className="mb-2">
                    <Form.Label className="text-black">Subject</Form.Label>
                    <Form.Control onChange={(e) => setSubject(e.target.value)}/>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label className="text-black">Email</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e) => setBody(e.target.value)} placeholder="What would you like to say..."/>
                </Form.Group>
                <Form.Group className="text-center">
                    <Button className="emailbuttom rounded" onClick={handleSubmit}>Send</Button>
                </Form.Group>
            </Form>
        </Container>
        </>
    );
}