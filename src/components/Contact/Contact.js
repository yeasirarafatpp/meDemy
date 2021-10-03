import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container pt-3 pb-3">
            <div className="text-center w-75 mx-auto">
                <h2>Our origins</h2>
                <p>Growing up in a small Turkish village, Medemy founder Eren Bali had few educational opportunities — until he got a computer. Fueled by his dream to compete in mathematics, he used the internet to learn his way to a silver medal in the International Math Olympiad.</p>
                <p>After learning online changed his life, Eren partnered with co-founders Oktay Caglar and Gagan Biyani to achieve a common goal: to make quality education accessible to all.</p>
            </div>
            <div>
                <h2 className="text-center">You can contact with us</h2>
                <Form className="w-50 mx-auto">
                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Type Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button className="btn btn-primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;