import React from 'react';
import img1 from '../../../assets/Images/who-we-are/img-1.png'
import img2 from '../../../assets/Images/who-we-are/img-2.png'
import { IoIosArrowRoundForward } from 'react-icons/io';

const WhoWeAre = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-32' >
            <div className='flex items-center gap-5'>
                <img src={img1}/>
                <img src={img2} className='h-64'/>
            </div>
            <div>
                <button className='bg-dark-gray text-white btn btn-sm rounded-full border-none px-5 mb-5'>About us</button>
                <h1 className='text-5xl font-bold text-white mb-8'>Who we are</h1>
                <p className='text-soft-gray mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui consequuntur ea aperiam cum ratione repellat cumque corrupti atque facere odio et eos temporibus, iure debitis labore quod velit eligendi dolorum, quibusdam culpa ut deleniti impedit? Quisquam cupiditate odit culpa magni?</p>
                <button className='btn btn-yellow rounded-full'>Learn More <IoIosArrowRoundForward className='text-2xl'/></button>
            </div>
            
        </div>
    );
};

export default WhoWeAre;