import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion'

const SecondSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div className='py-1 my-52 w-11/12 mx-auto'>
            <motion.h1 initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 1 }} className='text-5xl font-bold text-center header'>Service Packages</motion.h1>
            < motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ duration: 1 }} className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}

                    ></ServiceCard>)
                }
            </motion.div>
            <div className='mt-10 flex items-center justify-center'>
                <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ delay: 2, duration: 0.5 }} className='h-1 bg-sky-300 w-[40%]'></motion.div>
                <Link> <button className='hover:bg-sky-500 px-8 py-2 font-bold text-white bg-sky-300 contact-btn'>All Packages</button></Link>
                <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ delay: 2, duration: 0.5 }} className='h-1 bg-sky-300 w-[40%]'></motion.div>
            </div>
        </div>
    );
};

export default SecondSection;