// eslint-disable-next-line no-unused-vars
import React from 'react';
import BgImage from '../../assets/aboutHero.png';

const AboutHero = () => {
    return (
        <div
            className="flex justify-center text-center md:gap-[2vw] items-center px-4 pt-8 pb-12 md:px-[5vw] md:pt-[5vw] md:pb-[10vw]"
            style={{
                backgroundImage: `url(${BgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div className="w-full md:w-[30vw] mb-8 md:mb-0">
                <span
                    
                    className='text-center mt-4 text-[3vw] sm:text-[2vw] md:text-[1vw] text-milkWhite font-OpenSans'>ABOUT US</span>
                <h1
                    
                    className="text-center text-[6vw] sm:text-[4vw] md:text-[3vw] font-Lora font-bold leading-tight text-milkWhite">
                    Welcome to Green Remedies
                </h1>
                <p
                    className="text-center mt-2 text-[3vw] sm:text-[2vw] md:text-[1vw] text-milkWhite font-OpenSans">
                    Your Trusted Source for Natural Health Solutions
                </p>
            </div>
        </div>
    );
};

export default AboutHero;
