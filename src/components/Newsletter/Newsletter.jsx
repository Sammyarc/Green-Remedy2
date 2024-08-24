// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import useFormHook from "../../hooks/useFormHook";
const initialState = {
  newsletterEmail: "",
};

// eslint-disable-next-line react/prop-types
const Newsletter = ({ onSubmit }) => {
    const [formData, handleChange, resetForm] = useFormHook(initialState);
    // "_" skips the third return value
    const handleSubmit = (e) => {
      e.preventDefault();
      if (onSubmit) {
        onSubmit(formData.newsletterEmail);
      }
      resetForm(); // Reset the form after submission
    };

    return (

        <div className="w-full md:h-[380px] flex flex-col md:flex-row overflow-hidden bg-darkGreen md:py-1 my-[10vw]">
          {/* Description */}
          <div className="flex-1 md:flex-[2] text-white p-[7vw] md:p-[5vw] mb-6 md:mb-0 flex flex-col justify-center text-left items-center">
            <h2 className="md:text-[2.8vw] text-[6.5vw] font-Lora font-bold mb-2">
              Subscribe to our newsletter
            </h2>
            <p className="font-OpenSans text-[3.5vw] md:text-[1.2vw]">
              Discover the latest health and wellness tips, exclusive discounts, and
              updates on our products and services by subscribing to our newsletter.
            </p>
          </div>
          {/* Form Section */}
          <div className="flex-1 md:flex-[3] text-darkGreen bg-white flex flex-col justify-center items-center">
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
                  className="w-full md:h-[59px] md:w-[300px] py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-darkGreen hover:bg-darkerGreen focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };

export default Newsletter