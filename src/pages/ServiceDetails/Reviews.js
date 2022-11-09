import React from 'react';

const Reviews = ({ review }) => {
    const { reviewText, userName, userPhoto, created_at } = review
    return (
        <div className="card w-96 bg-base-100">
            <div className="card-body">
                <div className='flex items-center gap-5'>
                    <img className='w-8 rounded-full' src={userPhoto} alt="" />
                    <h2 className="card-title">{userName}</h2>
                </div>
                <p>{reviewText}</p>
                <div className="card-actions justify-start">
                    {created_at}
                </div>
            </div>
        </div>
    );
};

export default Reviews;