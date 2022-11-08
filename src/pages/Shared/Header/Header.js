import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
    const { user, logOut } = useContext(authContext);

    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div className="navbar lg:px-20 bg-[whitesmoke]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink className={({ isActive }) => isActive ? 'text-sky-800 underline font-semibold' : undefined} to='/home'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-sky-800 underline font-semibold' : undefined} to='/services'>Services</NavLink></li>
                        {
                            user?.uid &&
                            <>
                                <li><NavLink className={({ isActive }) => isActive ? 'text-sky-800 underline font-semibold' : undefined} to='/addService'>Add Services</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'text-sky-800 underline font-semibold' : undefined} to='/myReviews'>My reviews</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
                <Link className='flex items-center' to='/'><img className='w-8 md:w-20' src="/assets/storyteller-logo.png" alt="" /> <span className='text-xl md:text-5xl font-bold font-serif text-[skyBlue]'>Storyteller</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink className={({ isActive }) => isActive ? 'text-sky-800 underline font-semibold' : undefined} to='/home'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'text-sky-800 underline font-semibold' : undefined} to='/services'>Services</NavLink></li>
                    {
                        user?.uid &&
                        <>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-sky-800 underline font-semibold' : undefined} to='/addService'>Add Services</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-sky-800 underline font-semibold' : undefined} to='/myReviews'>My reviews</NavLink></li>
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <div title={user.displayName}>
                                {user.photoURL ?
                                    <img className='w-8 rounded-full' src={user.photoURL} alt="" /> :
                                    <FaUserCircle className='text-4xl text-sky-300'></FaUserCircle>}

                            </div>
                            <button onClick={handelLogout} className='btn btn-ghost'>Log Out</button>
                        </>
                        :
                        <Link to='/login' className='btn btn-ghost'>Sign in</Link>
                }
            </div>
        </div>
    );
};

export default Header;