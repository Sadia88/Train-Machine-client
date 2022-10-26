import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container d-flex text-align-center align-item-center m-5 '>
            <div className='  mx-auto'>
            <img src="https://bariton-react.envytheme.com/images/404.png" alt="" />
            <h1>Page Not Found</h1>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <Button variant='danger'><Link to='/home' className='text-decoration-none fw-bold'>Go Home</Link></Button>
            </div>
        </div>
    );
};

export default NotFound;