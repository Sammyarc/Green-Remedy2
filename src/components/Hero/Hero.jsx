// eslint-disable-next-line no-unused-vars
import React from 'react';
import hero from '../../assets/Hero-image.png';

const Hero = () => {
    return (
        <div
            className="flex flex-col md:flex-row md:justify-between md:gap-[2vw] items-center px-4 pt-8 pb-12 md:px-[5vw] md:pt-[5vw] md:pb-[10vw] bg-darkGreen">
            <div className="w-full md:w-[30vw] mb-8 md:mb-0">
                <h1
                    className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-Lora font-bold leading-tight text-milkWhite">
                    Embrace Nature&apos;s Healing Power
                </h1>
                <p
                    
                    
                    
                    className="mt-4 text-[3vw] sm:text-[2vw] md:text-[1vw] text-milkWhite font-OpenSans">
                    At Green Remedies, we connect you with nature&apos;s finest remedies to enhance
                    your well-being. Explore our collection and find the perfect natural solution
                    for your health needs.
                </p>
                <a
                   
                    
                    
                    href="#"
                    className="font-OpenSans bg-milkWhite text-lightTextColor mt-6 w-[35vw] md:w-[12.5vw] h-[8vw] sm:h-[6vw] md:h-[4vw] text-[3vw] sm:text-[2.5vw] md:text-[1.1vw] flex justify-center items-center rounded-xl md:rounded-3xl font-bold">
                    Explore our herbs
                </a>
            </div>
            <div className="w-full md:w-[40vw]" >
                <img src={hero} alt="An image of different herbs" className="w-full h-auto"/>
            </div>
        </div>

    )
}

export default Hero