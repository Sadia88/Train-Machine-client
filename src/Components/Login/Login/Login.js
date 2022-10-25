import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap/esm';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import { BsGoogle,BsGithub } from "react-icons/bs";
const Login = () => {
    const {signIn,googleSignIn,githubSignIn}=useContext(AuthContext)
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target
        const email=form.email.value
        const password=form.password.value
     
       
        console.log(email,password)

        signIn(email,password)
        .then((result) => {
            
            const user = result.user;
            console.log(user)
            form.reset()
           
          })
          .catch((error) => {
            
            const errorMessage = error.message;
            console.log(errorMessage)
          });

    }

  const handleGoogleSignin=()=>{

    googleSignIn()
    .then((result) => {
    
        const user = result.user;
        console.log(user)
    
      }).catch((error) => {
        
        const errorMessage = error.message;
       console.log(errorMessage)
      });
  }

  const handleGithubSignin=()=>{
    githubSignIn()
    .then((result) => {
       
        const user = result.user;
        console.log(user)
        // ...
      }).catch((error) => {
        
        const errorMessage = error.message;
        console.log(errorMessage)
       
      });
  }


  
    return (
   
        
    <div className='shadow p-2 border rounded mx-auto w-25 mt-5 mb-5 '>
        <h1 >Login</h1>
        <Form className='mx-auto container' onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <p>Don't have an account? <br /> <Link to='/register'>Create New Account</Link></p>

      <ButtonGroup >
            <Button variant="outline-primary" className='m-2' onClick={handleGoogleSignin} ><BsGoogle></BsGoogle> Login with Google</Button><br />
            <Button variant="outline-dark" className='m-2' onClick={handleGithubSignin}><BsGithub></BsGithub>Login with Github</Button>
      
    </ButtonGroup>
    </Form>
    </div>
  
   
        
    );
};

export default Login;