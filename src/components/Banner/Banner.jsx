// eslint-disable-next-line no-unused-vars
import React from 'react'
import BannerImage from '../../assets/Second-card image.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            className='flex flex-col md:flex-row justify-between gap-[4vw] xs:pt-[8vw] sm:gap-[2.5vw] md:gap-[2vw] items-center mx-[4vw] my-[8vw] pb-[6vw] pr-[3vw] sm:py-[3vw] pl-[4vw] bg-lightGreen rounded-[3vw]'>
            <div>
                <h1
                    className='text-[6vw] md:text-[2.5vw] font-Lora font-semibold w-full sm:w-[80vw] md:w-[40vw] leading-tight text-lightTextColor'>
                    Grab up to 50% OFF on any selected Herbal product
                </h1>
                <Link
                      to='/products' 
                      onClick={() => window.scrollTo(0, 0)}
                    className='bg-milkWhite text-lightTextColor font-OpenSans mt-[4vw] md:mt-[2.5vw] w-[30vw] md:w-[12.5vw] h-[10vw] sm:h-[8vw] md:h-[4vw] text-[3.5vw] md:text-[1.5vw] lg:text-[1.2vw] flex justify-center items-center rounded-[3vw] lg:rounded-[1.5vw] font-bold'>
                    Buy Now
                </Link>
            </div>
            <div className='mt-[5vw] lg:mt-0'>
                <img
                    src={BannerImage}
                    className='rounded-[2.5vw] sm:rounded-[2vw] md:rounded-[1.5vw] lg:rounded-[1.3vw] w-full lg:w-auto'
                    alt='An image of different herbs'/>
            </div>
        </div>

    )
}

export default Banner