// eslint-disable-next-line no-unused-vars
import React from "react";
import Quotes from "../../assets/Icons/quotes.svg";
import Starfilled from "../../assets/Icons/star-filled.svg";
import Starempty from "../../assets/Icons/star-empty.svg";
import Review1 from "../../assets/jake-nackos-IF9TK5Uy-KI-unsplash (2).jpg";
import Review2 from "../../assets/michael-dam-mEZ3PoFGs_k-unsplash (2).jpg";
import Review3 from "../../assets/oluwaferanmi-caleb-Q1QRTSeZIxI-unsplash (2).jpg";
import Review4 from "../../assets/pexels-photo-1222271.jpeg";
import Review5 from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash (2).jpg";
import Review6 from "../../assets/cody-scott-milewski-vXgV5XUlTog-unsplash (2).jpg";

const reviewItems = [
  {
    id: 1,
    image: Quotes,
    paragraph:
      "OHHHH Thank God !!!! Finally there is someone making it for me to use on my p" +
      "rojects. Love ya",
    starfilled: Starfilled,
    starempty: Starempty,
    review: Review1,
    name: "John Williams",
    title: "CEO medHub",
  },
  {
    id: 2,
    image: Quotes,
    paragraph:
      "OHHHH Thank God !!!! Finally there is someone making it for me to use on my p" +
      "rojects. Love ya",
    starfilled: Starfilled,
    starempty: Starempty,
    review: Review2,
    name: "John Williams",
    title: "CEO medHub",
  },
  {
    id: 3,
    image: Quotes,
    paragraph:
      "OHHHH Thank God !!!! Finally there is someone making it for me to use on my p" +
      "rojects. Love ya",
    starfilled: Starfilled,
    starempty: Starempty,
    review: Review3,
    name: "John Williams",
    title: "CEO medHub",
  },
  {
    id: 4,
    image: Quotes,
    paragraph:
      "OHHHH Thank God !!!! Finally there is someone making it for me to use on my p" +
      "rojects. Love ya",
    starfilled: Starfilled,
    starempty: Starempty,
    review: Review4,
    name: "John Williams",
    title: "CEO medHub",
  },
  {
    id: 5,
    image: Quotes,
    paragraph:
      "OHHHH Thank God !!!! Finally there is someone making it for me to use on my p" +
      "rojects. Love ya",
    starfilled: Starfilled,
    starempty: Starempty,
    review: Review5,
    name: "John Williams",
    title: "CEO medHub",
  },
  {
    id: 6,
    image: Quotes,
    paragraph:
      "OHHHH Thank God !!!! Finally there is someone making it for me to use on my p" +
      "rojects. Love ya",
    starfilled: Starfilled,
    starempty: Starempty,
    review: Review6,
    name: "John Williams",
    title: "CEO medHub",
  },
];

const Reviews = () => {
  return (
    <div className="px-[5vw] pt-[8vw] pb-[5vw] bg-darkGreen">
      {/* Header section */}
      <div className="flex flex-col justify-center items-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          className="font-Lora md:text-[2.5vw] text-white font-bold"
        >
          What Our Customers Say
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
          className="md:text-center md:w-[40vw] md:mt-[0.5vw] text-[1.2vw] text-white"
        >
          Read the experiences and success stories of those who have benefited
          from our traditional herbs.
        </p>
      </div>

      {/* Body section */}

      <div className="mt-[4vw]">
        <div
          className="md:grid md:grid-cols-3 gap-[2vw]"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          {reviewItems.map((data) => (
            <div
              key={data.id}
              className="bg-white py-[1.5vw] px-[1.5vw] rounded-bl-[6vw] rounded-br-xl rounded-tr-xl rounded-tl-xl"
            >
              <img src={data.image} className="w-[2vw] h-[2vw]"></img>
              <div className="px-[1.5vw] mt-[4vw]">
                <p className="font-OpenSans text-[1.2vw] font-medium w-[20vw]">
                  {data.paragraph}
                </p>
                <div className="flex items-center gap-[0.7vw] mt-[2vw]">
                  <img src={Starfilled} className="w-[1.5vw]" />
                  <img src={Starfilled} className="w-[1.5vw]" />
                  <img src={Starfilled} className="w-[1.5vw]" />
                  <img src={Starfilled} className="w-[1.5vw]" />
                  <img src={Starempty} className="w-[1.5vw]" />
                </div>
                <div className="mt-[2vw] flex items-center gap-[1.5vw]">
                  <div className="w-[5vw] h-[5vw] rounded-full border-[0.3vw] border-darkGreen">
                    <img
                      src={data.review}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-OpenSans text-[1.2vw] font-bold text-textColor">
                      {data.name}
                    </p>
                    <p className="font-OpenSans text-[0.9vw] font-bold text-textColor">
                      {data.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
