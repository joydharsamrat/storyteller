import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCards from './ServicesCards';

const Services = () => {
    const services = useLoaderData();

    return (
        <div className='lg:w-11/12 my-28 mx-auto'>
            <div>
                <h1 className='text-5xl font-bold text-center header'>Our Services</h1>
                <p className='text-xl font-semibold text-center'>We offer so many service packages at a reasonable price. <br /> Choose the best one for you.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-20 lg:w-11/12 mx-auto'>
                {
                    services?.map(service => <ServicesCards
                        key={service._id}
                        service={service}
                    ></ServicesCards>)
                }
            </div>
        </div>
    );
};

export default Services;