import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {
    const notify = () => toast("Service added successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });



    const handelAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.photo.value;
        const price = form.price.value;
        const time = form.time.value;
        const pages = form.pages.value;
        const video = form.video.value;
        const details = form.details.value;

        const service = {
            name,
            img,
            price,
            time,
            pages,
            video,
            details
        }


        fetch('https://storyteller-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    notify()
                }
            })


    }



    return (
        <div className='w-11/12 mx-auto my-20'>
            <Helmet>
                <title>Add-Service-Storyteller</title>
            </Helmet>
            <h1 className='header text-4xl text-center mb-5'>Add a new service</h1>
            <form onSubmit={handelAddService} className='bg-base-200 shadow-lg py-5'>
                <div className='hero'>
                    <div className='grid lg:grid-cols-2 gap-5'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" name='name' placeholder="service name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="photo URL" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                            <input type="number" name='time' placeholder="time" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Album Pages</span>
                            </label>
                            <input type="text" name='pages' placeholder="album pages" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Video</span>
                            </label>
                            <input type="text" name='video' placeholder="video" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                </div>

                <div className=" w-full flex flex-col items-center mt-3">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea type="text" name='details' placeholder="details" className=" rounded p-2 w-1/2 border" />
                </div>

                <div className='text-center mt-5'>
                    <button type='submit' className=' btn btn-outline'>Submit</button>
                </div>

            </form >
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default AddServices;