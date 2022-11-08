import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { GoArrowSmallRight } from "react-icons/go";

const ServiceDetails = () => {
    const service = useLoaderData();
    const { img, name, details, price, time, page, video, _id } = service

    const handelAddReview = (event) => {
        event.preventDefault();
        const review = event.target.review.value;

        console.log(review)
    }
    return (
        <div className='lg:w-11/12 mx-auto my-28'>
            <div className="card lg:card-side bg-base-100 shadow-lg">
                <figure className='lg:w-1/2'><img src={img} alt="Album" /></figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p>{details}</p>
                    <p className='text-2xl font-semibold'>price: <span className='text-rose-300'>${price}</span></p>
                    <div className="">
                        <ul>
                            <li className='flex items-center gap-3 font-semibold text-xl'><GoArrowSmallRight /> A Certified Photographer for {time} Hours</li>
                            <li className='flex items-center gap-3 font-semibold text-xl'><GoArrowSmallRight /> Video Coverage for {time} Hours</li>
                            <li className='flex items-center gap-3 font-semibold text-xl'><GoArrowSmallRight /> A {page} Page, 10X10 Wedding Photo Album</li>
                            <li className='flex items-center gap-3 font-semibold text-xl'><GoArrowSmallRight /> {video}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className='text-xl font-semibold underline'>Reviews</h1>
                <form onSubmit={handelAddReview} className='my-5'>

                    <textarea name='review' className="textarea textarea-bordered w-full" placeholder="Add a review"></textarea>

                    <input className='  hover:bg-sky-500 px-8 py-2 font-bold text-white bg-sky-300 contact-btn' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;