// // eslint-disable-next-line no-unused-vars
// import React from 'react'

// const Newsletter = () => {
//   return (
//     <div className='mb-[10vw] bg-darkGreen flex justify-between items-center pl-[8vw] py-[0.15vw]'>
//         <div className='w-[30vw]'>
//             <h1 className='text-white font-Lora font-bold text-[3.2vw] leading-tight'>Subscribe to our newsletter</h1>
//             <p className='text-white font-OpenSans mt-[1.3vw] text-[1.1vw] w-[25vw]'>Discover the latest health and wellness tips, exclusive discounts, and updates on our products and services by subscribing to our newsletter.</p>
//         </div>
//         <div className='bg-white h-[35vw] flex justify-center items-center w-[50vw] gap-3'>
//             <input type='text' placeholder='Enter your Email' className='w-[30vw] rounded-xl border-[0.15vw] border-darkGreen outline-none py-[0.8vw] px-[1.3vw] text-[1.2vw] placeholder:text-lightTextColor placeholder:font-OpenSans'/>
//             <button className='bg-darkGreen text-white rounded-xl border-2 border-darkGreen w-[12.5vw] text-[1.2vw] h-[3.5vw]'>Subscribe</button>
//         </div>
//     </div>
//   )
// }

// export default Newsletter

import React from "react";
import useFormHook from "../../hooks/useFormHook";

const initialState = {
  newsletterEmail: "",
};

const Newsletter = ({ onSubmit }) => {
  const [formData, handleChange, _, resetForm] = useFormHook(initialState);
  // "_" skips the third return value

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData.newsletterEmail);
    }
    resetForm(); // Reset the form after submission
  };

  return (
    <div className="w-full md:h-[380px] flex flex-col md:flex-row overflow-hidden border-darkGreen border-4 mt-5 mb-10">
      {/* Description */}
      <div className="flex-1 md:flex-[2] bg-darkGreen text-white p-6 mb-6 md:mb-0 flex flex-col justify-center text-center items-center">
        <h2 className="md:text-4xl text-xl font-Lora font-bold mb-4">
          Subscribe to our newsletter
        </h2>
        <p className="font-Lora">
          Discover the latest health and wellness tips, exclusive discounts, and
          updates on our products and services by subscribing to our newsletter.
        </p>
      </div>

      {/* Form Section */}
      <div className="flex-1 md:flex-[3] text-darkGreen flex flex-col justify-center items-center">
        <form
          className="space-y-4 w-full max-w-full p-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
            <input
              type="email"
              name="newsletterEmail"
              value={formData.newsletterEmail}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full md:h-[59px] px-3 py-2 border border-darkGreen rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
            />
            <button
              type="submit"
              className="w-full md:h-[59px] md:w-[300px] py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-darkGreen hover:bg-darkerGreen focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
