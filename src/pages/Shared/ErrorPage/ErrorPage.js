import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='relative'>
            <img className='w-screen h-screen' src="assets/error.jpg" alt="" />
            <Link className='absolute underline font-bold text-red-500 top-5 left-5' to='/'>Home</Link>
        </div>
    );
};

export default ErrorPage;