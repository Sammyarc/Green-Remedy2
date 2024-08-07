// eslint-disable-next-line no-unused-vars
import React from 'react'
import Blog1 from '../../assets/blog1.png'
import Blog2 from '../../assets/blog2.png'
import RightArrow from '../../assets/Icons/Right arrow2.svg'


const blogItems =[
    {
        id: 1,
        image: Blog1,
        heading: "Myth about herbs",
        paragraph: "Acupressure is an ancient healing technique that has been used for centuries to promote well-being and alleviate...",
        link: "Herbal therapy",
        read: "3 mins read",
    },{
        id: 2,
        image: Blog2,
        heading: "Myth about herbs",
        paragraph: "Acupressure is an ancient healing technique that has been used for centuries to promote well-being and alleviate...",
        link: "Physical therapy",
        read: "3 mins read",
    },{
        id: 3,
        image: Blog1,
        heading: "Myth about herbs",
        paragraph: "Acupressure is an ancient healing technique that has been used for centuries to promote well-being and alleviate...",
        link: "Herbal therapy",
        read: "3 mins read",
    },
]



const Blog = () => {
    return (
        <div className='px-[5vw] py-[10vw]'>

            {/* Header section */}
            <div className='flex flex-col justify-center items-center'>
                <h1
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className='font-Lora text-[2.5vw] text-lightTextColor font-bold'>Recent Blog Post</h1>
                <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    className='md:text-center md:w-[50vw] md:mt-[0.5vw] text-[1.2vw] text-lightTextColor'>Stay
                    up to date with our recent blog posts, featuring insightful articles on health,
                    wellness, and natural remedies for your daily life.
                </p>
            </div>


            {/* Body section */}

            <div className="mt-[5vw]">
                <div
                    className="md:grid md:grid-cols-3 gap-[1.5vw]"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100">
                    {
                       blogItems.map((data) => (
                            <div
                                key={data.id}
                                className="px-[1.5vw] py-[3vw] rounded-2xl border-[0.15vw] border-darkGreen">
                                <img src={data.image} className="w-full h-[18vw]" />
                                <h1 className='mt-[2.5vw] font-Lora font-semibold text-[2vw] text-textColor'>
                                    {data.heading}
                                </h1>
                                <p className='mt-[2.5vw] font-OpenSans text-[1.2vw] text-textColor w-[25vw]'>{data.paragraph}</p>
                                <div className='mt-[2.5vw] flex items-center justify-between'>
                                    <a href='#' className='w-[12.5vw] h-[4.5vw] text-[1.3vw] rounded-xl bg-darkGreen flex items-center justify-center text-white'>{data.link}</a>
                                    <p className='font-OpenSans text-textColor text-[1.2vw]'>{data.read}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

             {/* Footer section */}

             <div className='flex justify-center mt-[3vw]'>
             <a
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    href='#'
                    className='text-darkGreen w-[24vw] h-[5vw] text-[1.5vw] flex justify-center gap-[0.2vw] items-center border border-darkGreen rounded-2xl font-bold'>Explore more blog post
                    <img src={RightArrow} alt='Arrow Icon' className='w-[2vw]'/></a>
             </div>

            
        </div>
    )
}

export default Blog