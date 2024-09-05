import React from 'react';
import dp1 from '../../../assets/Images/testimonials/dp1.png'
import dp2 from '../../../assets/Images/testimonials/dp2.png'
import dp3 from '../../../assets/Images/testimonials/dp3.png'
import dp4 from '../../../assets/Images/testimonials/dp4.png'
import dp5 from '../../../assets/Images/testimonials/dp1.png'
import dp6 from '../../../assets/Images/testimonials/dp1.png'
import comma from '../../../assets/Images/testimonials/comma.png'
import { TbPhoneCall } from 'react-icons/tb';

const info = [
    {
        title: 'Nathan Drake',
        designation: 'Founder of something',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam impedit nemo porro voluptas soluta fuga esse amet nostrum saepe vel, quod eaque dolorem ducimus quibusdam reprehenderit, voluptatem fugit ipsa maiores.',
        img: dp1
    },
    {
        title: 'Nathan Drake',
        designation: 'Founder of something',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam impedit nemo porro voluptas soluta fuga esse amet nostrum saepe vel, quod eaque dolorem ducimus quibusdam reprehenderit, voluptatem fugit ipsa maiores.',
        img: dp2
    },
    {
        title: 'Nathan Drake',
        designation: 'Founder of something',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam impedit nemo porro voluptas soluta fuga esse amet nostrum saepe vel, quod eaque dolorem ducimus quibusdam reprehenderit, voluptatem fugit ipsa maiores.',
        img: dp3
    },
    {
        title: 'Nathan Drake',
        designation: 'Founder of something',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam impedit nemo porro voluptas soluta fuga esse amet nostrum saepe vel, quod eaque dolorem ducimus quibusdam reprehenderit, voluptatem fugit ipsa maiores.',
        img: dp4
    },
    {
        title: 'Nathan Drake',
        designation: 'Founder of something',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam impedit nemo porro voluptas soluta fuga esse amet nostrum saepe vel, quod eaque dolorem ducimus quibusdam reprehenderit, voluptatem fugit ipsa maiores.',
        img: dp5
    },
    {
        title: 'Nathan Drake',
        designation: 'Founder of something',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam impedit nemo porro voluptas soluta fuga esse amet nostrum saepe vel, quod eaque dolorem ducimus quibusdam reprehenderit, voluptatem fugit ipsa maiores.',
        img: dp6
    },
]

const Testimonials = () => {
    return (
        <div className='p-32 flex flex-col justify-center items-center'>
            <button className='bg-dark-chocolate btn btn-sm'>Testimonials</button>
            <h1 className='text-5xl font-bold text-white my-5'>Let's see what our students say</h1>
            <p className='text-light-gray my-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptas libero sequi placeat reprehenderit est itaque adipisci pariatur! Consectetur vel reprehenderit libero commodi consequuntur officiis quae quo aperiam! Dolorum nihil deserunt libero modi, dolorem vel asperiores fugit minima eaque corporis magnam tempora facere, maiores aliquid! Provident quae aliquam iusto? Labore?
            </p>
            <div className='grid grid-cols-3 gap-3 my-5'>
                {
                    info.map((item, index) => (
                        <div key={index} className=''>
                            <div className='bg-charcoal-gray p-5 rounded-lg border border-charcoal-gray '>
                                <div className='flex items-center gap-3 relative'>
                                    <img src={item.img} alt={item.title} />
                                    <div className=''>
                                    <h2 className='text-2xl font-bold text-white'>{item.title}</h2>
                                    <p className='text-light-gray'>{item.designation}</p>
                                    </div>
                                    <img src={comma} className='absolute bottom-0 top-0 right-0'/>

                                </div>
                                <p className='text-light-gray'>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className='btn btn-yellow rounded-full'><TbPhoneCall className='text-2xl'/>
            Book a call</button>

        </div>
    );
};

export default Testimonials;