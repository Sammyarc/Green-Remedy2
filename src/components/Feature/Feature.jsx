// eslint-disable-next-line no-unused-vars
import React from 'react'
import Truck from '../../assets/Icons/delivery-truck 1.svg'
import Headphone from '../../assets/Icons/headphones 1.svg'
import Package from '../../assets/Icons/package.svg'
import ShoppingBag from '../../assets/Icons/shopping-bag.svg'

const Feature = () => {
    return (
        <div className="mx-[5vw] xs:grid-cols-2 grid md:grid-cols-4 shadow-xl bg-white -translate-y-[5vw] rounded-md">
        <div
          className="flex justify-center items-center flex-col p-[5vw] xs:p-[4vw] sm:p-[3vw] md:p-[2vw] border-b-[1px] md:border-b-0 border-r-[1px] border-darkerGreen"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100">
          <div
            className="w-[7vw] h-[7vw] xs:w-[6vw] xs:h-[6vw] sm:w-[5vw] sm:h-[5vw] md:w-[4.2vw] md:h-[4.2vw] flex justify-center items-center rounded-full bg-darkerGreen">
            <img src={Truck} alt="Truck icon" className="w-[3vw] xs:w-[2.5vw] sm:w-[2vw] md:w-[1.7vw]" />
          </div>
          <h2 className="text-[3.5vw] xs:text-[3vw] sm:text-[2.5vw] md:text-[1.2vw] text-lightTextColor font-Poppins font-semibold mt-[2vw] xs:mt-[1.5vw] sm:mt-[1.2vw] md:mt-[1vw]">Free Shipping</h2>
          <p className="text-[2.5vw] xs:text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-lightTextColor font-Poppins mt-[1.5vw] xs:mt-[1vw] sm:mt-[0.8vw] md:mt-[0.8vw]">Free shipping with discount</p>
        </div>
      
        <div
          className="flex justify-center items-center flex-col p-[5vw] xs:p-[4vw] sm:p-[3vw] md:p-[2vw] border-b-[1px] md:border-b-0 md:border-r-[1px] border-darkerGreen"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200">
          <div
            className="w-[7vw] h-[7vw] xs:w-[6vw] xs:h-[6vw] sm:w-[5vw] sm:h-[5vw] md:w-[4.2vw] md:h-[4.2vw] flex justify-center items-center rounded-full bg-darkerGreen">
            <img src={Headphone} alt="Headphone icon" className="w-[3vw] xs:w-[2.5vw] sm:w-[2vw] md:w-[1.7vw]" />
          </div>
          <h2 className="text-[3.5vw] xs:text-[3vw] sm:text-[2.5vw] md:text-[1.2vw] text-lightTextColor font-Poppins font-semibold mt-[2vw] xs:mt-[1.5vw] sm:mt-[1.2vw] md:mt-[1vw]">Great Support 24/7</h2>
          <p className="text-[2.5vw] xs:text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-lightTextColor font-Poppins mt-[1.5vw] xs:mt-[1vw] sm:mt-[0.8vw] md:mt-[0.8vw]">Instant access to Contact</p>
        </div>
      
        <div
          className="flex justify-center items-center flex-col p-[5vw] xs:p-[4vw] sm:p-[3vw] md:p-[2vw] md:border-b-0 border-r-[1px] border-darkerGreen"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300">
          <div
            className="w-[7vw] h-[7vw] xs:w-[6vw] xs:h-[6vw] sm:w-[5vw] sm:h-[5vw] md:w-[4.2vw] md:h-[4.2vw] flex justify-center items-center rounded-full bg-darkerGreen">
            <img src={ShoppingBag} alt="Shopping bag icon" className="w-[3vw] xs:w-[2.5vw] sm:w-[2vw] md:w-[1.7vw]" />
          </div>
          <h2 className="text-[3.5vw] xs:text-[3vw] sm:text-[2.5vw] md:text-[1.2vw] text-lightTextColor font-Poppins font-semibold mt-[2vw] xs:mt-[1.5vw] sm:mt-[1.2vw] md:mt-[1vw]">100% Secure Payment</h2>
          <p className="text-[2.5vw] xs:text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-lightTextColor font-Poppins mt-[1.5vw] xs:mt-[1vw] sm:mt-[0.8vw] md:mt-[0.8vw]">We ensure your money is safe</p>
        </div>
      
        <div
          className="flex justify-center items-center flex-col p-[5vw] xs:p-[4vw] sm:p-[3vw] md:p-[2vw]"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="400">
          <div
            className="w-[7vw] h-[7vw] xs:w-[6vw] xs:h-[6vw] sm:w-[5vw] sm:h-[5vw] md:w-[4.2vw] md:h-[4.2vw] flex justify-center items-center rounded-full bg-darkerGreen">
            <img src={Package} alt="Package icon" className="w-[3vw] xs:w-[2.5vw] sm:w-[2vw] md:w-[1.7vw]" />
          </div>
          <h2 className="text-[3.5vw] xs:text-[3vw] sm:text-[2.5vw] md:text-[1.2vw] text-lightTextColor font-Poppins font-semibold mt-[2vw] xs:mt-[1.5vw] sm:mt-[1.2vw] md:mt-[1vw]">Money-Back Guarantee</h2>
          <p className="text-[2.5vw] xs:text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-lightTextColor font-Poppins mt-[1.5vw] xs:mt-[1vw] sm:mt-[0.8vw] md:mt-[0.8vw]">30 days money-back guarantee</p>
        </div>
      </div>
      

    )
}

export default Feature