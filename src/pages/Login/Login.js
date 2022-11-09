import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { logIn, signInWithGoogle } = useContext(authContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handelLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {

                console.log(result.user)
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(err => console.error(err))

    }
    const handelSignInWthGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className="lg:w-1/2">
                    <img className='w-full' src="/assets/login.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 lg:w-1/2 shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login now</h1>
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="className='hover:bg-sky-500 px-8 py-2 font-bold text-white bg-sky-300 contact-btn">Sign In</button>
                        </div>
                        <button onClick={handelSignInWthGoogle} className="btn btn-outline flex items-center justify-center gap-2 font-bold"><FcGoogle className='text-2xl'></FcGoogle> Google SignIn</button>
                        <p className='mt-5 text-end'>New to storyteller ? <Link to='/register' className='font-bold text-blue-400'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;