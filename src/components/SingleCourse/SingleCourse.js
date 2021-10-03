import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const SingleCourse = (props) => {
    const { name, img, price, enrolled, trainer } = props.course;
    return (
        <Container>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Course Price: ${price}
                            <br />
                            Trainer: {trainer}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> Total {enrolled} Student Enrolled</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>

    );
};

export default SingleCourse;