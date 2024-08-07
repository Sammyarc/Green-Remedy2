// eslint-disable-next-line no-unused-vars
import React from 'react'
import HerbalTea from '../../assets/Herbal-tea.png'
import HerbSeeds from '../../assets/Herb-seeds.png'
import HerbalRemedies from '../../assets/Herbal-remedies.png'
import HerbalBath from '../../assets/Herbal-bath-products.png'

const Category = () => {
    return (
        <div className="px-[5vw] my-[2vw]">
  {/* Header section */}
  <div className="flex flex-col justify-center items-center">
    <h1
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="100"
      className="font-Lora text-[5vw] xs:text-[4vw] sm:text-[3vw] md:text-[2.5vw] text-lightTextColor font-bold">
      Explore Our Herbal Categories
    </h1>
    <p
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="200"
      className="text-center w-full xs:w-[80vw] sm:w-[60vw] md:w-[50vw] mt-[2vw] text-[3vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.2vw] text-lightTextColor">
      Discover a wide variety of herbal products tailored to support your health and wellness needs. Browse through our categories to find the perfect remedies for your lifestyle.
    </p>
  </div>

  {/* Body */}
  <div className="grid grid-cols-1 w-[80vw] mx-auto sm:grid-cols-2 md:grid-cols-3 mt-[5vw] xs:gap-[4vw] md:gap-[2vw]">
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="100"
      className="border-lightGreen border-2 rounded-xl h-[60vw] xs:h-[50vw] sm:h-[45vw] md:h-[34.2vw]">
      <div>
        <img
          src={HerbalTea}
          alt="Herbal-tea image"
          className="w-full h-[30vw] xs:h-[30vw] sm:h-[22vw] md:h-[20vw] rounded-t-xl" />
      </div>
      <div className="py-[5vw] xs:py-[4vw] sm:py-[3vw] md:py-[2vw] px-[4vw] xs:px-[3vw] sm:px-[2vw] md:px-[2vw]">
        <h2 className="font-Lora font-bold text-[3vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] text-lightTextColor">Herbal Teas</h2>
        <p className="mt-[1vw] xs:mt-[0.8vw] sm:mt-[0.6vw] md:mt-[0.5vw] text-[2.5vw] xs:text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-lightTextColor">Strengthen your bodys defences with our range of herbal teas.</p>
      </div>
    </div>

    <div className="flex xs:flex-row xs:gap-[2vw] md:flex-col justify-between h-[60vw] xs:h-[50vw] sm:h-[45vw] md:h-[34.2vw] md:0">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
        className="border-lightGreen border-2 rounded-xl h-[28vw] xs:h-[50vw] sm:h-[20vw] md:h-[16.5vw]">
        <div>
          <img
            src={HerbSeeds}
            alt="Herbal-Seed image"
            className="w-full h-[14vw] xs:h-[25vw] sm:h-[9vw] md:h-[7.5vw] rounded-t-xl" />
        </div>
        <div className="py-[3vw] xs:py-[2.5vw] sm:py-[2vw] md:py-3 px-[4vw] xs:px-[3vw] sm:px-[2vw]">
          <h2 className="font-Lora font-bold text-[3vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] text-lightTextColor">Herb Seeds and Plants</h2>
          <p className="mt-[1vw] xs:mt-[0.8vw] sm:mt-[0.6vw] md:mt-[0.5vw] text-[2.5vw] xs:text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-lightTextColor">Find peace and calm with our stress-relief herbs.</p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
        className="border-lightGreen border-2 rounded-xl h-[28vw] xs:h-[50vw] sm:h-[20vw] md:h-[16.5vw]">
        <div>
          <img
            src={HerbalRemedies}
            alt="Herbal-Remedies image"
            className="w-full h-[14vw] xs:h-[25vw] sm:h-[9vw] md:h-[7.5vw] rounded-t-xl" />
        </div>
        <div className="py-[3vw] xs:py-[2.5vw] sm:py-[2vw] md:py-3 px-[4vw] xs:px-[3vw] sm:px-[2vw]">
          <h2 className="font-Lora font-bold text-[3vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] text-lightTextColor">Herbal Remedies</h2>
          <p className="mt-[1vw] xs:mt-[0.8vw] sm:mt-[0.6vw] md:mt-[0.5vw] text-[2.5vw] xs:text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-lightTextColor">Support your digestive system with our natural remedies.</p>
        </div>
      </div>
    </div>

    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="400"
      className="border-lightGreen border-2 rounded-xl h-[60vw] xs:h-[50vw] sm:h-[45vw] md:h-[34.2vw]">
      <div>
        <img
          src={HerbalBath}
          alt="Herbal-Bath-Products image"
          className="w-full h-[30vw] xs:h-[25vw] sm:h-[22vw] md:h-[20vw] rounded-t-xl" />
      </div>
      <div className="py-[5vw] xs:py-[4vw] sm:py-[3vw] md:py-[2vw] px-[4vw] xs:px-[3vw] sm:px-[2vw] md:px-[2vw]">
        <h2 className="font-Lora font-bold text-[3vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] text-lightTextColor">Herbal Bath Products</h2>
        <p className="mt-[1vw] xs:mt-[0.8vw] sm:mt-[0.6vw] md:mt-[0.5vw] text-[2.5vw] xs:text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-lightTextColor">Enhance your natural beauty with our herbal skin care products.</p>
      </div>
    </div>
  </div>
</div>

    )
}

export default Category