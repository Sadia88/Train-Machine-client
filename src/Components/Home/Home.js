import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <Row className='mt-5 mx-auto text-center container d-flex'>
            <Col sm={8}>
            <h1>Learn From Anywhere, Anyplace , AnyTime </h1>
            <h1 className='text-center'> & </h1>
            <h1>Become a Machine Learning Expertise.</h1>
            <p>Master the skills to get computers to understand, process, and manipulate human language and human thinking. Build models on real data, and get hands-on experience with sentiment analysis, machine translation, and more</p>
            <Button variant='outline-primary p-3  shadow-lg px-5'><Link className='text-decoration-none fw-bold text-dark px-5' to='/login'>Get Started</Link></Button>
            </Col >
            <Col sm={4}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFlA28MHPwz0np5h8cfYjaPlFqkZ5E3MJSw&usqp=CAU" style={{ height: '100%' }} alt="" srcset="" />
            </Col>
        </Row>
    );
};

export default Home;