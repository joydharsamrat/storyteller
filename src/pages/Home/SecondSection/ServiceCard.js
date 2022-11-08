import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, name, details, price } = service
    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details.length > 100 ?
                    details.slice(0, 100) + '....'
                    : details}</p>
                <div className="flex items-center">
                    <p >Price: <span className='font-bold text-rose-300'>${price}</span></p>
                    <button className="hover:bg-sky-500 px-8 py-2 font-bold text-white bg-sky-300 contact-btn">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;