// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sentiment from '../../assets/Icons/sentiment_satisfied.svg'
import Plant from '../../assets/Icons/Group 4.svg'
import Library from '../../assets/Icons/local_library.svg'

// eslint-disable-next-line react-refresh/only-export-components
const Grid = [
    {
        id: 1,
        image: Sentiment,
        heading: "Customer Satisfaction",
        paragraph: "Your satisfaction is our priority. We offer a hassle-free return policy and ex" +
                "cellent customer support to ensure you have the best experience."
    }, {
        id: 2,
        image: Plant,
        heading: "Traditional Herbs",
        paragraph: "We source our herbs directly from trusted growers who follow traditional metho" +
                "ds, ensuring you receive authentic and high-quality products."
    }, {
        id: 3,
        image: Library,
        heading: "Educational Resources",
        paragraph: "Access detailed information and guidance on the benefits and uses of each herb" +
                ", helping you make informed decisions about your health."
    }
]

const why = () => {
    return (
        <div className='px-[5vw] my-[2vw]'>
            {/* Header section */}
            <div className='flex flex-col justify-center items-center'>
                <h1
                    className='font-Lora text-[7vw] xs:text-[5vw] sm:text-[4vw] md:text-[2.5vw] text-lightTextColor font-bold'>
                    Why Choose Green Remedies
                </h1>
                <p
                    className='text-center w-full xs:w-[90vw] sm:w-[60vw] md:w-[50vw] mt-[2vw] xs:mt-[1.5vw] sm:mt-[1vw] md:mt-[0.5vw] text-[3.5vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.2vw] text-lightTextColor font-OpenSans'>
                    Our safe and effective herbal remedies are distinguished by sensory evaluation
                    techniques and the Organoleptic Method for quality and potency.
                </p>
            </div>

            {/* Body */}
            <div className="mt-[5vw]">
                <div
                    className="grid xs:gap-[3vw] xs:grid-cols-1 md:grid-cols-3 md:gap-[2vw] lg:grid-cols-3">
                    {
                        Grid.map((data) => (
                            <div
                                key={data.id}
                                className="bg-darkGreen py-[4vw] xs:px-[4vw] rounded-[1.2vw] xs:w-[80vw] xs:mx-auto md:w-full md:px-[2vw]">
                                <div
                                    className='w-[6vw] xs:w-[8vw] sm:w-[7vw] md:w-[5vw] h-[6vw] xs:h-[8vw] sm:h-[7vw] md:h-[5vw] bg-white rounded-full flex flex-col justify-center items-center'>
                                    <img
                                        src={data.image}
                                        className="w-[3vw] xs:w-[4vw] sm:w-[3.5vw] md:w-[2.5vw] h-[3vw] xs:h-[4vw] sm:h-[3.5vw] md:h-[2.5vw]"
                                        alt="Icon"/>
                                </div>
                                <h1
                                    className='mt-[1.3vw] text-white font-Lora font-semibold text-[2vw] xs:text-[3.5vw] sm:text-[2.2vw] md:text-[1.5vw]'>{data.heading}</h1>
                                <p
                                    className='mt-[1.3vw] text-white font-OpenSans text-[1vw] xs:text-[2.5vw] sm:text-[1.1vw] md:text-[1vw]'>{data.paragraph}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default why