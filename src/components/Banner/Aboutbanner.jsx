// eslint-disable-next-line no-unused-vars
import React from 'react'
import BannerImage from '../../assets/about-banner.png'
import RightArrow from '../../assets/Icons/right arrow.svg'

const Aboutbanner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between gap-[4vw] sm:gap-[2.5vw] items-center mb-[8vw] px-[8vw] py-[6vw] bg-white'>
        <div data-aos="zoom-in" className='mb-[4vw] lg:mb-0'>
            <img src={BannerImage} alt='An image of different herbs' className='w-full sm:w-[60vw] md:w-[35vw] rounded-[2vw]' />
        </div>
        <div className='w-full md:w-[40vw]'>
            <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                className='text-[5vw] xs:text-[4.5vw] sm:text-[3.5vw] md:text-[3vw] font-Lora font-bold leading-tight text-lightTextColor'>
                About Us
            </h1>
            <p
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className='mt-[4vw] sm:mt-[3vw] md:mt-[2vw] text-[3.5vw] xs:text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] w-full lg:w-[30vw] text-lightTextColor font-OpenSans'>
                At Green Remedies, we believe in the healing power of nature. Our mission is to bring you the finest traditional herbs, sourced directly from trusted growers. With a commitment to quality, sustainability, and customer satisfaction, we aim to enhance your well-being naturally. Discover our curated selection and embrace a healthier lifestyle.
            </p>
             <a
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    href='#'
                    className='bg-white text-textColor mt-[2vw] xs:w-[25vw] xs:h-[6vw] xs:text-[2.5vw] md:w-[12vw] md:h-[3vw] md:text-[1.2vw] flex justify-center gap-[0.2vw] items-center border border-textColor rounded-full font-bold'>Learn more
                    <img src={RightArrow} alt='Arrow Icon' className='xs:w-[3vw] md:w-[1.4vw]'/></a>
        </div>
    </div>
    
    )
}

export default Aboutbanner