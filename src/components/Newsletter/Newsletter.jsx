// eslint-disable-next-line no-unused-vars
import React from 'react'

const Newsletter = () => {
  return (
    <div className='mb-[15vw] xs:mb-[12vw] sm:mb-[10vw] bg-darkGreen flex flex-col md:flex-row md:justify-between items-center px-[5vw] py-[4vw] xs:py-[5vw] md:pl-[8vw] md:pr-[0] md:py-[0.2vw]'>
    <div className='w-full md:w-[30vw] mb-[3vw] sm:mb-0'>
        <h1 className='text-white font-Lora font-bold text-[5vw] md:text-[3.2vw] leading-tight'>
            Subscribe to our newsletter
        </h1>
        <p className='text-white font-OpenSans mt-[2vw] xs:mt-[1.5vw] sm:mt-[1.3vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.1vw] w-full xs:w-[80vw] sm:w-[60vw] md:w-[25vw]'>
            Discover the latest health and wellness tips, exclusive discounts, and updates on our products and services by subscribing to our newsletter.
        </p>
    </div>
    <div className='md:bg-white w-full md:w-[50vw] h-auto sm:h-[10vw] md:h-[35vw] flex flex-col xs:flex-row md:justify-center items-center gap-3 py-[4vw] xs:py-[3vw] sm:py-0'>
        <input 
            type='text' 
            placeholder='Enter your Email' 
            className='xs:w-[50vw] md:w-[30vw] rounded-xl border-[0.15vw] border-darkGreen outline-none xs:py-[1.5vw] md:py-[1vw] xs:px-[3vw] text-[3vw] sm:text-[2vw] md:text-[1.5vw] placeholder:text-gray-400 placeholder:font-OpenSans'/>
        <button className='xs:bg-white md:bg-darkGreen xs:text-darkGreen md:text-white rounded-xl border-2 border-darkGreen xs:w-[40vw] sm:w-[20vw] md:w-[12.5vw] xs:h-[8vw] sm:h-[6.5vw] md:h-[4.5vw] text-[3vw] sm:text-[2vw] md:text-[1.5vw] font-OpenSans font-bold'>
            Subscribe
        </button>
    </div>
</div>

  )
}

export default Newsletter