// eslint-disable-next-line no-unused-vars
import React from 'react'
import Blog1 from '../../assets/blog1.png'
import Blog2 from '../../assets/blog2.png'
import RightArrow from '../../assets/Icons/Right arrow2.svg'

const blogItems = [
    {
        id: 1,
        image: Blog1,
        heading: "Myth about herbs",
        paragraph: "Acupressure is an ancient healing technique that has been used for centuries t" +
                "o promote well-being and alleviate...",
        link: "Herbal therapy",
        read: "3 mins read"
    }, {
        id: 2,
        image: Blog2,
        heading: "Myth about herbs",
        paragraph: "Acupressure is an ancient healing technique that has been used for centuries t" +
                "o promote well-being and alleviate...",
        link: "Physical therapy",
        read: "3 mins read"
    }, {
        id: 3,
        image: Blog1,
        heading: "Myth about herbs",
        paragraph: "Acupressure is an ancient healing technique that has been used for centuries t" +
                "o promote well-being and alleviate...",
        link: "Herbal therapy",
        read: "3 mins read"
    }
]

const Blog = () => {
    return (
        <div className='px-[5vw] pt-[10vw]'>

            {/* Header section */}
            <div className='flex flex-col justify-center items-center'>
                <h1
                    className='font-Lora text-[7vw] xs:text-[5vw] sm:text-[4vw] md:text-[2.5vw] text-lightTextColor font-bold text-center'>Recent Blog Post</h1>
                <p
                    className='text-center w-full xs:w-[90vw] sm:w-[60vw] md:w-[50vw] mt-[2vw] xs:mt-[1.5vw] sm:mt-[1vw] md:mt-[0.5vw] text-[3.5vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.2vw] text-lightTextColor font-OpenSans'>Stay
                    up to date with our recent blog posts, featuring insightful articles on health,
                    wellness, and natural remedies for your daily life.
                </p>
            </div>

            {/* Body section */}

            <div className="mt-[8vw] xs:mt-[6vw] sm:mt-[5vw] md:mt-[4vw]">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[6vw] xs:gap-[4vw] sm:gap-[3vw] md:gap-[1.5vw]">
                    {
                        blogItems.map((data) => (
                            <div
                                key={data.id}
                                className="px-[5vw] xs:px-[4vw] sm:px-[3vw] md:px-[1.5vw] py-[6vw] xs:py-[5vw] sm:py-[4vw] md:py-[3vw] rounded-[4vw] xs:rounded-[3vw] sm:rounded-[2.5vw] md:rounded-2xl border-[0.4vw] xs:border-[0.3vw] sm:border-[0.2vw] md:border-[0.15vw] border-darkGreen">
                                <img
                                    src={data.image}
                                    className="w-full h-[40vw] xs:h-[40vw] sm:h-[25vw] md:h-[18vw]"/>
                                <h1
                                    className='mt-[5vw] xs:mt-[4vw] sm:mt-[3vw] md:mt-[2.5vw] font-Lora font-semibold text-[5vw] xs:text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] text-textColor'>
                                    {data.heading}
                                </h1>
                                <p
                                    className='mt-[5vw] xs:mt-[4vw] sm:mt-[3vw] md:mt-[2.5vw] font-OpenSans text-[3.5vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.2vw] text-textColor w-full md:w-[25vw]'>{data.paragraph}</p>
                                <div
                                    className='mt-[5vw] xs:mt-[4vw] sm:mt-[3vw] md:mt-[2.5vw] flex items-center justify-between'>
                                    <a
                                        href='#'
                                        className='xs:w-[25vw] sm:w-[17.5vw] md:w-[12.5vw] h-[8vw] xs:h-[8vw] sm:h-[5vw] md:h-[4.5vw] text-[3.5vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.3vw] rounded-[3vw] xs:rounded-[2.5vw] sm:rounded-[2vw] md:rounded-xl bg-darkGreen flex items-center justify-center text-white'>{data.link}</a>
                                    <p
                                        className='font-OpenSans text-textColor text-[3.5vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.2vw]'>{data.read}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Footer section */}

            <div
                className='flex justify-center mt-[6vw] xs:mt-[5vw] sm:mt-[4vw] md:mt-[3vw]'>
                <a
                    href='#'
                    className='text-darkGreen xs:w-[45vw] sm:w-[30vw] md:w-[24vw] h-[10vw] xs:h-[8vw] sm:h-[6vw] md:h-[5vw] text-[4vw] xs:text-[3vw] sm:text-[2vw] md:text-[1.5vw] flex justify-center gap-[1vw] items-center border border-darkGreen rounded-[3vw] xs:rounded-[2.5vw] sm:rounded-[2vw] md:rounded-2xl font-bold font-OpenSans'>
                    Explore more blog posts
                    <img
                        src={RightArrow}
                        alt='Arrow Icon'
                        className='w-[5vw] xs:w-[4vw] sm:w-[3vw] md:w-[2vw]'/>
                </a>
            </div>

        </div>
    )
}

export default Blog