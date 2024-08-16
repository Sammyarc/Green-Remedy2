// eslint-disable-next-line no-unused-vars
import React from 'react'
import BannerImage from '../../assets/about-banner.png'
import RightArrow from '../../assets/Icons/right arrow.svg'

const Aboutbanner = () => {
    return (
        <div
            className='flex justify-between gap-[1.6vw] items-center mb-[2vw] px-[10vw] py-[5vw] bg-white'>
            <div data-aos="zoom-in">
                <img src={BannerImage} alt='An image of different herbs' className='w-[35vw]'/>
            </div>
            <div className='w-[35vw]'>
                <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    className='text-[2.5vw] font-Lora font-bold leading-tight text-lightTextColor'>About Us</h1>
                <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className='mt-[1.3vw] text-[1vw] w-[30vw] text-lightTextColor font-OpenSans'>At
                    Green Remedies, we believe in the healing power of nature. Our mission is to
                    bring you the finest traditional herbs, sourced directly from trusted growers.
                    With a commitment to quality, sustainability, and customer satisfaction, we aim
                    to enhance your well-being naturally. Discover our curated selection and embrace
                    a healthier lifestyle.</p>
                <a
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    href='#'
                    className='bg-white text-textColor mt-[2vw] xs:w-[25vw] xs:h-[6vw] xs:text-[2.5vw] md:w-[12vw] md:h-[3vw] md:text-[1.2vw] flex justify-center gap-[0.2vw] items-center border border-textColor rounded-full font-bold font-OpenSans'>Learn more
                    <img src={RightArrow} alt='Arrow Icon' className='xs:w-[3vw] md:w-[1.4vw]'/></a>
            </div>
        </div>
    )
}

export default Aboutbanner