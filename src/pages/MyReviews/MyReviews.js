import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    const { user } = useContext(authContext);
    const [reviews, setReviews] = useState([]);

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
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email, reviews])


    const handelReviewDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
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
    return (
        <div className='my-20 w-11/12 mx-auto'>
            <div>
                <h1 className='header text-center text-4xl my-5'>My Reviews</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review} handelReviewDelete={handelReviewDelete}></ReviewCard>)
                }

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyReviews;