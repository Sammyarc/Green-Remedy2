// eslint-disable-next-line no-unused-vars
import React from 'react'
import BannerImage from '../../assets/Small.png'

const StoryBanner = () => {
    return (
        <div
            className='flex justify-between gap-[1.6vw] items-center mb-[2vw] px-[10vw] py-[5vw] bg-darkGreen'>
            <div data-aos="zoom-in">
                <img src={BannerImage} alt='An image of different herbs' className='w-[35vw]'/>
            </div>
            <div className='w-[35vw]'>
                <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    className='text-[2.5vw] font-Lora font-bold leading-tight text-white'>
                    Our Story</h1>
                <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className='mt-[1.3vw] text-[1vw] w-[30vw] text-white font-OpenSans'>Founded
                    in 2009, Green Remedies started with a passion for natural health solutions. Our
                    journey began with a simple goal: to make traditional herbal remedies accessible
                    to everyone. From humble beginnings, we&apos;ve grown into a trusted name in the
                    herbal products industry, known for our commitment to quality and customer
                    satisfaction.</p>
            </div>
        </div>
    )
}

export default StoryBanner