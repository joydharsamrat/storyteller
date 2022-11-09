import React from 'react';
import './FirstSection.css'

const FirstSection = () => {
    return (
        <div className='top-container pt-1 relative text-center'>
            <div className='mt-20'>
                <h1 className='text-4xl md:text-7xl text-slate-50 header'>Visual Storyteller Of Wedding</h1>


            </div>
            <div className='absolute -bottom-1 w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#fff" fill-opacity="1" d="M0,64L80,69.3C160,75,320,85,480,117.3C640,149,800,203,960,197.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>

        </div>
    );
};

export default FirstSection;