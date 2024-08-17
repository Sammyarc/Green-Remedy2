// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link} from 'react-router-dom';
import First from '../../assets/First-card image.jpg'
import Second from '../../assets/Second-card image.jpg'
import Third from '../../assets/Third-card image.jpg'
import Starfilled from '../../assets/Icons/star-filled.svg'
import Starempty from '../../assets/Icons/star-empty.svg'

const Product = () => {
    return (
        <div className='mt-[10vw] px-[5vw] py-[5vw] bg-lightGreen'>
            {/* Header */}
            <div className='flex flex-col justify-center items-center'>
                <h1
                    className='font-Lora text-[7vw] xs:text-[5vw] sm:text-[4vw] md:text-[2.5vw] text-lightTextColor font-bold'>
                    Our latest arrivals
                </h1>
                <p
                    className='text-center w-full xs:w-[90vw] sm:w-[60vw] md:w-[50vw] mt-[2vw] xs:mt-[1.5vw] sm:mt-[1vw] md:mt-[0.5vw] text-[3.5vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.2vw] text-lightTextColor font-OpenSans'>
                    Explore our newest herbal products, carefully selected for quality and
                    effectiveness. Find fresh solutions for your health and wellness needs.
                </p>
                <Link
                    to="/products" onClick={() => window.scrollTo(0, 0)}
                    className='mt-[4vw] xs:mt-[3vw] sm:mt-[2.5vw] md:mt-[2vw] w-[30vw] xs:w-[25vw] sm:w-[18vw] md:w-[12vw] h-[10vw] xs:h-[8vw] sm:h-[6vw] md:h-[3.5vw] flex justify-center items-center bg-darkGreen hover:bg-green-600 text-white rounded-2xl font-PublicSans font-semibold xs:text-[2.5vw] sm:text-[1.5vw] md:text-[1vw]'>
                    Shop All
                </Link>
            </div>

            {/* Body */}
            <div className='xs:w-[90vw] xs:mx-auto md:mt-[2vw]'>
                <div
                    className='grid grid-cols-1 md:grid-cols-3 gap-[1vw] md:gap-[2vw] px-[5vw]'>
                    {/* First card */}
                    <div className='mt-[15vw] xs:mt-[5vw] sm:mt-[10vw] md:mt-[9vw]'>
                        <div className='relative'>
                            <img
                                src={First}
                                className='w-full rounded-t-[3vw] xs:rounded-t-[3.5vw] sm:rounded-t-[2vw] md:rounded-t-[1.2vw] h-[30vw] xs:h-[45vw] sm:h-[20vw] md:h-[15vw]'/>
                            <p
                                className='absolute bg-white py-[1vw] px-[2vw] xs:py-[0.8vw] xs:px-[1.5vw] sm:py-[0.5vw] sm:px-[1vw] md:py-[0.2vw] md:px-[0.7vw] text-[3vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1vw] top-[4vw] xs:top-[5vw] sm:top-[2.5vw] md:top-[1.5vw] font-OpenSans font-semibold text-textColor'>
                                New arrival
                            </p>
                        </div>
                        <div
                            className='bg-white rounded-[3vw] xs:rounded-[3.5vw] sm:rounded-[2vw] md:rounded-[1.2vw] p-[5vw] xs:p-[6vw] sm:p-[3vw] md:p-[2vw] -translate-y-[4vw] xs:-translate-y-[3vw] sm:-translate-y-[2.5vw] md:-translate-y-[1vw] shadow-lg'>
                            <h2
                                className='text-textColor font-Lora font-semibold text-[5vw] xs:text-[4vw] sm:text-[3vw] md:text-[2vw] leading-[6vw] xs:leading-[5vw] sm:leading-[4vw] md:leading-[2.5vw]'>
                                Organic Turmeric Plant
                            </h2>
                            <p
                                className='font-OpenSans text-[3.5vw] xs:text-[3vw] sm:text-[2.5vw] md:text-[1vw] mt-[2vw] xs:mt-[1.5vw] sm:mt-[1vw] md:mt-[0.5vw] w-full md:w-[15vw]'>
                                Boost your health with our organic turmeric plant.
                            </p>
                            <p
                                className='mt-[3vw] xs:mt-[2.5vw] sm:mt-[2vw] md:mt-[1vw] font-OpenSans font-extrabold text-[4vw] xs:text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] text-textColor'>
                                N5,000
                            </p>
                            <div
                                className='flex items-center gap-[2vw] xs:gap-[1.5vw] sm:gap-[1vw] md:gap-[1vw] mt-[3vw] xs:mt-[2.5vw] sm:mt-[2vw] md:mt-[1vw]'>
                                <div
                                    className='flex items-center justify-between gap-[1vw] xs:gap-[0.8vw] sm:gap-[0.6vw] md:gap-[0.4vw]'>
                                    <img src={Starfilled} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                    <img src={Starfilled} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                    <img src={Starfilled} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                    <img src={Starfilled} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                    <img src={Starempty} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                </div>
                                <p
                                    className='font-OpenSans font-semibold text-[3vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.3vw]'>
                                    (4.7)
                                </p>
                            </div>
                            <a
                                href='#'
                                className='w-full bg-darkGreen h-[10vw] xs:h-[8vw] sm:h-[6vw] md:h-[3.2vw] rounded-md flex items-center justify-center text-white font-OpenSans font-bold mt-[3vw] xs:mt-[2.5vw] sm:mt-[2vw] md:mt-[1.5vw] xs:text-[3vw] sm:text-[1.5vw] md:text-[1.1vw]'>
                                Add to cart
                            </a>
                        </div>
                    </div>

                    {/* Second card */}
                    <div >
                        <div className='relative'>
                            <img
                                src={Second}
                                className='w-full rounded-[3vw] xs:rounded-[3.5vw] sm:rounded-[2vw] md:rounded-[1.2vw] translate-y-[4vw] xs:translate-y-[3vw] sm:translate-y-[2.5vw] md:translate-y-[1vw] h-[30vw] xs:h-[45vw] sm:h-[20vw] md:h-[15vw]'/>
                            <p
                                className='absolute bg-darkGreen py-[1vw] px-[2vw] xs:py-[0.8vw] xs:px-[1.5vw] sm:py-[0.5vw] sm:px-[1vw] md:py-[0.2vw] md:px-[0.7vw] text-[3vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1vw] top-[6vw] xs:top-[8vw] sm:top-[3vw] md:top-[3vw] font-OpenSans font-semibold text-white'>
                                New arrival
                            </p>
                        </div>
                        <div
                            className='bg-darkGreen p-[5vw] xs:p-[6vw] sm:p-[3vw] md:p-[2vw] rounded-[3vw] xs:rounded-[2.5vw] sm:rounded-[2vw] md:rounded-b-[1.2vw] shadow-lg'>
                            <h2
                                className='text-white font-Lora font-semibold text-[5vw] xs:text-[4vw] sm:text-[3vw] md:text-[2vw] leading-[6vw] xs:leading-[5vw] sm:leading-[4vw] md:leading-[2.5vw]'>
                                Organic Turmeric Herbs
                            </h2>
                            <p
                                className='font-OpenSans text-[3.5vw] xs:text-[3vw] sm:text-[2.5vw] md:text-[1vw] mt-[2vw] xs:mt-[1.5vw] sm:mt-[1vw] md:mt-[0.5vw] w-full md:w-[15vw] text-white'>
                                Boost your health with our organic turmeric herbs.
                            </p>
                            <p
                                className='mt-[3vw] xs:mt-[2.5vw] sm:mt-[2vw] md:mt-[1vw] font-OpenSans font-extrabold text-[4vw] xs:text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] text-white'>
                                N5,000
                            </p>
                            <div
                                className='flex items-center gap-[2vw] xs:gap-[1.5vw] sm:gap-[1vw] md:gap-[1vw] mt-[3vw] xs:mt-[2.5vw] sm:mt-[2vw] md:mt-[1vw]'>
                                <div
                                    className='flex items-center justify-between gap-[1vw] xs:gap-[0.8vw] sm:gap-[0.6vw] md:gap-[0.4vw]'>
                                    <img src={Starfilled} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                    <img src={Starfilled} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                    <img src={Starfilled} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                    <img src={Starfilled} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                    <img src={Starempty} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                </div>
                                <p
                                    className='font-OpenSans font-semibold text-[3vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.3vw] text-white'>
                                    (4.7)
                                </p>
                            </div>
                            <a
                                href='#'
                                className='w-full bg-white h-[10vw] xs:h-[8vw] sm:h-[6vw] md:h-[3.2vw] rounded-md flex items-center justify-center text-darkGreen font-OpenSans font-bold mt-[3vw] xs:mt-[2.5vw] sm:mt-[2vw] md:mt-[1.5vw] xs:text-[3vw] sm:text-[1.5vw] md:text-[1.1vw]'>
                                Add to cart
                            </a>
                        </div>
                    </div>

                    {/* Third card */}
                    <div className='mt-[5vw] sm:mt-[10vw] md:mt-[9vw]'>
                        <div className='relative'>
                            <img
                                src={Third}
                                className='w-full rounded-t-[3vw] xs:rounded-t-[3.5vw] sm:rounded-t-[2vw] md:rounded-t-[1.2vw] h-[30vw] xs:h-[45vw] sm:h-[20vw] md:h-[15vw]'/>
                            <p
                                className='absolute bg-white py-[1vw] px-[2vw] xs:py-[0.8vw] xs:px-[1.5vw] sm:py-[0.5vw] sm:px-[1vw] md:py-[0.2vw] md:px-[0.7vw] text-[3vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1vw] top-[4vw] xs:top-[5vw] sm:top-[2.5vw] md:top-[1.5vw] font-OpenSans font-semibold text-textColor'>
                                New arrival
                            </p>
                        </div>
                        <div
                            className='bg-white rounded-[3vw] xs:rounded-[3.5vw] sm:rounded-[2vw] md:rounded-[1.2vw] p-[5vw] xs:p-[6vw] sm:p-[3vw] md:p-[2vw] -translate-y-[4vw] xs:-translate-y-[3vw] sm:-translate-y-[2.5vw] md:-translate-y-[1vw] shadow-lg'>
                            <h2
                                className='text-textColor font-Lora font-semibold text-[5vw] xs:text-[4vw] sm:text-[3vw] md:text-[2vw] leading-[6vw] xs:leading-[5vw] sm:leading-[4vw] md:leading-[2.5vw]'>
                                Organic Turmeric Capsules
                            </h2>
                            <p
                                className='font-OpenSans text-[3.5vw] xs:text-[3vw] sm:text-[2.5vw] md:text-[1vw] mt-[2vw] xs:mt-[1.5vw] sm:mt-[1vw] md:mt-[0.5vw] w-full md:w-[15vw]'>
                                Boost your health with our organic turmeric capsules.
                            </p>
                            <p
                                className='mt-[3vw] xs:mt-[2.5vw] sm:mt-[2vw] md:mt-[1vw] font-OpenSans font-extrabold text-[4vw] xs:text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] text-textColor'>
                                N5,000
                            </p>
                            <div
                                className='flex items-center gap-[2vw] xs:gap-[1.5vw] sm:gap-[1vw] md:gap-[1vw] mt-[3vw] xs:mt-[2.5vw] sm:mt-[2vw] md:mt-[1vw]'>
                                <div
                                    className='flex items-center justify-between gap-[1vw] xs:gap-[0.8vw] sm:gap-[0.6vw] md:gap-[0.4vw]'>
                                    <img src={Starfilled} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                    <img src={Starfilled} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                    <img src={Starfilled} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                    <img src={Starfilled} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                    <img src={Starempty} className='w-[4vw] xs:w-[3vw] sm:w-[2vw] md:w-[1.5vw]'/>
                                </div>
                                <p
                                    className='font-OpenSans font-semibold text-[3vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.3vw]'>
                                    (4.7)
                                </p>
                            </div>
                            <a
                                href='#'
                                className='w-full bg-darkGreen h-[10vw] xs:h-[8vw] sm:h-[6vw] md:h-[3.2vw] rounded-md flex items-center justify-center text-white font-OpenSans font-bold mt-[3vw] xs:mt-[2.5vw] sm:mt-[2vw] md:mt-[1.5vw] xs:text-[3vw] sm:text-[1.5vw] md:text-[1.1vw]'>
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product