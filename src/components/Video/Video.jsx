// eslint-disable-next-line no-unused-vars
import React from 'react'
import VideoSrc from '../../assets/Video/Introvideo.mp4'

const Video = () => {
    return (
        <div className='mt-[5vw] px-[5vw] py-[5vw]'>
            {/* Header */}
            <div className='flex flex-col justify-center items-center'>
                <h2
                    className='font-Lora text-[6.5vw] md:text-[2.5vw] text-lightTextColor font-bold text-center'>How To Order Products On Our Website</h2>
                <p
                    className='text-center w-full md:w-[60vw] xs:mt-[1.5vw] sm:mt-[1vw] md:mt-[0.5vw] text-[3.5vw] md:text-[1.4vw] text-lightTextColor font-OpenSans'>Watch
                    this quick tutorial to learn how to easily purchase your favorite herbal
                    products on our website.</p>
            </div>

            {/* Body */}
            <div>
                <video
                    className='px-[2vw] mt-[5vw] w-full h-[60vw] md:w-[70vw] flex justify-center items-center mx-auto md:h-[50vw] object-cover'
                    controls="controls">
                    <source src={VideoSrc} type="video/mp4"/>
                </video>
            </div>
        </div>

    )
}

export default Video