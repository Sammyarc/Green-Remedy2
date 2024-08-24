// eslint-disable-next-line no-unused-vars
import React from 'react'
import BannerImage from '../../assets//Big.png'

const Missionbanner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between gap-[3vw] items-center mx-[5vw] mt-[5vw] mb-[10vw] border-2 border-textColor rounded-[1.5vw]'>
    <div className='m-auto md:w-1/2 px-[4vw] py-[4vw] md:py-0'>
        <h1 className='text-[6.5vw] text-center md:text-left md:text-[3vw] font-Lora font-bold leading-tight text-textColor'>
            Our Mission
        </h1>
        <p className='mt-[2vw] text-[3.5vw] md:text-[1.3vw] text-textColor font-OpenSans'>
            At Green Remedies, our mission is to provide high-quality, natural herbal products that promote health and well-being. We believe in the power of nature to heal and enhance life, and we are committed to bringing you the best that nature has to offer.
        </p>
    </div>
    <div>
        <img src={BannerImage} className='w-[100vw] h-[35vw] md:w-[40vw] object-cover rounded-[0] md:rounded-r-[1.5vw]' alt='An image of different herbs'/>
    </div>
</div>

    )
}

export default Missionbanner