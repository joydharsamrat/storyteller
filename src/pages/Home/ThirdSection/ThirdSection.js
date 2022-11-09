import React from 'react';
import Slider from './Slider';

const ThirdSection = () => {
    return (
        <div className='w-11/12 mx-auto my-32'>
            <h1 className='header text-5xl text-center my-10'>Make It Special</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='flex items-center bg-sky-300 p-5 about-img'>
                    <p className='text-center text-lg font-medium'>
                        If you're getting married, you're about to embark on a life-changing journey. Not one day will ever go by after your ceremony that isn't in some way affected by this decision. It's truly a special thing to find “the one” that's going to make you happy and grow old with you. Now that the euphoria of that decision has worn off, at least a little bit, you may be finding that you have a lot to do in order to plan for your big day. If you've been searching for wedding photography services, chances are you may be a bit overwhelmed. Every web site dedicated to wedding photos and video capabilities is going to feature its best work, so it's difficult to know what the best fit is for you.
                    </p>
                </div>
                <div>
                    <Slider></Slider>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;