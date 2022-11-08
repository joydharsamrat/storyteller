import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
    const { user } = useContext(authContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email, reviews])
    return (
        <div>
            {
                reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
            }
        </div>
    );
};

export default MyReviews;