import React from 'react';
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";

const ReviewCard = ({ review, handelReviewDelete }) => {
    const { reviewText, serviceName, created_at, _id } = review;

    return (
        <div className="card w-96 bg-base-100 shadow-xl relative">
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{reviewText}</p>
                <div className="card-actions justify-end">
                    <p>{created_at}</p>
                </div>
                <div className='flex gap-3 absolute right-2'>
                    <AiTwotoneEdit></AiTwotoneEdit>
                    <AiTwotoneDelete className='text-red-400 cursor-pointer' onClick={() => handelReviewDelete(_id)}></AiTwotoneDelete>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;