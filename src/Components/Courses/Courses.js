import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Course from './Course/Course';

const Courses = () => {
    const courses=useLoaderData()
    console.log(courses)
   
    return (
        <Container className='mt-5'>
         
      <Row className="justify-content-md-center">
        <Col xs='12' lg="3">
<h3 className='text-center'>Courses</h3>
        {
            courses.map(course=><li >
               <Link className='text-decoration-none fs-5 fw-bolder' to={`course/${course.id}`}>{course.name}</Link>
            </li>)
        }
        </Col>
        
        <Col xs='12'  lg="9">
        <h1 className='text-center fs-1 mb-5 fw-bold'>Courses we are offering for you</h1>
          <div className='border rounded '>
          <Row xs={1} md={2}  className='p-2 g-4 d-flex justify-content-center'>
            {
                
                    courses.map(course=><Course key={course.id} course={course}></Course>)
                

            }
             </Row>
          </div>
        </Col>
      </Row>
     
    </Container>
    )

};

export default Courses;