import React from 'react';
import TimelineCard from './TimelineCard';
import img1 from '../../../assets/Images/timeline/1.png';
import img2 from '../../../assets/Images/timeline/2.png';
import img3 from '../../../assets/Images/timeline/3.png';

const Timeline = () => {
    const timelines = [
        {
            title: 'Week 1',
            img: img1
        },
        {
            title: 'Week 2',
            img: img2
        },
        {
            title: 'Week 3',
            img: img3
        },
    ];
    return (
        <div className='my-16 mx-32' >
            <h3 className='text-white text-5xl text-center'>Lorem Ipsum</h3>
            <p className='text-center text-soft-gray my-8 px-40'>Lorem ipsum dolor sit amet  Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst faucibus vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet faucibus. Velit lacinia etiam sed nisi at quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor ut vitae ultricies. T</p>
            <div className='grid grid-cols-3 gap-40'>
                {
                    timelines?.map(timeline => (
                        <TimelineCard timeline={timeline} />
                    ))
                }
            </div>
            <div className='mt-16 pt-2 border-b border-dashed border-white'></div>
        </div>
    );
};

export default Timeline;