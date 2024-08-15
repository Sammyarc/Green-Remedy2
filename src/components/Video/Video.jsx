// eslint-disable-next-line no-unused-vars
import React from 'react'
import VideoSrc from '../../assets/video.png'

const Video = () => {
    return (
        <div className='mt-[5vw] px-[5vw] py-[5vw]'>
            {/* Header */}
            <div className='flex flex-col justify-center items-center'>
                <h2
                    className='font-Lora xs:text-[5vw] sm:text-[4vw] md:text-[2.5vw] text-lightTextColor font-bold text-center'>How To Order Products On Our Website</h2>
                <p
                    className='text-center w-full md:w-[60vw] xs:mt-[1.5vw] sm:mt-[1vw] md:mt-[0.5vw] xs:text-[2.5vw] md:text-[1.4vw] text-lightTextColor font-OpenSans'>Watch
                    this quick tutorial to learn how to easily purchase your favorite herbal
                    products on our website.</p>
            </div>

            {/* Body */}
            <div className='px-[2vw] mt-[5vw] flex justify-center'>
                <img
                    src={VideoSrc}
                    alt='A video explaining how to order products on our website'
                    className='w-full sm:w-[90vw] md:w-[80vw] h-auto'/>
            </div>
        </div>

    )
}

export default Video