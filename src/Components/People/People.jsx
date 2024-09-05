import React from 'react';
import p1 from '../../assets/Images/people/p1.png'
import p2 from '../../assets/Images/people/p2.png'
import p3 from '../../assets/Images/people/p3.png'
import p4 from '../../assets/Images/people/p4.png'
import p5 from '../../assets/Images/people/p5.png'
import linkedin from '../../assets/Images/people/linkedin.png'
import fb from '../../assets/Images/people/fb.png'
import apple from '../../assets/Images/people/apple.png'
import spotify from '../../assets/Images/people/spotify.png'
import insta from '../../assets/Images/people/insta.png'


const People = () => {
    return (
        <div className='grid grid-cols-3 mx-32 p-5 gap-5'>
            <div className='col-span-2 p-5 bg-white rounded-lg'>
                <div className='flex gap-5 items-center'>
                    <img src={p5} alt="" />
                    <div>
                        <p className='text-4xl font-semibold'>Nathan Drake</p>
                        <p className='text-charcoal-gray my-4'>Lorem ipsum dolor sit amet</p>
                        <div className='flex gap-3'>
                            <img src={linkedin} />
                            <img src={apple} />
                            <img src={insta} />
                            <img src={fb} />
                            <img src={spotify} />
                        </div>
                    </div>
                </div>
                <p className='text-charcoal-gray my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni minima aperiam nihil dolores natus! Ratione consequatur eveniet laborum excepturi, fugit veritatis voluptatum, dolore explicabo nesciunt maiores dolorum autem voluptas, omnis ad fugiat doloremque totam atque corrupti! Nisi ipsam voluptatum aut architecto ex quia hic reprehenderit ut blanditiis fugiat. Minima, non!</p>
            </div>
            <div className='flex flex-col justify-center items-center bg-white rounded-lg p-5'>
                <img src={p4} />
                <p className='font-bold mt-4'>Roland Beck</p>
                <p className='text-charcoal-gray mb-2'>Germany</p>
                <p className='test-xs text-charcoal-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla illum tenetur incidunt facere non corrupti tempora similique recusandae iure voluptatum sequi nesciunt omnis minus, ab consectetur nemo delectus! Eum.</p>
                <div className='flex gap-3 my-3'>
                    <img src={linkedin} />
                    <img src={fb} />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-white rounded-lg p-5'>
                <img src={p1} />
                <p className='font-bold mt-4'>Roland Beck</p>
                <p className='text-charcoal-gray mb-2'>Germany</p>
                <p className='test-xs text-charcoal-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla illum tenetur incidunt facere non corrupti tempora similique recusandae iure voluptatum sequi nesciunt omnis minus, ab consectetur nemo delectus! Eum.</p>
                <div className='flex gap-3 my-3'>
                    <img src={linkedin} />
                    <img src={fb} />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-white rounded-lg p-5'>
                <img src={p2} />
                <p className='font-bold mt-4'>Roland Beck</p>
                <p className='text-charcoal-gray mb-2'>Germany</p>
                <p className='test-xs text-charcoal-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla illum tenetur incidunt facere non corrupti tempora similique recusandae iure voluptatum sequi nesciunt omnis minus, ab consectetur nemo delectus! Eum.</p>
                <div className='flex gap-3 my-3'>
                    <img src={linkedin} />
                    <img src={fb} />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-white rounded-lg p-5'>
                <img src={p3} />
                <p className='font-bold mt-4'>Roland Beck</p>
                <p className='text-charcoal-gray mb-2'>Germany</p>
                <p className='test-xs text-charcoal-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla illum tenetur incidunt facere non corrupti tempora similique recusandae iure voluptatum sequi nesciunt omnis minus, ab consectetur nemo delectus! Eum.</p>
                <div className='flex gap-3 my-3'>
                    <img src={linkedin} />
                    <img src={fb} />
                </div>
            </div>
            <div>

            </div>

        </div>
    );
};

export default People;