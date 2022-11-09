import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './ServiceCard.css'

const ServicesCards = ({ service }) => {
    const { img, name, details, price, _id } = service;
    return (
        <motion.div whileHover={{ scale: 1.1 }} className="card service shadow-lg">
            <PhotoProvider>
                <figure>
                    <PhotoView src={img}>
                        <img src={img} alt="Shoes" />
                    </PhotoView>
                </figure>

                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details.length > 100 ?
                        details.slice(0, 100) + '....'
                        : details}</p>
                    <div className="flex items-center">
                        <p >Price: <span className='font-bold text-rose-300'>${price}</span></p>
                        <Link to={`/serviceDetails/${_id}`}><button className="hover:bg-sky-500 px-8 py-2 font-bold text-white bg-sky-300 contact-btn">Details</button></Link>
                    </div>
                </div>
            </PhotoProvider>
        </motion.div>
    );
};

export default ServicesCards;