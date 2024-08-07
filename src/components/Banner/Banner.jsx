// eslint-disable-next-line no-unused-vars
import React from 'react'
import BannerImage from '../../assets/Second-card image.jpg'

const Banner = () => {
    return (
        <div
            className='flex justify-between gap-[1.6vw] items-center mx-[5vw] my-[10vw] pb-[3vw] pr-[3vw] pt-[3vw] pl-[5vw] bg-lightGreen rounded-[1.5vw]'>
            <div className=''>
                <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    className='text-[2.5vw] font-Lora font-semibold w-[40vw] leading-tight text-lightTextColor'>Grab up to 50% OFF on any selected Herbal product</h1>
                <a
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    href='#'
                    className='bg-milkWhite text-lightTextColor mt-[1.5vw] w-[12.5vw] h-[4vw] text-[1.2vw] flex justify-center items-center rounded-[1.5vw] font-bold'>Buy Now</a>
            </div>
            <div data-aos="zoom-in">
                <img src={BannerImage} className='rounded-[1.3vw]' alt='An image of different herbs'/>
            </div>
        </div>
    )
}

export default Banner