import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-secondary text-light  mt-5 mb-0 ' style={{ height: '20%' ,width: '100%'}}>
            

            <div className='d-flex justify-content-around'>
            <div className='py-5 d-flex flex-column ps-3'>
                <h3 className='text-center'>Quick links</h3>
                <Link to="/home" className='  text-decoration-none text-light '>Home</Link>
                <Link to="/courses" className=' text-decoration-none text-light'>Courses</Link>
                <Link to="/faq" className=' text-decoration-none text-light'>FAQ</Link>
                <Link to="/blog" className=' text-decoration-none text-light'>Blog</Link>


</div>
            <div  className='p-5'>
                <h3 className='text-center'>Contacts</h3>
                <p><strong>Address: </strong> Fatehabad, Hathazari, Chittagong</p>
                <p><strong>Email: </strong> sadiaSharmin.cse@std.cu.ac.bd</p>
                <p><strong>Phone: </strong> +08801511122233</p>
            </div>
            <div  className='py-5 ps-3'>
                <h3 className='text-center'>Learn</h3>
                <p>Machine learning</p>
                <p>Deep Learning</p>
                <p>Data Analysis</p>
                <p>Computer Vision</p>
            </div>
           
            </div>
           <div className=' px-4 pb-2 mx-auto d-flex justify-content-between align-item-center text-center fw-bold '>
           <p >Copyright © 2022 Train Machine. <small> All Rights Reserved Train Machine.</small></p>
           <p>Privacy Policy - Terms & Conditions</p>
           
           </div>
        </div>
    );
};

export default Footer;