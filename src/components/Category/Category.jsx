// eslint-disable-next-line no-unused-vars
import React from 'react'
import HerbalTea from '../../assets/Herbal-tea.png'
import HerbSeeds from '../../assets/Herb-seeds.png'
import HerbalRemedies from '../../assets/Herbal-remedies.png'
import HerbalBath from '../../assets/Herbal-bath-products.png'

const Category = () => {
    return (
        <div className="px-[5vw] my-[2vw]">
            {/* Header section */}
            <div className="flex flex-col justify-center items-center">
                <h1
                    className="font-Lora text-[6.5vw] text-center sm:text-[3vw] md:text-[2.5vw] text-lightTextColor font-bold">
                    Explore Our Herbal Categories
                </h1>
                <p
                    className="text-center w-full md:w-[50vw] mt-[2vw] text-[3.5vw] md:text-[1.2vw] text-lightTextColor font-OpenSans">
                    Discover a wide variety of herbal products tailored to support your health and
                    wellness needs. Browse through our categories to find the perfect remedies for
                    your lifestyle.
                </p>
            </div>

            {/* Body */}
            <div
                className="grid grid-cols-1 w-[85vw] mx-auto md:grid-cols-3 mt-[5vw] gap-[4vw] md:gap-[2vw]">
                <div
                    className="border-lightGreen border-2 rounded-xl h-[75vw] md:h-[34.2vw]">
                    <div>
                        <img
                            src={HerbalTea}
                            alt="Herbal-tea image"
                            className="w-full h-[50vw] md:h-[20vw] rounded-t-xl"/>
                    </div>
                    <div
                        className="py-[4vw] md:py-[2vw] px-[3vw] sm:px-[2vw]">
                        <h2
                            className="font-Lora font-bold text-[4vw] md:text-[1.5vw] text-lightTextColor">Herbal Teas</h2>
                        <p
                            className="mt-[0.8vw] md:mt-[0.5vw] text-[3.5vw] md:text-[1vw] text-lightTextColor font-OpenSans">Strengthen your bodys defences with our range of herbal teas.</p>
                    </div>
                </div>

                <div
                    className="flex xs:flex-row xs:gap-[2vw] md:flex-col justify-between h-[60vw] md:h-[34.2vw] md:0">
                    <div
                        className="border-lightGreen border-2 rounded-xl h-[60vw] md:h-[16.5vw]">
                        <div>
                            <img
                                src={HerbSeeds}
                                alt="Herbal-Seed image"
                                className="w-full h-[28vw] md:h-[7.5vw] rounded-t-xl"/>
                        </div>
                        <div
                            className="py-[2.5vw] md:py-3 px-[3vw] sm:px-[2vw]">
                            <h2
                                className="font-Lora font-bold text-[4vw] md:text-[1.5vw] text-lightTextColor">Herb Seeds and Plants</h2>
                            <p
                                className="mt-[0.8vw] md:mt-[0.5vw] text-[3vw] md:text-[1vw] text-lightTextColor font-OpenSans">Find peace and calm with our stress-relief herbs.</p>
                        </div>
                    </div>

                    <div
                        className="border-lightGreen border-2 rounded-xl h-[60vw] md:h-[16.5vw]">
                        <div>
                            <img
                                src={HerbalRemedies}
                                alt="Herbal-Remedies image"
                                className="w-full h-[28vw] md:h-[7.5vw] rounded-t-xl"/>
                        </div>
                        <div
                            className="py-[2.5vw] md:py-3 px-[3vw] sm:px-[2vw]">
                            <h2
                                className="font-Lora font-bold text-[4vw] md:text-[1.5vw] text-lightTextColor">Herbal Remedies</h2>
                            <p
                                className="mt-[0.8vw] md:mt-[0.5vw] text-[3vw] md:text-[1vw] text-lightTextColor font-OpenSans">Support your digestive system with our natural remedies.</p>
                        </div>
                    </div>
                </div>

                <div
                    className="border-lightGreen border-2 rounded-xl h-[75vw] md:h-[34.2vw]">
                    <div>
                        <img
                            src={HerbalBath}
                            alt="Herbal-Bath-Products image"
                            className="w-full h-[50vw] md:h-[20vw] rounded-t-xl"/>
                    </div>
                    <div
                        className="py-[4vw] md:py-[2vw] px-[3vw] sm:px-[2vw]">
                        <h2
                            className="font-Lora font-bold text-[4vw] md:text-[1.5vw] text-lightTextColor">Herbal Bath Products</h2>
                        <p
                            className="mt-[0.8vw] md:mt-[0.5vw] text-[3.5vw] md:text-[1vw] text-lightTextColor font-OpenSans">Enhance your natural beauty with our herbal skin care products.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Category