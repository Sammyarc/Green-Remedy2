/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../../assets/logo/green remedies llogo-white 1.png'
import Twitter from '../../assets/Icons/twitter.svg'
import Instagram from '../../assets/Icons/instagram.svg'
import Facebook from '../../assets/Icons/facebook.svg'

const QuickLinks = [
    {
        id: 1,
        name: "Home",
        link: "#",
    },
    {
        id: 2,
        name: "Products",
        link: "#",
    },
    {
        id: 3,
        name: "About us",
        link: "#",
    },
    {
        id: 4,
        name: "Contact us",
        link: "#",
    },
    {
        id: 5,
        name: "Health resources",
        link: "#",
    },

]

const CustomerService = [
    {
        id: 1,
        name: "Testimonial",
        link: "#",
    },
    {
        id: 2,
        name: "Privacy Policy",
        link: "#",
    },
    {
        id: 3,
        name: "Join our team",
        link: "#",
    },
    {
        id: 4,
        name: "Affliate program",
        link: "#",
    },
    {
        id: 5,
        name: "Terms & Condition",
        link: "#",
    },

]

const Account = [
    {
        id: 1,
        name: "My Account",
        link: "#",
    },
    {
        id: 2,
        name: "Order History",
        link: "#",
    },
    {
        id: 3,
        name: "Payment and shipping option",
        link: "#",
    },
]

const Footer = () => {
    return (
        <div className='bg-darkGreen'>
        {/* Footer top */}
        <div className='px-[5vw] py-[5vw] flex flex-col md:flex-row justify-between'>
            <div className='w-full md:w-1/4'>
                <a href='#'>
                    <img src={Logo} alt="Green Remedies Logo" className='xs:w-[30vw] md:w-[15vw]'/>
                </a>
                <p className='text-milkWhite font-OpenSans xs:text-[3vw] sm:text-[2vw] md:text-[1vw] mt-[2vw] md:mt-[1vw]'>
                    Green Remedies offers a curated selection of high-quality traditional herbs to enhance your well-being naturally. Trust in our expertise and commitment to purity.
                </p>
                <div className='flex items-center mt-[3vw] xs:mt-[3vw] md:mt-[1.3vw] gap-[2vw] xs:gap-[1.5vw] sm:gap-[1vw]'>
                    <a href='#' className='xs:w-[10vw] md:w-[3vw] xs:h-[10vw] md:h-[3vw] flex justify-center items-center bg-milkWhite rounded-xl'>
                        <img src={Instagram} alt='Instagram Profile Link' className='xs:w-[5vw] md:w-[1.5vw]'/>
                    </a>
                    <a href='#' className='xs:w-[10vw] md:w-[3vw] xs:h-[10vw] md:h-[3vw] flex justify-center items-center bg-milkWhite rounded-xl'>
                        <img src={Facebook} alt='Facebook Profile Link' className='xs:w-[5vw] md:w-[1.5vw]'/>
                    </a>
                    <a href='#' className='xs:w-[10vw] md:w-[3vw] xs:h-[10vw] md:h-[3vw] flex justify-center items-center bg-milkWhite rounded-xl'>
                        <img src={Twitter} alt='Twitter Profile Link' className='xs:w-[5vw] md:w-[1.5vw]'/>
                    </a>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:flex sm:flex-row justify-between gap-[3.5vw] sm:gap-[1.4vw] w-full md:w-3/5 mt-[5vw] md:mt-0'>
                <div>
                    <h2 className='font-Lora font-semibold text-white text-[4vw] xs:text-[4vw] sm:text-[2.5vw] md:text-[1.4vw]'>Quick Links</h2>
                    <ul className='xs:mt-[1.5vw] sm:mt-[0.1vw] md:mt-[0.5vw]'>
                        {QuickLinks.map((data) => (
                            <li key={data.id} className='xs:py-[0.8vw] sm:py-[0.2vw] md:py-[0.3vw]'>
                                <a href={data.link} className="text-milkWhite hover:text-gray-300 font-OpenSans text-[3vw] xs:text-[3vw] sm:text-[2vw] md:text-[1vw]">{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
    
                <div>
                    <h2 className='font-Lora font-semibold text-white text-[4vw] xs:text-[4vw] sm:text-[2.5vw] md:text-[1.4vw]'>Customer Service</h2>
                    <ul className='xs:mt-[1.5vw] sm:mt-[0.1vw] md:mt-[0.5vw]'>
                        {CustomerService.map((data) => (
                            <li key={data.id} className='xs:py-[0.8vw] sm:py-[0.2vw] md:py-[0.3vw]'>
                                <a href={data.link} className="text-milkWhite hover:text-gray-300 font-OpenSans text-[3vw] xs:text-[3vw] sm:text-[2vw] md:text-[1vw]">{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
    
                <div>
                    <h2 className='font-Lora font-semibold text-white text-[4vw] xs:text-[4vw] sm:text-[2.5vw] md:text-[1.4vw]'>Account Information</h2>
                    <ul className='xs:mt-[1.5vw] sm:mt-[0.1vw] md:mt-[0.5vw]'>
                        {Account.map((data) => (
                            <li key={data.id} className='xs:py-[0.8vw] sm:py-[0.2vw] md:py-[0.3vw]'>
                                <a href={data.link} className="text-milkWhite hover:text-gray-300 font-OpenSans text-[3vw] xs:text-[3vw] sm:text-[2vw] md:text-[1vw]">{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    
        {/* Footer bottom */}
        <div className='flex justify-center items-center xs:py-[2vw] sm:py-[1.5vw] md:py-[0.4vw]'>
            <p className='text-white font-OpenSans xs:text-[3vw] sm:text-[2vw] md:text-[1.2vw]'>Copyright 2024 - Green Remedies, All Rights Reserved.</p>
        </div>
    </div>
    
    )
}

export default Footer