// eslint-disable-next-line no-unused-vars
import React from 'react'

const Features = () => {
    return (
        <div className="mx-[5vw] my-[5vw] grid grid-cols-2 gap-[2vw] md:grid-cols-4">
            <div
                className="flex justify-center items-center flex-col p-[3.5vw] md:p-[1.5vw] bg-darkGreen rounded-lg">
                <h2
                    className="text-[6vw] md:text-[3vw] text-white font-Lora font-medium">1+</h2>
                <p
                    className="text-white font-OpenSans text-[3vw] sm:text-[1.5vw] md:text-[1vw] mt-[0.5vw]">Years of Hard Work</p>
            </div>

            <div
                className="flex justify-center items-center flex-col p-[3.5vw] md:p-[1.5vw] bg-darkGreen rounded-lg">
                <h2
                    className="text-[6vw] md:text-[3vw] text-white font-Lora font-medium">10k+</h2>
                <p
                    className="text-white font-OpenSans text-[3vw] sm:text-[1.5vw] md:text-[1vw] mt-[0.5vw]">Happy Customers</p>
            </div>

            <div
                className="flex justify-center items-center flex-col p-[3.5vw] md:p-[1.5vw] bg-darkGreen rounded-lg">
                <h2
                    className="text-[6vw] md:text-[3vw] text-white font-Lora font-medium">15</h2>
                <p
                    className="text-white font-OpenSans text-[3vw] sm:text-[1.5vw] md:text-[1vw] mt-[0.5vw]">Qualified Team Members</p>
            </div>

            <div
                className="flex justify-center items-center flex-col p-[3.5vw] md:p-[1.5vw] bg-darkGreen rounded-lg">
                <h2
                    className="text-[6vw] md:text-[3vw] text-white font-Lora font-medium">50k+</h2>
                <p
                    className="text-white font-OpenSans text-[3vw] sm:text-[1.5vw] md:text-[1vw] mt-[0.5vw]">Monthly Orders</p>
            </div>
        </div>

    )
}

export default Features