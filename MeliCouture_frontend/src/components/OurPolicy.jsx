import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 ">
        <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'> Easy Exchange Policy</p>
        <p className='text-gray-600'>we offer free exchange .</p>
        </div>
        <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'> 30 days return Policy</p>
        <p className='text-gray-600'>we offer 30 days free return policy .</p>
        </div>
        <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Top Class Support</p>
        <p className='text-gray-600'>7/7 H24 support .</p>
        </div>
    </div>
    
  )
}

export default OurPolicy
