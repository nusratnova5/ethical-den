import React from 'react';
import img from '../../../assets/Images/Video.png'
import { TbPhoneCall } from 'react-icons/tb';
import { MdGridView } from 'react-icons/md';
const Banner = () => {
    return (
        <div className='py-10'>
            <div className='flex flex-col justify-center items-center '>
                <h1 className='text-5xl text-white font-bold'>Let's learn & gain skills</h1>
                <p className='w-[50%] text-light-gray my-5 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate repudiandae, nemo dolore officia quae aut sunt non soluta id aperiam doloremque asperiores temporibus sequi quibusdam dolor ex ad ea delectus qui beatae porro exercitationem? Autem facilis quo odit exercitationem. Obcaecati facere, delectus nobis atque incidunt vel vitae suscipit velit iure.</p>
                <div className='mb-5 flex gap-5'>
                    <button className='btn btn-yellow rounded-full border-none'><TbPhoneCall className='text-xl' />
                    Schedule A Call</button>
                    <button className='btn rounded-full bg-dark-gray border-none text-white '><MdGridView/>
                    View case studies</button>
                </div>
                <img src={img} alt="" />

            </div>

        </div>
    );
};

export default Banner;