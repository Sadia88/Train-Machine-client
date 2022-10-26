import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Course from './Course/Course';

const Courses = () => {
    const courses=useLoaderData()
   
    return (
        <Container className='mt-5'>
      <Row className="justify-content-md-center">
        <Col xs='12' lg="3">

        {
            courses.map(course=><p>
               <Link to={`course/${course.id}`}>{course.name}</Link>
            </p>)
        }
        </Col>
        
        <Col xs='12'  lg="9">
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