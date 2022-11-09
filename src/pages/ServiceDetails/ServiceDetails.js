import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GoArrowSmallRight } from "react-icons/go";
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import Reviews from './Reviews';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([]);
    const service = useLoaderData();
    const [render, setRender] = useState(false)
    const { user } = useContext(authContext);
    const { img, name, details, price, time, page, video, _id } = service
    const notify = () => toast("Review added", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    const handelAddReview = (event) => {
        event.preventDefault();
        const reviewText = event.target.review.value;

        const review = {
            reviewText,
            serviceId: _id,
            userEmail: user.email,
            userName: user.displayName,
            userPhoto: user.photoURL,
            serviceName: name
        }



        fetch('https://storyteller-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    notify()
                    setRender()
                    event.target.reset();

                }
            })
    }



    useEffect(() => {
        fetch(`https://storyteller-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id, render])

    return (
        <div className='lg:w-11/12 mx-auto my-28'>
            <Helmet>
                <title>Service-details-Storyteller</title>
            </Helmet>
            <div className="card lg:card-side bg-base-100 shadow-lg">
                <PhotoProvider>
                    <figure className='lg:w-1/2'>
                        <PhotoView src={img}>
                            <img src={img} alt="Album" />
                        </PhotoView>
                    </figure>
                </PhotoProvider>
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

            <div>
                {
                    user?.uid ?
                        <div className='mt-10'>
                            <h1 className='text-xl font-semibold underline'>Reviews</h1>
                            <form onSubmit={handelAddReview} className='my-5'>

                                <textarea name='review' className="textarea textarea-bordered w-full" placeholder="Add a review"></textarea>

                                <input className='  hover:bg-sky-500 px-8 py-2 font-bold text-white bg-sky-300 contact-btn' type="submit" value="Add" />
                            </form>
                        </div>
                        :
                        <div className='my-10 bg-rose-200 p-5 w-fit rounded-lg text-white'>
                            <p>Please login to add a review . <Link className='text-blue-600 underline' to='/login'>Login</Link></p>
                        </div>
                }
            </div>
            <div className='grid my-10 grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ServiceDetails;