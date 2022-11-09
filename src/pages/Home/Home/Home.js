import React from 'react';
import FirstSection from '../FirstSection/FirstSection';
import SecondSection from '../SecondSection/SecondSection';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home-Storyteller</title>
            </Helmet>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
        </div>
    );
};

export default Home;