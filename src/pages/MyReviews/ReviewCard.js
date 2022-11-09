import React from 'react';
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";

const ReviewCard = ({ review, handelReviewDelete, handelEditReview }) => {
    const { reviewText, serviceName, created_at, _id } = review;

    const editReview = (event) => {
        event.preventDefault();
        const text = event.target.reviewText.value;

        handelEditReview(_id, text)
    }

    return (
        <div className="card w-96 bg-base-100 relative">
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{reviewText}</p>
                <div className="card-actions justify-end">
                    <p>{created_at}</p>
                </div>
                <div className='flex gap-3 absolute right-2'>
                    <label htmlFor={_id}><AiTwotoneEdit className='cursor-pointer'></AiTwotoneEdit></label>

                    <AiTwotoneDelete className='text-red-400 cursor-pointer' onClick={() => handelReviewDelete(_id)}></AiTwotoneDelete>
                </div>
            </div>
            <input type="checkbox" id={_id} className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative">
                    <div className="modal-action absolute right-1 -top-5">
                        <label htmlFor={_id} className="h-10 w-10 text-center cursor-pointer text-white text-2xl bg-slate-600 rounded-full">x</label>
                    </div>
                    <h3 className="font-bold text-lg">{serviceName}</h3>
                    <form onSubmit={editReview}>
                        <textarea name="reviewText" defaultValue={reviewText} className='w-full p-5 border rounded-lg'></textarea>

                        <div className='text-right'>
                            <button type='submit' className='btn btn-success text-white'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;