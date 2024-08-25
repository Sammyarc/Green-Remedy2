// eslint-disable-next-line no-unused-vars
import React from 'react'
import BannerImage from '../../assets/Small.png'

const StoryBanner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between gap-[3vw] items-center mb-[5vw] px-[5vw] lg:px-[10vw] py-[5vw] bg-darkGreen'>
    <div className='w-full md:w-1/2 mt-[5vw] md:mt-0'>
        <img src={BannerImage} alt='An image of different herbs' className='w-full h-[35vw] md:w-[35vw] object-cover rounded-[1vw]'/>
    </div>
    <div className='w-full md:w-1/2 mt-[5vw] md:mt-0'>
        <h1 className='text-[6.5vw] text-center md:text-left md:text-[3vw] font-Lora font-bold leading-tight text-white'>
            Our Story
        </h1>
        <p className='mt-[2vw] text-[3.5vw] md:text-[1.3vw] text-white font-OpenSans'>
            Founded in 2024, Green Remedies started with a passion for natural health solutions. Our journey began with a simple goal: to make traditional herbal remedies accessible to everyone. From humble beginnings, we&apos;ve grown into a trusted name in the herbal products industry, known for our commitment to quality and customer satisfaction.
        </p>
    </div>
</div>

    )
}

export default StoryBanner