import React from 'react';
import { TbPhoneCall } from 'react-icons/tb';
import img from '../../assets/Images/book-a-call/image.png'
import bg from '../../assets/Images/book-a-call/bg.avif'

const BookACall = () => {
    return (
        <div className='flex px-32 py-10 gap-10 relative mx-32 mb-32'>
            <div className='absolute bottom-0 top-0 right-0 left-0'>
                <img className='w-full h-full object-cover blur-3xl' src={bg} />
            </div>
            <div className='grid grid-cols-2 z-10'>
                <div>
                    <img src={img} />
                </div>
                <div>
                    <h1 className='text-5xl font-bold text-white mb-10'>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p className='text-light-gray mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, repellendus. Quas ullam voluptatibus delectus, officiis maxime expedita perspiciatis. Illum ipsam quasi error pariatur soluta hic dolor, assumenda deserunt enim eius perferendis tempore temporibus repellendus, quas suscipit nesciunt mollitia cumque deleniti.</p>
                    <button className='btn btn-yellow rounded-full border-none'><TbPhoneCall className='text-xl' />Book a call</button>
                </div>
            </div>

        </div>
    );
};

export default BookACall;