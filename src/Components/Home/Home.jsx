import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import HowWeHelp from '../HowWeHelp/HowWeHelp';
import VideoTestimonials from './VideoTestimonials/VideoTestimonials';
import People from '../People/People';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className=''>
            <Navbar/>
            <Banner/>
            <Cards/>
            <WhoWeAre/>
            <HowWeHelp/>
            <VideoTestimonials/>
            <People/>
            <Testimonials/>
        </div>
    );
};

export default Home;