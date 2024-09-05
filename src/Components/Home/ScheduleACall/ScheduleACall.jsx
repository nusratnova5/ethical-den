import React from 'react';
import img from '../../../assets/Images/schedule-a-call/person.png'
import icon from '../../../assets/Images/schedule-a-call/icon.png'
import { TbPhoneCall } from 'react-icons/tb';

const ScheduleACall = () => {
    return (
        <div className='bg-brown grid grid-cols-1 lg:grid-cols-2 gap-10 px-32 pt-10'>
            <div>
                <img src={icon} />
                <h1 className='text-5xl font-bold text-white my-5'>Lorem ipsum dolor sit amet.</h1>
                <p className='text-light-gray mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non repudiandae alias dolorum voluptates dolore debitis, ea fuga est molestias fugiat.
                </p>
                <button className='btn bg-white rounded-full'><TbPhoneCall className='text-2xl'/>
            Schedule a call</button>
            </div>
            <div>
                <img src={img} />
            </div>

        </div>
    );
};

export default ScheduleACall;