import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesCards from './ServicesCards';

const Services = () => {
    const [services, setServices] = useState(null)

    useEffect(() => {
        fetch('https://storyteller-server.vercel.app/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='lg:w-11/12 my-28 mx-auto'>
            <Helmet>
                <title>Services-Storyteller</title>
            </Helmet>
            {
                services ?

                    <div>
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
                    </div> :
                    <div className='flex justify-center items-center'>
                        <progress className="progress h-20 w-56"></progress></div>
            }
        </div>
    );
};

export default Services;