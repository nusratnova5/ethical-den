import React from 'react';
import com1 from '../../../assets/Images/company/Group 4.png'
import com2 from '../../../assets/Images/company/Group 5.png'
import com3 from '../../../assets/Images/company/Group 6.png'
import com4 from '../../../assets/Images/company/Group 7.png'
import com5 from '../../../assets/Images/company/Group 8.png'
import com6 from '../../../assets/Images/company/Group 9.png'

const Company = () => {
    return (
        <div className='bg-brown px-32 m-5 mx-0 flex flex-row items-center gap-10 '>
            <p className='text-white text-lg font-semibold'>Trusted by</p>
            <div className='flex gap-10 p-10'>
            <img src={com1}/>
            <img src={com2}/>
            <img src={com3}/>
            <img src={com4}/>
            <img src={com5}/>
            <img src={com6}/>
            </div>
            
        </div>
    );
};

export default Company;