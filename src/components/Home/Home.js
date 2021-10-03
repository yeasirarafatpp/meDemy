import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';

const Home = () => {
    // Load the course and set in state
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./home.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return (
        <Container>
            <div className="pt-5 pb-5 d-flex align-items-center">
                <div>
                    <img src="https://i.ibb.co/mHMPFrX/instructor.jpg" alt="instructor" />
                </div>
                <div className="ms-5">
                    <h2>Always something new to learn</h2>
                    <p>With courses added regularly to our catalog, you always get the latest skills. Courses from $8 through tomorrow.</p>
                </div>
            </div>
            <h3>Our Best Selling Course</h3>
            <div className="d-flex">
                {
                    courses.map(course => <SingleCourse key={course.key} course={course}></SingleCourse>)
                }
            </div>
        </Container>
    );
};

export default Home;