import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const CheckOut = () => {
    const details=useLoaderData()
    const {user}=useContext(AuthContext)
    const {name,course_fee}=details
    toast.success('Please fill up the from to enroll the course ')
    return (
        <div className='mt-5 text-center container'>
            <h1>Course fee of {name} is {course_fee} Taka</h1>
<hr />
            <div>
    <Form className='border rounded mt-5 p-5 w-50  mx-auto'>
    <h1>Billing details</h1>
    <Form.Group className="mb-3 d-flex mx-auto text-center" controlId="formBasicPassword">
       <div className='pe-5'>
       <Form.Label>First Name</Form.Label>
        <Form.Control type="name" placeholder="First Name" />
       </div>
        <div>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="name" placeholder="Last Name" />
        </div>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" defaultValue={user?.email}/>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="name" placeholder="Enter Address" />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="Phone" placeholder="Enter Phone Number" />
      </Form.Group>
      <Form.Text className="text-muted mb-3 mt-3">
        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
        </Form.Text>

    
     
      
      <Button variant="primary" type="submit" className='text-uppercase mt-5'>
       Continue to payment
      </Button>
    </Form>
  

            </div>
        </div>
    ); 
};

export default CheckOut;