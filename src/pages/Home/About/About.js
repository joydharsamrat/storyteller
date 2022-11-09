import React, { useRef } from 'react';
import './about.css'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <div className=' w-11/12 mx-auto my-20 '>
            <h1 className='text-5xl text-center mb-5 header'>About Me</h1>
            <div ref={ref} className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                <PhotoProvider>
                    <motion.div initial={{ x: 0 }}
                        animate={isInView ? 'none' : { x: '-100vw' }}
                        transition={{ duration: .5 }}
                        className='h-[80vh]'>
                        <PhotoView src='assets/photographer.jpg'>
                            <img className='w-full h-full about-img' src="assets/photographer.jpg" alt="" />
                        </PhotoView>
                    </motion.div>
                </PhotoProvider>
                <motion.div
                    initial={{ x: 0 }}
                    animate={isInView ? 'none' : { x: '100vw' }}
                    transition={{ duration: .5 }}
                    className='bg-sky-300 text-white about-container p-10 flex flex-col justify-center gap-10'>
                    <h2 className='text-3xl font-bold'>I'm Evan Kelley.</h2>
                    <p className='text-lg font-medium'>I'm a professional wedding photo and videographer. I'm doing this for a long time. <br /> <br />
                        I document the event and capture candid shots of loved ones and guests that will last a lifetime. From candid family portraits to beautifully composed formal shots, I will be capturing every beautiful and joyous detail.
                    </p>
                    <p className='flex gap-5 justify-center'>
                        <FaFacebook className='text-2xl text-blue-600'></FaFacebook>
                        <FaInstagram className='text-2xl text-rose-700'></FaInstagram>
                        <FaLinkedin className='text-2xl text-blue-800'></FaLinkedin>

                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;