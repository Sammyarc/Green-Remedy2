// eslint-disable-next-line no-unused-vars
import React from 'react'

const valueItems = [
    {
        "id": 1,
        "value": "Quality",
        "text": "We source only the finest natural ingredients to ensure the highest quality pr" +
                "oducts."
    }, {
        "id": 2,
        "value": "Integrity",
        "text": "We believe in honesty and transparency in everything we do."
    }, {
        "id": 3,
        "value": "Customer Satisfaction",
        "text": "Our customers are at the heart of everything we do. We strive to exceed their " +
                "expectations."
    }, {
        "id": 4,
        "value": "Sustainability",
        "text": "We are committed to sustainable practices that respect and protect the environ" +
                "ment."
    }
]

const Values = () => {
    return (
        <div className='px-[5vw] pt-[8vw] mt-[3vw] pb-[8vw] bg-darkGreen'>

        {/* Header section */}
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-Lora text-[5vw] md:text-[3vw] text-white font-bold'>Our Values</h1>
            <p className='text-center w-[80vw] md:w-[50vw] lg:w-[40vw] mt-[2vw] xs:text-[2.5vw] md:text-[1.4vw] text-white font-OpenSans'>
                We believe in the power of nature to heal and nurture, and we are dedicated to providing you with the best natural health solutions.
            </p>
        </div>
    
        {/* Body section */}
        <div className='mt-[3vw] md:mt-[4vw]'>
            <div>
                {valueItems.map((data) => (
                    <div
                        key={data.id}
                        className='flex flex-col md:flex-row justify-between items-start sm:items-center gap-[1.5vw] md:gap-[13.5vw] w-[85vw] md:w-[60vw] mx-auto p-[2vw] border-b border-white'>
                        <h2 className='text-[3.5vw] md:text-[2vw] font-bold font-Lora text-white'>{data.value}</h2>
                        <p className='mt-[1vw] sm:mt-0 text-[2vw] md:text-[1vw] font-OpenSans text-white w-full md:w-[23vw]'>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    
    </div>
    
    )
}

export default Values