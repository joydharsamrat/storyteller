import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { motion, useInView } from 'framer-motion'

const SecondSection = () => {
    const [services, setServices] = useState([]);
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div ref={ref} className='py-1 my-40 w-11/12 mx-auto overflow-hidden'>
            <h1 className='text-5xl font-bold text-center header'>Service Packages</h1>
            < motion.div initial={{ x: 0 }} animate={isInView ? 'none' : { x: '100vw' }} transition={{ duration: .5 }} className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}

                    ></ServiceCard>)
                }
            </motion.div>
            <div className='mt-10 flex items-center justify-center'>
                <div className='h-1 bg-sky-300 w-[40%]'></div>
                <Link to='/services'> <button className='hover:bg-sky-500 px-8 py-2 font-bold text-white bg-sky-300 contact-btn'>All Packages</button></Link>
                <div className='h-1 bg-sky-300 w-[40%]'></div>
            </div>
        </div>
    );
};

export default SecondSection;