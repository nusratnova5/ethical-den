import React from 'react';
import frame1 from '../../../assets/Images/cards/Frame-1.png'
import frame2 from '../../../assets/Images/cards/Frame-2.png'
import frame3 from '../../../assets/Images/cards/Group.png'

const Cards = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mx-32'>
            <div className='bg-brown rounded-lg border border-charcoal-gray p-8 flex flex-col justify-center items-center'>
                <img src={frame1} className='p-5'/>
                <h1 className='text-white text-2xl font-bold mb-3'>Self-Expression</h1>
                <p className='text-light-gray text-center mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero obcaecati aspernatur facilis nostrum perferendis quisquam, libero dignissimos expedita eius eaque ex ad sint maxime numquam sunt omnis rem repudiandae.</p>
            </div>
            <div className='bg-brown rounded-lg border border-border-gray p-8 flex flex-col justify-center items-center'>
                <img src={frame2} className='p-5'/>
                <h1 className='text-white text-2xl font-bold mb-3'>Self-Expression</h1>
                <p className='text-light-gray text-center mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero obcaecati aspernatur facilis nostrum perferendis quisquam, libero dignissimos expedita eius eaque ex ad sint maxime numquam sunt omnis rem repudiandae.</p>
            </div>
            <div className='bg-brown rounded-lg border border-border-gray p-8 flex flex-col justify-center items-center'>
                <img src={frame3} className='p-5'/>
                <h1 className='text-white text-2xl font-bold mb-3'>Self-Expression</h1>
                <p className='text-light-gray text-center mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero obcaecati aspernatur facilis nostrum perferendis quisquam, libero dignissimos expedita eius eaque ex ad sint maxime numquam sunt omnis rem repudiandae.</p>
            </div>
            
        </div>
    );
};

export default Cards;