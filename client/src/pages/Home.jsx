import React from 'react';
import Display from '../components/Display';
import FeaturedDestination from '../components/FeaturedDestination';
import ExclusiveOffers from '../components/ExclusiveOffers';
import Testimonial from '../components/Testimonial';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
            <Display/>
            <FeaturedDestination/>
            <ExclusiveOffers/>
            <Testimonial/>
            <NewsLetter/>
        </>
    );
};

export default Home;