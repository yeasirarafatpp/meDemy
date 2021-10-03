import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch('./allCourse.JSON')
            .then(res => res.json())
            .then(data => setAllCourses(data));
    }, []);
    return (
        <Container>
            <h3>Here is Our All Course</h3>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(3, 1fr)', 'gridGap': '15px' }}>
                {
                    allCourses.map(course => <SingleCourse course={course} key={course.key}></SingleCourse>)
                }
            </div>
        </Container>
    );
};

export default Courses;