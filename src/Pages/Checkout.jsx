// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useCart} from '../context/CartContext.jsx';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Productsfeature from '../components/Feature/Productsfeature';
import Newsletter from '../components/Newsletter/Newsletter';
import {Link} from 'react-router-dom';

const CheckoutForm = () => {
    const {register, handleSubmit, formState: {
            errors
        }} = useForm();

    const {cart} = useCart();

    const onSubmit = (data) => {
       console.log(data);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>

            <header>
                <Navbar/>
            </header>
            <main>
                <section
                    className="flex flex-col-reverse md:flex-row md:justify-between gap-[3vw] border-t-2 border-gray-300 px-4 py-4 md:px-[5vw] md:py-[5vw]">
                    {/* Form Section */}
                    <div
                        className="md:w-2/3 border-[0.1vw] rounded-[1vw] shadow-lg bg-productBg mt-[6vw] md:mt-[0]">
                        <aside
                            className='font-Lora text-[5vw] md:text-[1.5vw] bg-lightTextColor rounded-t-[2vw] md:rounded-t-[1vw] p-4 text-white'>
                            <table className='w-full'>
                                <thead className='flex justify-between items-center'>
                                    <tr className='w-full flex justify-between items-center px-5'>
                                        <th className='text-[3.5vw] md:text-[1.4vw] font-Lora text-white font-normal'>
                                            Personal
                                        </th>
                                        <th className='text-[3.5vw] md:text-[1.4vw] font-Lora text-white font-normal'>
                                            Billing
                                        </th>
                                        <th className='text-[3.5vw] md:text-[1.4vw] font-Lora text-white font-normal'>
                                            Confirmation
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </aside>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-8">
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label
                                        className="block text-lightTextColor font-OpenSans text-[3.5vw] md:text-[1.1vw]">Name On Card*</label>
                                    <input
                                        type="text"
                                        {...register('nameOnCard', { required: true })}
                                        className="w-full p-2 mt-1 border border-textColor outline-none rounded-md"/> {errors.nameOnCard && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div>
                                    <label
                                        className="block text-lightTextColor font-OpenSans text-[3.5vw] md:text-[1.1vw]">Card Number*</label>
                                    <input
                                        type="text"
                                        {...register('cardNumber', { required: true })}
                                        className="w-full p-2 mt-1 border border-textColor rounded-md outline-none"/> {errors.cardNumber && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            className="block text-lightTextColor font-OpenSans text-[3.5vw] md:text-[1.1vw]">Valid Through*</label>
                                        <input
                                            type="text"
                                            {...register('validThrough', { required: true })}
                                            className="w-full p-2 mt-1 border border-textColor outline-none rounded-md"/> {errors.validThrough && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    <div>
                                        <label
                                            className="block text-lightTextColor font-OpenSans text-[3.5vw] md:text-[1.1vw]">CVV*</label>
                                        <input
                                            type="text"
                                            {...register('cvv', { required: true })}
                                            className="w-full p-2 mt-1 border border-textColor outline-none rounded-md"/> {errors.cvv && <span className="text-red-500">This field is required</span>}
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        {...register('saveAsDefault')}
                                        className="mr-2 cursor-pointer w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] accent-darkGreen"/>
                                    <label
                                        className="block text-lightTextColor font-OpenSans text-[3.5vw] md:text-[1.1vw]">Save As Default Payment Method</label>
                                </div>
                                <Link to='/userinfo'
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="mt-4 md:w-[20vw] bg-darkGreen text-white font-OpenSans text-[3.5vw] md:text-[1.1vw] p-3 flex justify-center items-center rounded-full hover:bg-green-700">
                                    Proceed to Next Step
                                </Link>
                            </div>
                        </form>
                    </div>

                    {/* Cart Details Section */}
                    <div
                        className="md:w-1/3 h-full bg-productBg shadow-lg rounded-[1vw] mt-[6vw] md:mt-[0]">
                        <h3
                            className="font-Lora text-[5vw] md:text-[1.5vw] mb-4 bg-lightTextColor rounded-t-[2vw] md:rounded-t-[1vw] p-4 text-white">Cart Details</h3>
                        <table className="w-full text-left mb-4 p-4">
                            <thead>
                                <tr className="text-textColor border-b-[0.15vw] border-darkGreen border-dashed">
                                    <th className="p-4 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor">PRODUCT</th>
                                    <th
                                        className="p-4 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor text-center">QUANTITY</th>
                                    <th
                                        className="p-4 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor text-end">SUBTOTAL</th>
                                </tr>
                            </thead>
                            <tbody className="border-b-[0.15vw] border-darkGreen border-dashed p-6">
                                {
                                    cart.map((item, index) => (
                                        <tr key={index}>
                                            <td
                                                className="px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor">{item.name}</td>
                                            <td
                                                className="px-4 py-3 text-center text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor">{item.quantity}</td>
                                            <td
                                                className="px-4 py-3 text-end text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor">{`₦${ (item.price * item.quantity).toLocaleString()}`}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div
                            className="flex justify-between border-b-[0.15vw] border-darkGreen border-dashed mb-4">
                            <span
                                className='px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>SUBTOTAL</span>
                            <span
                                className='px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>{`₦${calculateTotal().toLocaleString()}`}</span>
                        </div>
                        <div
                            className="flex justify-between border-b-[0.12vw] border-darkGreen border-dashed mb-4">
                            <span
                                className='px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>SHIPPING</span>
                            <span
                                className='px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>₦0.00</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span
                                className="font-bold px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor">Total</span>
                            <span
                                className="font-bold px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor">{`₦${calculateTotal().toLocaleString()}`}</span>
                        </div>
                    </div>
                </section>

                {/* Product feature */}

                <section>
                    <Productsfeature/>
                </section>

                {/* Newsletter */}

                <section>
                    <Newsletter/>
                </section>
            </main>

            <footer>
                <Footer/>
            </footer>

        </div>

    );
};

export default CheckoutForm;
