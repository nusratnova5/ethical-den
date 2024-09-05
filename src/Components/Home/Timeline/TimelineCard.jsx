import React from 'react';

const TimelineCard = ({ timeline }) => {
    return (
        <div className='relative'>
            <div className='overflow-hidden rounded-xl'>
                <p className='bg-yellow p-4 text-charcoal-gray text-lg font-medium text-center'>{timeline?.title}</p>
                <div className='bg-charcoal-gray p-3 z-40 relative'>
                    <div className='flex justify-center py-6'>
                        <img className='w-10 h-10' src={timeline?.img} alt="" />
                    </div>
                    <p className='text-white text-center text-2xl'>Lorem ipsum</p>
                    <p className='text-soft-gray text-center text-xs'>Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. </p>
                </div>
            </div>
            <div className='w-3 h-3 rounded-full absolute -bottom-20 left-1/2 -translate-x-1/2 bg-white z-10'></div>
            <div className='border-dashed border-l h-32 absolute -bottom-16 left-1/2 -translate-x-1/2 z-10'></div>
        </div>
    );
};

export default TimelineCard;