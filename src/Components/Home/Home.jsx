import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import HowWeHelp from '../HowWeHelp/HowWeHelp';
import VideoTestimonials from './VideoTestimonials/VideoTestimonials';
import People from '../People/People';
import Testimonials from './Testimonials/Testimonials';
import ScheduleACall from './ScheduleACall/ScheduleACall';
import Footer from '../Shared/Footer/Footer';
import Company from './Company/Company';
import BookACall from '../BookACall/BookACall';
import Timeline from './Timeline/Timeline';

const Home = () => {
    return (
        <div className=''>
            <Navbar/>
            <Banner/>
            <Company/>
            <Cards/>
            <WhoWeAre/>
            <HowWeHelp/>
            <VideoTestimonials/>
            <Timeline />
            <People/>
            <Testimonials/>
            <BookACall/>
            <ScheduleACall/>
            <Footer/>
        </div>
    );
};

export default Home;