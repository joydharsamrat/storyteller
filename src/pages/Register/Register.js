import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { createUser, updateUser, signInWithGoogle } = useContext(authContext)
    const navigate = useNavigate();

    const handelRegister = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                handelUserProfileUpdate(name, photo)
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    const handelUserProfileUpdate = (name, photo) => {
        const profile = { displayName: name, photoURL: photo }

        updateUser(profile)
    }

    const handelSignInWthGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero min-h-screen">
            <Helmet>
                <title>Register-Storyteller</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className="lg:w-1/2">
                    <img className='w-full' src="/assets/login.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 lg:w-1/2 shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Register now</h1>
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input name='photo' type="text" placeholder="photoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="hover:bg-sky-500 px-8 py-2 font-bold text-white bg-sky-300 contact-btn">Register</button>
                        </div>

                        <button onClick={handelSignInWthGoogle} className="btn btn-outline flex items-center justify-center gap-2 font-bold"><FcGoogle className='text-2xl'></FcGoogle> Google SignIn</button>

                        <p className='mt-5 text-end'>New to storyteller ? <Link to='/login' className='text-blue-400 font-bold'>Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;