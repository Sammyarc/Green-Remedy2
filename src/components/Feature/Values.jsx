// eslint-disable-next-line no-unused-vars
import React from 'react'

const valueItems = [
    {
        "id": 1,
        "value": "Quality",
        "text": "We source only the finest natural ingredients to ensure the highest quality products.",
    },{
        "id": 2,
        "value": "Integrity",
        "text": "We believe in honesty and transparency in everything we do.",
    },{
        "id": 3,
        "value": "Customer Satisfaction",
        "text": "Our customers are at the heart of everything we do. We strive to exceed their expectations.",
    },{
        "id": 4,
        "value": "Sustainability",
        "text": "We are committed to sustainable practices that respect and protect the environment.",
    }
]

const Values = () => {
  return (
    <div className='px-[5vw] pt-[8vw] mt-[3vw] pb-[8vw] bg-darkGreen'>

    {/* Header section */}
    <div className='flex flex-col justify-center items-center'>
        <h1
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            className='font-Lora md:text-[2.5vw] text-white font-bold'>Our Values</h1>
        <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            className='md:text-center md:w-[40vw] md:mt-[0.5vw] text-[1.2vw] text-white'>We believe in the power of nature to heal and nurture, and we are dedicated to providing you with the best natural health solutions.
        </p>
    </div>

    {/* Body section */}

    <div className="mt-[4vw]">
                <div
                    className=""
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300">
                    {
                        valueItems.map((data) => (
                            <div
                                key={data.id}
                                className="flex justify-between items-center gap-[13.5vw] w-[60vw] mx-auto p-[1.5vw] border-b border-white">
                                <h2 className="text-[2vw] font-bold font-Lora text-white">{data.value}</h2>
                                <p className="text-[1vw] font-OpenSans text-white w-[23vw]">{data.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
    
</div>
  )
}

export default Values