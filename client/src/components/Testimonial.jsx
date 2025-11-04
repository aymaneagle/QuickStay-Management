import React from 'react';
import Title from './Title';
import { testimonials } from '../assets/assets';
import StarRating from './StarRating';

const Testimonial = () => {
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30'>
            <Title title='What our guest say' subTitle='Discover why discerning travelers consistently choose QuickStay for their exclusive accommodations around the world.' />

                <div className='flex flex-wrap mt-10 justify-center'>
                {testimonials.map((testimonial) => (
                    <div key={testimonial._id} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer'>
                        
                        <p className='text-gray-500 text-sm my-5'>"{testimonial.review}"</p>
                        <hr className='mb-5 border-gray-300' />
                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} className='w-12 object-contain rounded-full' alt='' />
                            <div className='text-sm text-gray-600'>
                                <h3 className='font-playfair text-xl'>{testimonial.name}</h3>
                                <p className='text-xs text-gray-500'>{testimonial.address}</p>
                                <div className='flex items-center gap-1 mt-4'> 
                                    <StarRating/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;