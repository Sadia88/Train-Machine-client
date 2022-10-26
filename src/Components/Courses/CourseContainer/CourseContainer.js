import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Pdf from "react-to-pdf";
import {  BsFillBookmarkFill ,BsFillShareFill,BsStarFill,BsEyeFill} from "react-icons/bs";


const CourseContainer = () => {
    const ref = React.createRef()
    const courseDetails=useLoaderData()
    const {id,name,learners_enrolled,title,image_url,instructor,details,rating}=courseDetails
    return (


<div className='container m-5 text-center  mx-auto ' style={{ height: '50rem', width:'40rem' }}>
<div className='float-end'>
           <Pdf targetRef={ref} filename="fileName.pdf" className='text-align-center'>
        {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
         </Pdf>
           </div>
<div>
<div ref={ref} className='text-align-center mx-auto ps-5 '>
<h1>{name}</h1>
<Card className="mb-5 " >

      <Card.Header className='d-flex justify-content-between  align-items-center'>
        
           <div className='d-flex  justify-content-between align-items-center'>
           <Image 
            roundedCircle
             src={instructor?.img}  style={{height:'60px'}}>
            </Image>
            <div className='ps-3 align-items-center'>
                <h6 className='mb-0'>{instructor?.name}</h6>
                </div>
           </div>
           <div>
            <p><strong>Enrollment Start :</strong> {instructor?.enrollment_start}</p>
            <p><strong>Enrollment End :</strong> {instructor?.enrollment_end}</p>
           </div>
          

      </Card.Header>
      <Card.Body>
        <Card.Title><h4>{title}</h4></Card.Title>
        <Card.Img variant="top" src={image_url} style={{ height: '15rem', width:'100%' }}   />
        <Card.Text>
     <p>{details}</p>
     <div className=" d-flex justify-content-between">
     <div>
         <BsStarFill className='text-warning'></BsStarFill>
         <span className='ps-2'>{rating}</span>
        </div>
        <div >
            <BsEyeFill></BsEyeFill>
            <span className='ps-2'>{learners_enrolled}</span>
        </div>

     </div>
     
        </Card.Text>
        
      </Card.Body>
      <Card.Footer >
    

        <Button variant='dark'><Link to={`/courses/course/checkout/${id}`} className='text-decoration-none fw-bolder'>Get premium access</Link></Button>
      </Card.Footer>
    </Card>
</div>
</div>
          </div>
        
    );
};

export default CourseContainer;