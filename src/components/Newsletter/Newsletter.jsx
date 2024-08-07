// eslint-disable-next-line no-unused-vars
import React from 'react'

const Newsletter = () => {
  return (
    <div className='mb-[10vw] bg-darkGreen flex justify-between items-center pl-[8vw] py-[0.15vw]'>
        <div className='w-[30vw]'>
            <h1 className='text-white font-Lora font-bold text-[3.2vw] leading-tight'>Subscribe to our newsletter</h1>
            <p className='text-white font-OpenSans mt-[1.3vw] text-[1.1vw] w-[25vw]'>Discover the latest health and wellness tips, exclusive discounts, and updates on our products and services by subscribing to our newsletter.</p>
        </div>
        <div className='bg-white h-[35vw] flex justify-center items-center w-[50vw] gap-3'>
            <input type='text' placeholder='Enter your Email' className='w-[30vw] rounded-xl border-[0.15vw] border-darkGreen outline-none py-[0.8vw] px-[1.3vw] text-[1.2vw] placeholder:text-lightTextColor placeholder:font-OpenSans'/>
            <button className='bg-darkGreen text-white rounded-xl border-2 border-darkGreen w-[12.5vw] text-[1.2vw] h-[3.5vw]'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter