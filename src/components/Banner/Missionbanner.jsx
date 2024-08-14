// eslint-disable-next-line no-unused-vars
import React from 'react'
import BannerImage from '../../assets//Big.png'

const Missionbanner = () => {
    return (
        <div
            className='flex justify-between gap-[1.6vw] items-center mx-[5vw] mt-[5vw] mb-[10vw]  border-2 border-textColor rounded-[1.5vw]'>
            <div className='m-auto'>
                <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    className='text-[2.5vw] font-Lora font-bold leading-tight text-textColor'>
                    Our Mission</h1>
                <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className='mt-[1.3vw] text-[1vw] w-[30vw] text-textColor font-OpenSans'>At
                    Green Remedies, our mission is to provide high-quality, natural herbal products
                    that promote health and well-being. We believe in the power of nature to heal
                    and enhance life, and we are committed to bringing you the best that nature has
                    to offer.</p>
            </div>
            <div data-aos="zoom-in">
                <img src={BannerImage} className='w-[40vw]' alt='An image of different herbs'/>
            </div>
        </div>
    )
}

export default Missionbanner