import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='relative'>
            <img className='w-screen h-screen' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1668098532~exp=1668099132~hmac=fb17c8e9ce590274892bc9ab97a60c1ac859823ab65b53341d6ee84083777aaf" alt="" />
            <Link className='absolute underline font-bold text-red-500 top-5 left-5' to='/'>Home</Link>
        </div>
    );
};

export default ErrorPage;