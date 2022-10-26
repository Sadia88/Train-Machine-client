import React, { useState } from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';
import ReactSwitch from 'react-switch';
import ThemeContext from '../../../contexts/ThemeContext';


const Header = () => {
const {logOut,user,UserProfile}=useContext(AuthContext)
const [userName,setUserName]=useState('')
    console.log('navbar',user,UserProfile)

    const hover=()=>{
        setUserName(user?.displayName)
    }
    const unHover=()=>{
        setUserName('')
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="gray">
      <Container className='d-flex justify-content-between align-items-center'>
        <Navbar.Brand className='me-5' ><Link to='/'  className='fs-1 p-4 pe-5  text-decoration-none fw-bold'>Train Machine</Link></Navbar.Brand>
    <>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='me-0'/>
        <Navbar.Collapse id="responsive-navbar-nav" className='me-0 flex-basis-0 flex-grow-0' >
         
          <Nav className='ms-5 fw-bolder' >
            
          <Link to="/home" className='p-2 ms-5 text-decoration-none'>Home</Link>
            <Link to="/courses" className='p-2 text-decoration-none'>Courses</Link>
             <Link to="/faq" className='p-2 text-decoration-none'>FAQ</Link>
            <Link to="/blog" className='p-2 text-decoration-none'>Blog</Link>
            {
                user?.uid?
                <Button variant="outline-primary" className=' p-2 me-2'  onClick={logOut}>Log Out</Button>
            :
           <> <Link to="/login" className='p-2 text-decoration-none'>Login</Link>
           <Link to="/register" className='p-2 text-decoration-none me-2'>Register</Link></>
            }

            <>
            {
                user?.photoURL ? <>  <Image onMouseEnter={hover} onMouseLeave={unHover} roundedCircle src={user?.photoURL} style={{height:'35px',}}>
                    
                </Image> {userName} </> : <FaUserCircle></FaUserCircle>
              }
            </>
          <div className='p-2'>
          
          <ThemeContext></ThemeContext>
          </div>
          </Nav>
        </Navbar.Collapse>
    </>


    
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;