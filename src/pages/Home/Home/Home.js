import React from 'react';
import FirstSection from '../FirstSection/FirstSection';
import SecondSection from '../SecondSection/SecondSection';
import { Helmet } from 'react-helmet-async';
import About from '../About/About';
import ThirdSection from '../ThirdSection/ThirdSection';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home-Storyteller</title>
            </Helmet>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            <About></About>
        </div>
    );
};

export default Home;