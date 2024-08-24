// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const Cartadd = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white w-[90vw] md:w-[40vw] p-[8vw] md:p-[4vw] rounded-lg shadow-lg text-center">
            <FaCheckCircle className="text-textColor w-[15vw] md:w-[5vw] h-[15vw] md:h-[5vw] mx-auto" />
            <h2 className="text-[5vw] font-Lora md:text-[2vw] font-extrabold text-textColor mt-[4vw] md:mt-[1.5vw]">
                Added to Cart
            </h2>
            <p className="text-[4vw] md:text-[1.2vw] text-textColor mt-[2vw] md:mt-[1vw] font-OpenSans">
              The product has been added to your cart.
            </p>
            <button
                onClick={onClose}
                className="mt-6 w-full md:w-[20vw] bg-darkGreen text-white font-OpenSans text-[4vw] md:text-[1.1vw] p-3 rounded-full hover:bg-green-700"
            >
                Continue Shopping
            </button>
        </div>
    </div>
    );
  };
  

export default Cartadd