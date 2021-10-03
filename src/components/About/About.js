import React from 'react';
import { useHistory } from 'react-router';

const About = () => {
    let back = useHistory();
    const coursePage = () => {
        back.push('/courses');
    }
    return (
        <div className="container pt-3 pb-3">
            <div className="bg-success text-center text-white p-5">
                <h2>We just keep growing</h2>
                <p>Our global community and our course catalog get bigger every day.Check out our latest numbers as of June 2021.</p>
                <div className="d-flex justify-content-evenly">
                    <div>
                        <h2>44M+</h2>
                        <p>Learners</p>
                    </div>
                    <div>
                        <h2>75</h2>
                        <p>Languages</p>
                    </div>
                    <div>
                        <h2>65K+</h2>
                        <p>Instructors</p>
                    </div>
                    <div>
                        <h2>44M+</h2>
                        <p>Learners</p>
                    </div>
                    <div>
                        <h2>183K+</h2>
                        <p>Courses</p>
                    </div>
                    <div>
                        <h2>8,600+</h2>
                        <p>Enterprise customers</p>
                    </div>
                </div>
            </div>
            <div className="text-center pt-5">
                <p>
                    We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.
                </p>
                <button onClick={coursePage} className="btn btn-primary">See Courses</button>
            </div>
        </div>
    );
};

export default About;