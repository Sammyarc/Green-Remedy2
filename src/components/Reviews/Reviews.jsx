// eslint-disable-next-line no-unused-vars
import React from 'react'
import Quotes from '../../assets/Icons/quotes.svg'
import Starfilled from '../../assets/Icons/star-filled.svg'
import Starempty from '../../assets/Icons/star-empty.svg'
import Review1 from '../../assets/jake-nackos-IF9TK5Uy-KI-unsplash (2).jpg'
import Review2 from '../../assets/michael-dam-mEZ3PoFGs_k-unsplash (2).jpg'
import Review3 from '../../assets/oluwaferanmi-caleb-Q1QRTSeZIxI-unsplash (2).jpg'
import Review4 from '../../assets/pexels-photo-1222271.jpeg'
import Review5 from '../../assets/christopher-campbell-rDEOVtE7vOs-unsplash (2).jpg'
import Review6 from '../../assets/cody-scott-milewski-vXgV5XUlTog-unsplash (2).jpg'

const reviewItems = [
    {
        id: 1,
        image: Quotes,
        paragraph: "Green Remedies has been a game-changer for me. Their website makes it so easy to find the herbal supplements I need, and the results have been amazing!",
        starfilled: Starfilled,
        starempty: Starempty,
        review: Review1,
        name: "Adebayo Olamide",
        title: "Entrepreneur"
    }, {
        id: 2,
        image: Quotes,
        paragraph: "As someone who values natural healing, Green Remedies is my go-to online shop. Their platform is user-friendly, and I always find the herbal products that keep me healthy.",
        starfilled: Starfilled,
        starempty: Starempty,
        review: Review2,
        name: "Chioma Okeke",
        title: "Teacher"
    }, {
        id: 3,
        image: Quotes,
        paragraph: "I recommend Green Remedies to all my clients. The site offers a great selection of herbal teas and supplements that support a healthy lifestyle naturally and effectively.",
        starfilled: Starfilled,
        starempty: Starempty,
        review: Review3,
        name: "Tunde Adeyemi",
        title: "Fitness Coach"
    }, {
        id: 4,
        image: Quotes,
        paragraph: "Green Remedies has restored my faith in traditional medicine. Their eCommerce site offers affordable and highly effective herbal products, delivered right to my door.",
        starfilled: Starfilled,
        starempty: Starempty,
        review: Review4,
        name: "Fatima Abubakar",
        title: "Civil Servant"
    }, {
        id: 5,
        image: Quotes,
        paragraph: "I’ve been using Green Remedies for my family’s health needs, and I couldn’t be happier. Their online store is easy to navigate, and their natural products truly work wonders.",
        starfilled: Starfilled,
        starempty: Starempty,
        review: Review5,
        name: "Ngozi Umeh",
        title: "Mother"
    }, {
        id: 6,
        image: Quotes,
        paragraph: "Green Remedies has provided me with natural solutions for stress and anxiety. I appreciate how convenient their website is, making it simple to order the herbal remedies I need.",
        starfilled: Starfilled,
        starempty: Starempty,
        review: Review6,
        name: "Babatunde Ogunleye",
        title: "Engineer"
    }
]

const Reviews = () => {
    return (
        <div className='px-[5vw] pt-[8vw] pb-[5vw] bg-darkGreen'>

            {/* Header section */}
            <div className='flex flex-col justify-center items-center'>
                <h1
                    className='font-Lora text-[6.5vw] md:text-[2.5vw] text-white font-bold text-center'>What Our Customers Say</h1>
                <p
                    className='text-center w-full xs:w-[90vw] sm:w-[60vw] md:w-[50vw] mt-[2vw] xs:mt-[1.5vw] sm:mt-[1vw] md:mt-[0.5vw] text-[3.5vw] md:text-[1.2vw] text-white font-OpenSans'>Read
                    the experiences and success stories of those who have benefited from our
                    traditional herbs.
                </p>
            </div>

            {/* Body section */}

            <div className="mt-[8vw] xs:mt-[6vw] sm:mt-[5vw] md:mt-[4vw]">
                <div
                    className="grid grid-cols-2 md:grid-cols-3 gap-[6vw] xs:gap-[4vw] sm:gap-[3vw] md:gap-[2vw]">
                    {
                        reviewItems.map((data) => (
                            <div
                                key={data.id}
                                className="bg-white py-[4vw] xs:py-[3vw] sm:py-[2.5vw] md:py-[2vw] px-[4vw] xs:px-[3vw] sm:px-[2.5vw] md:px-[1.5vw] rounded-bl-[10vw] xs:rounded-bl-[8vw] sm:rounded-bl-[7vw] md:rounded-bl-[6vw] rounded-br-xl rounded-tr-xl rounded-tl-xl">
                                <img
                                    src={data.image}
                                    className="w-[5vw] md:w-[2vw] h-[5vw] md:h-[2vw]"></img>
                                <div
                                    className='px-[3vw] xs:px-[2.5vw] sm:px-[2vw] md:px-[1.5vw] mt-[6vw] xs:mt-[5vw] sm:mt-[4vw] md:mt-[2vw]'>
                                    <p
                                        className='font-OpenSans text-[3vw] md:text-[1.2vw] font-medium w-full md:w-[20vw]'>{data.paragraph}</p>
                                    <div
                                        className='flex items-center gap-[2vw] md:gap-[0.7vw] mt-[4vw] sm:mt-[3vw] md:mt-[2vw]'>
                                        <img src={Starfilled} className='w-[4vw] md:w-[1.5vw]'/>
                                        <img src={Starfilled} className='w-[4vw] md:w-[1.5vw]'/>
                                        <img src={Starfilled} className='w-[4vw] md:w-[1.5vw]'/>
                                        <img src={Starfilled} className='w-[4vw] md:w-[1.5vw]'/>
                                        <img src={Starempty} className='w-[4vw] md:w-[1.5vw]'/>
                                    </div>
                                    <div
                                        className='mt-[4vw] xs:mt-[3vw] sm:mt-[2.5vw] md:mt-[2vw] flex items-center gap-[4vw] xs:gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw]'>
                                        <div
                                            className="w-[15vw] md:w-[5vw] h-[12vw] md:h-[5vw] rounded-full border-[0.8vw] xs:border-[0.5vw] sm:border-[0.4vw] md:border-[0.3vw] border-darkGreen">
                                            <img src={data.review} className="w-full h-full object-cover rounded-full"/>
                                        </div>
                                        <div>
                                            <p
                                                className='font-OpenSans text-[3vw] md:text-[1.2vw] font-bold text-textColor'>{data.name}</p>
                                            <p
                                                className='font-OpenSans text-[2.5vw] md:text-[0.9vw] font-bold text-textColor'>{data.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Reviews