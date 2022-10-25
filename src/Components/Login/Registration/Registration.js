import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';




const Registration = () => {
const {createUser,verifyEmail}=useContext(AuthContext)
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        const name=form.name.value
        const photoURL=form.photoURL.value
        console.log(name,email,password)

        createUser(email,password)
        .then((result) => {
            
            const user = result.user;

            console.log("Signed ",user)
            form.reset()
           
          })
          .catch((error) => {
            
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });

          verifyEmail()
          .then(() => {
            toast.success('Please check Your email for verification')
        
          });

    }
    return (
   
        
    <div className='shadow p-3 border rounded mx-auto w-25 mt-5 mb-5 '>
        <h1>Register</h1>
        <Form className='mx-auto container' onSubmit={handleSubmit}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        
      <Button variant="primary" type="submit">
        Register
      </Button>
      <p>Already have an account? <Link to='/login'>Login</Link></p>
    </Form>
    </div>
  
   
        
    );
};

export default Registration;