// eslint-disable-next-line no-unused-vars
import React from 'react'
import hero from '../../assets/Product-hero Image.png'

const ProductHero = () => {
  return (
    <div
            className="flex flex-col md:flex-row md:justify-between md:gap-[2vw] items-center px-4 pb-12 md:px-[5vw] md:pb-[10vw] ">
            <div className="w-full md:w-[30vw] mb-8 md:mb-0">
                <h1
                    className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-Lora font-bold leading-tight text-textColor">
                    Explore Our Traditional Herbs
                </h1>
                <p
                    className="mt-4 text-[3vw] sm:text-[2vw] md:text-[1vw] text-textColor font-OpenSans">
                    Find the best herbs for your health and wellness needs. Browse our selection of high-quality, natural products.
                </p>
            </div>
            <div className="w-full md:w-[40vw]">
                <img src={hero} alt="An image of different herbs" className="w-full h-auto"/>
            </div>
        </div>
  )
}

export default ProductHero