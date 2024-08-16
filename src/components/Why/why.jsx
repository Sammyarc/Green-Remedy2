// eslint-disable-next-line no-unused-vars
import React from "react";
import Sentiment from "../../assets/Icons/sentiment_satisfied.svg";
import Plant from "../../assets/Icons/Group 4.svg";
import Library from "../../assets/Icons/local_library.svg";

// eslint-disable-next-line react-refresh/only-export-components
const Grid = [
  {
    id: 1,
    image: Sentiment,
    heading: "Customer Satisfaction",
    paragraph:
      "Your satisfaction is our priority. We offer a hassle-free return policy and ex" +
      "cellent customer support to ensure you have the best experience.",
  },
  {
    id: 2,
    image: Plant,
    heading: "Traditional Herbs",
    paragraph:
      "We source our herbs directly from trusted growers who follow traditional metho" +
      "ds, ensuring you receive authentic and high-quality products.",
  },
  {
    id: 3,
    image: Library,
    heading: "Educational Resources",
    paragraph:
      "Access detailed information and guidance on the benefits and uses of each herb" +
      ", helping you make informed decisions about your health.",
  },
];

const why = () => {
  return (
    <div className="px-[5vw] my-[2vw]">
      {/* Header section */}
      <div className="flex flex-col justify-center items-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          className="font-Lora md:text-[2.5vw] text-lightTextColor font-bold"
        >
          Why Choose Green Remedies
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
          className="md:text-center md:w-[50vw] md:mt-[0.5vw] text-[1.2vw] text-lightTextColor"
        >
          Our safe and effective herbal remedies are distinguished by sensory
          evaluation techniques and the Organoleptic Method for quality and
          potency.
        </p>
      </div>

      {/* Body */}

      <div className="mt-[5vw]">
        <div
          className="md:grid md:grid-cols-3 gap-[1vw]"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          {Grid.map((data) => (
            <div
              key={data.id}
              className="bg-darkGreen py-[4vw] px-[1.5vw] rounded-[1.2vw]"
            >
              <div className="w-[5vw] h-[5vw] bg-white rounded-full flex flex-col justify-center items-center">
                <img src={data.image} className="w-[2.5vw] h-[2.5vw]"></img>
              </div>
              <h1 className="mt-[1.3vw] text-white font-Lora font-semibold text-[1.5vw]">
                {data.heading}
              </h1>
              <p className="mt-[1.3vw] text-white font-OpenSans text-[1vw]">
                {data.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default why;
