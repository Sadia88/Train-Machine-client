import React from 'react';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useLoaderData } from 'react-router-dom';
import {  BsStarFill,BsFillPersonCheckFill} from "react-icons/bs";

const Course = ({course}) => {

    
    const {title,image_url,learners_enrolled,rating,id}=course
    
    return (
        


        
        
          <Col className=''>
            <Card>
              <Card.Img variant="top" style={{ height: '15rem', width:'100%' }} src={image_url} />
              <Card.Body>
                <Card.Title className='fs-6 fw-semibold'>{title}</Card.Title>
                <Card.Text className='d-flex justify-content-between'>
                 <span> <BsFillPersonCheckFill></BsFillPersonCheckFill>  {learners_enrolled}</span>
                 <span><BsStarFill className='text-warning'></BsStarFill>  {rating}</span>

                
        
                </Card.Text>
                <Button variant="outline-primary " className='d-flex justify-content-between mx-auto px-5 shadow align-items-center'><Link className=' text-decoration-none fw-bolder text-dark text-uppercase' to={`course/${id}`} >View Details</Link></Button>
                
              </Card.Body>
            </Card>
          </Col>
       
     




        
    );
};

export default Course;