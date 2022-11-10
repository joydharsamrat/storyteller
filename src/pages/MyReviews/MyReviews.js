import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

const MyReviews = () => {
    const { user, logOut } = useContext(authContext);
    const [reviews, setReviews] = useState([]);
    const [edit, setEdit] = useState(false)

    const notify = () => toast("Successfully Deleted", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    useEffect(() => {
        fetch(`https://storyteller-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('story-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email, edit, logOut,])


    const handelReviewDelete = (id) => {
        fetch(`https://storyteller-server.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    notify()
                    const remaining = reviews.filter(review => review._id !== id)
                    setReviews(remaining)
                }
            })
    }

    const handelEditReview = (id, text) => {
        const reviewText = { text: text }
        fetch(`https://storyteller-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewText)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    setEdit(true)
                }
            })
    }



    return (
        <div className='my-20 w-11/12 mx-auto'>
            <Helmet>
                <title>My-Reviews-Storyteller</title>
            </Helmet>
            <div>
                <h1 className='header text-center text-4xl my-5'>My Reviews</h1>
            </div>
            {
                reviews?.length > 0 ?
                    <div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                            {
                                reviews.map(review => <ReviewCard
                                    key={review._id}
                                    review={review}
                                    handelReviewDelete={handelReviewDelete}
                                    handelEditReview={handelEditReview}
                                ></ReviewCard>)
                            }

                        </div>
                        <ToastContainer></ToastContainer>
                    </div>
                    :
                    <div>
                        <h1 className='text-5xl text-amber-500 font-bold'>No reviews were added !!!</h1>
                    </div>
            }
        </div>
    );
};

export default MyReviews;