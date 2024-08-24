// eslint-disable-next-line no-unused-vars
import React from 'react'
import BannerImage from '../../assets/about-banner.png'
import RightArrow from '../../assets/Icons/right arrow.svg'
import { Link } from 'react-router-dom';

const Aboutbanner = () => {
    return (
        <div
            className='flex flex-col-reverse md:flex-row justify-between gap-[4vw] items-center mb-[8vw] px-[8vw] py-[6vw] bg-white'>
            <div className='mb-[4vw] lg:mb-0'>
                <img
                    src={BannerImage}
                    alt='An image of different herbs'
                    className='w-full md:w-[35vw] rounded-[2vw]'/>
            </div>
            <div className='w-full md:w-[40vw]'>
                <h1
                    className='text-[6.5vw] md:text-[3vw] font-Lora font-bold leading-tight text-lightTextColor'>
                    About Us
                </h1>
                <p
                    className='mt-[4vw] sm:mt-[3vw] md:mt-[2vw] text-[3.5vw] md:text-[1.2vw] lg:text-[1vw] w-full lg:w-[30vw] text-lightTextColor font-OpenSans'>
                    At Green Remedies, we believe in the healing power of nature. Our mission is to
                    bring you the finest traditional herbs, sourced directly from trusted growers.
                    With a commitment to quality, sustainability, and customer satisfaction, we aim
                    to enhance your well-being naturally. Discover our curated selection and embrace
                    a healthier lifestyle.
                </p>
                <Link
                      to='/about' 
                      onClick={() => window.scrollTo(0, 0)}
                    className='bg-white text-textColor mt-[4vw] w-[35vw] h-[10vw] text-[3.5vw] md:mt-[2vw] md:w-[12vw] md:h-[3vw] md:text-[1.2vw] flex justify-center gap-[1vw] md:gap-[0.5vw] items-center border border-textColor rounded-full font-bold font-OpenSans'>Learn more
                    <img src={RightArrow} alt='Arrow Icon' className='w-[5vw] md:w-[1.4vw]'/></Link>
            </div>
        </div>

    )
}

export default Aboutbanner