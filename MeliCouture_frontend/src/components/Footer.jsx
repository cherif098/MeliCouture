import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-14 mt-40 text-sm'>
        
        <div>
           <img src={assets.logo} className='mb-5 w-32' alt="" /> 
           <p className='w-full md:w-2/3 text-gray-600'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quia tempore error sequi. Ad quia tenetur quis, quod accusamus dolorum id ullam voluptas error quas neque numquam ipsa. Ex, accusantium.
           </p>
        </div>
        <div>
            <p className='text-x1 font-medium mb-4'> Melly Couture</p>
            <ul className='flex flex-col gap-1 text-gray-700'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-x1 font-medium mb-5'>
                Keep in touch !
            </p>
            <ul className='flex flex-col gap-1 text-gray-700'>
                <li>+1 123-456-7890</li>
                <li>Contact@melicouture.com</li>
            </ul>
        </div>

      </div>
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>
            Copyright {new Date().getFullYear()}@ MeliCouture.com    -All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer