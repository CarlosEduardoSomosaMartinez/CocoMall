import React from 'react';

import logoBicycleStore from '../../Assets/images/logoBicycleStore.jpg';
//import logoFashionStore from '../../Assets/images/logoFashionStore.jpg';
import bannerCyclits from '../../Assets/images/bannerCyclits.jpg';
//import logoTechStore from '../../Assets/images/logoTechStore.jpg';
//import bannerFashion from '../../Assets/images/bannerFashion.jpg';
//import bannerTech from '../../Assets/images/bannerTech.jpg';

const StoreModel = () => {
    return (
        <div className='border border-red-600 w-80 h-full bg-white shadow-lg'>
            {/* --banner-- */}
            <div className='overflow-hidden'>
                <img src={bannerCyclits} alt='banner' />
            </div>
            {/* --logo-- */}
            <div className='flex justify-center px-5 -mt-12'>
                <img
                    className='h-32 w-32 bg-white p-2 rounded-full'
                    src={logoBicycleStore}
                    alt='logo'
                />
            </div>
            {/* --contain-- */}
            <div>
                <div className='text-center px-12'>
                    <h2 className='text-primary text-2xl font-bold
                                    sm:text-lg'>Bicycle Store</h2>
                    <p className='text-gray-400 text-sm mt-2'>store1@gmail.com</p>
                    <p className='mt-2 text-gray-600'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
                {/* <div className='flex  bg-gray-50 '>
                    <div className='text-center w-1/2 p-4'>
                        <p>
                            <span className='font-semibold'>Category </span> Cycles
                        </p>
                    </div>
                    <div className='text-center w-1/2 p-4'>
                        <p>
                            <span className='font-semibold'>2.0k </span> Sales
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default StoreModel;
