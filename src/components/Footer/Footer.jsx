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
            <div className='px-[5vw] py-[5vw] flex justify-between'>
                <div className='w-1/4'>
                    <a href='#'>
                    <img src={Logo} alt="Green Remedies Logo"/>
                    </a>
                    <p className='text-milkWhite font-OpenSans w-[30vw] text-[1vw] mt-[1vw]'>Green Remedies offers a curated selection of high-quality traditional herbs
                        to enhance your well-being naturally. Trust in our expertise and commitment to
                        purity.</p>
                    <div className='flex items-center mt-[1.3vw] gap-[1vw]'>
                        <a href='#' className='w-[3vw] h-[3vw] flex justify-center items-center bg-milkWhite rounded-xl'>
                            <img src={Instagram} alt='Instagram Profile Link'  className='w-[1.5vw]'/>
                        </a>
                        <a href='#' className='w-[3vw] h-[3vw] flex justify-center items-center bg-milkWhite rounded-xl'>
                            <img src={Facebook} alt='Facebook Profile Link'  className='w-[1.5vw]'/>
                        </a>
                        <a href='#' className='w-[3vw] h-[3vw] flex justify-center items-center bg-milkWhite rounded-xl'>
                            <img src={Twitter} alt='Twitter Profile Link'  className='w-[1.5vw]'/>
                        </a>
                    </div>
                </div>
                <div className='flex justify-between gap-[1.4vw] w-3/5'>
                    <div>
                        <h2 className='font-Lora font-semibold text-white text-[1.4vw]'>Quick Links</h2>
                        <ul className='mt-[0.2vw]'>
                        {
                        QuickLinks.map((data) => (
                          <li key={data.id} className='py-[0.15vw]'>
                            <a href={data.link} className="text-milkWhite hover:text-gray-300 font-OpenSans text-[1vw]">{data.name}</a>
                          </li>
                        ))
                    }
                        </ul>
                    </div>

                    <div>
                        <h2 className='font-Lora font-semibold text-white text-[1.4vw]'>Customer service</h2>
                        <ul className='mt-[0.2vw]'>
                        {
                        CustomerService.map((data) => (
                          <li key={data.id} className='py-[0.15vw]'>
                            <a href={data.link} className="text-milkWhite hover:text-gray-300 font-OpenSans text-[1vw]">{data.name}</a>
                          </li>
                        ))
                    }
                        </ul>
                    </div>

                    <div>
                        <h2 className='font-Lora font-semibold text-white text-[1.4vw]'>Account Information</h2>
                        <ul className='mt-[0.2vw]'>
                        {
                        Account.map((data) => (
                          <li key={data.id} className='py-[0.15vw]'>
                            <a href={data.link} className="text-milkWhite hover:text-gray-300 font-OpenSans text-[1vw]">{data.name}</a>
                          </li>
                        ))
                    }
                        </ul>
                    </div>

                </div>
            </div>

            {/* Footer bottom */}
            <div className='flex justify-center items-center py-[0.4vw]'>
                <p className='text-white font-OpenSans text-[1vw]'>Copyright 2024 - Green Remedies, All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer