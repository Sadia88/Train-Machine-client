import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const details=useLoaderData()
    const {name,course_fee}=details
    toast.success('Please fill up the from to enroll the course ')
    return (
        <div className='mt-5 text-center'>
            <h1>Course fee of {name} is {course_fee} Taka</h1>
        </div>
    ); 
};

export default CheckOut;