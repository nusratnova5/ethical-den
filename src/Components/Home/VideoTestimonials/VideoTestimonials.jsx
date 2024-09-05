import React from 'react';
import img1 from '../../../assets/Images/video-testimonials/img1.png'
import img2 from '../../../assets/Images/video-testimonials/img2.png'
import img3 from '../../../assets/Images/video-testimonials/img3.png'
import dp1 from '../../../assets/Images/video-testimonials/dp1.png'
import dp2 from '../../../assets/Images/video-testimonials/dp2.png'
import dp3 from '../../../assets/Images/video-testimonials/dp3.png'
import { TiStarFullOutline } from 'react-icons/ti';



const VideoTestimonials = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-brown py-10 px-32'>
            <div className='flex flex-col justify-center items-center w-[80%]'>
                <button className='btn btn-sm uppercase '>Video testimonials</button>
                <h1 className='text-5xl font-bold text-white py-5'>Let's see what our students say</h1>
                <p className='text-light-gray mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia natus, voluptates quos magnam deleniti nulla consectetur doloremque voluptate consequatur reprehenderit ullam vero aperiam dolorum maxime asperiores, rem, quo dolor quasi!</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-col-3'>
                <div className='flex gap-8'>
                    <div className='p-6 bg-black rounded-lg'>
                        <img src={img2} className='w-full' />
                        <p className='text-light-gray mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam corporis maxime beatae magnam officiis repellat.</p>
                        <div className='text-yellow-400 flex gap-2 my-3'>
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={dp1} />
                            <div className='text-white'>
                                <p>Nathan Drake</p>
                                <p>Founder of something</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 bg-black rounded-lg'>
                        <img src={img3} className='w-full' />
                        <p className='text-light-gray mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam corporis maxime beatae magnam officiis repellat.</p>
                        <div className='text-yellow-400 flex gap-2 my-3'>
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={dp2} />
                            <div className='text-white'>
                                <p>Nathan Drake</p>
                                <p>Founder of something</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 bg-black rounded-lg'>
                        <img src={img1} className='w-full' />
                        <p className='text-light-gray mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam corporis maxime beatae magnam officiis repellat.</p>
                        <div className='text-yellow-400 flex gap-2 my-3'>
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={dp3} />
                            <div className='text-white'>
                                <p>Nathan Drake</p>
                                <p>Founder of something</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn rounded-full bg-transparent px-5 m-5 text-white'>Load more</button>

        </div>
    );
};

export default VideoTestimonials;