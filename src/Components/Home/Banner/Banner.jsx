import React from 'react';
import img from '../../../assets/Images/Video.png'
const Banner = () => {
    return (
        <div className='py-10'>
            <div className='flex flex-col justify-center items-center '>
                <h1 className='text-4xl font-bold'>Let's learn & gain skills</h1>
                <p className='w-[50%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis iusto similique exercitationem ea mollitia, ipsum iste labore temporibus? Distinctio earum laborum aliquam vel, nulla neque aspernatur omnis in nam!</p>
                <div>
                    <button className='btn btn-yellow rounded-full'>Schedule A Call</button>
                    <button className='btn '>View case studies</button>
                </div>
                <img src={img} alt="" />

            </div>

        </div>
    );
};

export default Banner;