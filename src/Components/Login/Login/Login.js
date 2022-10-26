import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap/esm';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import { BsGoogle,BsGithub } from "react-icons/bs";
import { toast } from 'react-toastify';


const Login = () => {
    const {signIn,googleSignIn,githubSignIn,setLoader}=useContext(AuthContext)
    const [error,setError]=useState('')
    const navigate=useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
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
            
            if(user.emailVerified){
              navigate(from, { replace: true });
             }
              else
              {
                  toast.error('Your email is not verified.Please verify?')
              }
                })
      
                .catch(error => {
                  console.error(error)
                  setError(error.message);
              })
              .finally(() => {
                  setLoader(false);
              })

    }

  const handleGoogleSignin=()=>{

    googleSignIn()
    .then((result) => {
    
        const user = result.user;
        console.log(user)
        
          navigate(from, { replace: true });
         
    
      }).catch((error) => {
        
        setError(error.message);
      })
      .finally(() => {
          setLoader(false);
      })
  }

  const handleGithubSignin=()=>{
    githubSignIn()
    .then((result) => {
       
        const user = result.user;
        console.log(user)
        navigate(from, { replace: true });
        // ...
      }).catch((error) => {
        
        setError(error.message);
              })
              .finally(() => {
                  setLoader(false);
              })
  }


  
    return (
   
        
    <div className='shadow p-2 border rounded mx-auto w-25 mt-5 mb-5 main' >
        <h1 className="sign">Login</h1>
        <Form className='mx-auto container form1' onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        <p className='text-danger'>{error}</p>
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