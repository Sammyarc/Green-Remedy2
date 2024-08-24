// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useCart} from '../context/CartContext';
import {FaRegClock, FaArrowRight} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import {Link} from 'react-router-dom';

const OrderHistory = () => {
    const {orders} = useCart();

    return (
        <div>
            <header>
                <Navbar/>
            </header>

            <main>
                <section
                    className='px-4 py-4 md:px-[5vw] md:py-[5vw] border-t-2 border-gray-300'>
                    <h1 className="font-Lora text-[6vw] md:text-[2vw] font-bold text-textColor">Order History</h1>

                    {/* Desktop Layout */}
                    <div className="hidden md:w-full md:block">
                        {
                            orders.length === 0
                                ? (
                                    <p
                                        className='flex justify-center items-center text-[5vw] md:text-[1.5vw] my-[3vw] text-textColor font-PublicSans'>
                                        No orders have been placed yet.
                                    </p>
                                )
                                : (
                                    <table className="min-w-full bg-white mt-[3vw] rounded-[1vw] shadow-lg">
                                        <thead className='rounded-t-[2vw] md:rounded-t-[1vw]'>
                                            <tr className="bg-lightTextColor text-white">
                                                <th className="p-4 font-normal text-left font-Lora text-[5vw] md:text-[1.2vw]">Order no</th>
                                                <th className="p-4 font-normal text-left font-Lora text-[5vw] md:text-[1.2vw]">Items</th>
                                                <th className="p-4 font-normal text-left font-Lora text-[5vw] md:text-[1.2vw]">Status</th>
                                                <th className="p-4 font-normal text-left font-Lora text-[5vw] md:text-[1.2vw]">Tracking ID</th>
                                                <th className="p-4 font-normal text-left font-Lora text-[5vw] md:text-[1.2vw]">Delivery Date</th>
                                                <th className="p-4 font-normal text-left font-Lora text-[5vw] md:text-[1.2vw]">Price</th>
                                                <th className="p-4 font-normal text-left font-Lora text-[5vw] md:text-[1.2vw]">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                orders.map((order) => (order.cartItems.map((item, itemIndex) => (
                                                    <tr key={itemIndex} className='border-b border-gray-300'>
                                                        <td className="py-[2vw] text-center font-PublicSans text-textColor">
                                                            {item.OrderID}
                                                        </td>
                                                        <td className="p-4 flex items-center space-x-2">
                                                            <img
                                                                src={item.image}
                                                                alt={item.name}
                                                                className="w-[5vw] h-[5vw] rounded-lg object-cover"/>
                                                            <span className='text-[7vw] md:text-[1vw] text-textColor font-PublicSans'>{item.name}</span>
                                                        </td>
                                                        <td className="py-[2vw] pr-[2vw] text-center">
                                                            <div
                                                                className='flex justify-center items-center space-x-2 py-2 bg-slate-200 rounded-md'>
                                                                <FaRegClock className='text-[7vw] md:text-[1.3vw] text-darkGreen'/>
                                                                <span className="text-darkGreen text-[7vw] md:text-[1vw] font-PublicSans">
                                                                    In progress
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="py-[2vw] text-center">
                                                            <Link
                                                                to='/'
                                                                onClick={() => window.scrollTo(0, 0)}
                                                                className="flex items-center justify-center space-x-1 transition-colors delay-75 text-darkGreen hover:text-gray-950">
                                                                <span className='text-[7vw] md:text-[1vw] font-PublicSans underline'>{item.trackingID}</span>
                                                                <FiExternalLink className='text-[7vw] md:text-[1.3vw]'/>
                                                            </Link>
                                                        </td>
                                                        <td className="p-[2vw] text-center">
                                                            <span className='text-darkGreen text-[7vw] md:text-[1vw] font-PublicSans'>{order.deliveryDate}</span>
                                                            <p className='text-darkGreen text-[7vw] md:text-[1vw] font-PublicSans'>(Expected)</p>
                                                        </td>
                                                        <td className="py-[2vw] text-center">
                                                            <span className='text-darkGreen text-[7vw] md:text-[1vw] font-PublicSans'>₦{(item.price * item.quantity).toLocaleString()}</span>
                                                        </td>
                                                        <td className="py-[2vw] text-center">
                                                            <Link
                                                                to={`/product/${item.id}`}
                                                                onClick={() => window.scrollTo(0, 0)}
                                                                className="flex items-center justify-center space-x-1">
                                                                <span className='text-darkGreen text-[7vw] md:text-[1vw] font-PublicSans'>Re-Order</span>
                                                                <FaArrowRight className='text-[7vw] md:text-[1vw] text-darkGreen'/>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))))
                                            }
                                        </tbody>
                                    </table>
                                )
                        }
                    </div>

                    {/* Mobile Layout */}
                    <div className="w-full md:hidden mt-[5vw]">
                        {
                            orders.length === 0
                                ? (
                                    <p
                                        className='flex justify-center items-center text-[5vw] md:text-[1.5vw] my-[10vw] text-textColor font-PublicSans'>
                                        No orders have been placed yet.
                                    </p>
                                )
                                : orders.map((order, orderIndex) => (
                                    <div key={orderIndex} className="border-b bg-white shadow-lg rounded-lg border-gray-300 mb-4 px-4 py-2">
                                        <div className="flex flex-col space-y-2">
                                            {
                                                order
                                                    .cartItems
                                                    .map((item, itemIndex) => (
                                                        <div
                                                            key={itemIndex}
                                                            className="flex flex-col space-y-2 border-b border-gray-200 py-[3.5vw]">
                                                            <h2 className='text-[4vw] font-Lora font-bold text-textColor'>Order {item.OrderID}</h2>
                                                            <div className="flex flex-row items-start space-x-4">
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.name}
                                                                    className="w-[20vw] h-[20vw] bg-gray-200 rounded-md object-cover"/>
                                                                <div className="flex flex-col flex-1">
                                                                    <p className='text-[4vw] font-OpenSans font-bold text-textColor'>{item.name}</p>
                                                                    <p className='text-[4vw] font-OpenSans font-semibold text-textColor'>₦{(item.price * item.quantity).toLocaleString()}</p>
                                                                    <p className='text-[3.5vw] font-OpenSans text-textColor'>{order.deliveryDate} (Expected)</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between items-center space-x-2">
                                                                <div className='flex items-center space-x-2 bg-slate-200 p-2 rounded-md'>
                                                                    <FaRegClock className='text-[4.5vw] text-darkGreen'/>
                                                                    <span className="text-darkGreen text-[3vw] font-PublicSans">In progress</span>
                                                                </div>
                                                                
                                                                <Link
                                                                    to='/'
                                                                    onClick={() => window.scrollTo(0, 0)}
                                                                    className="flex items-center space-x-1 text-darkGreen hover:text-gray-950">
                                                                    <span className='text-[3.5vw] font-PublicSans underline'>{item.trackingID}</span>
                                                                    <FiExternalLink className='text-[4vw]'/>
                                                                </Link>

                                                                <Link
                                                                    to={`/product/${item.id}`}
                                                                    onClick={() => window.scrollTo(0, 0)}
                                                                    className="flex items-center space-x-1 text-darkGreen">
                                                                    <span className='text-[3.5vw] font-PublicSans'>Re-Order</span>
                                                                    <FaArrowRight className='text-[4vw]'/>
                                                                </Link>

                                                            </div>
                                                        </div>
                                                    ))
                                            }
                                        </div>
                                    </div>
                                ))
                        }

                    </div>

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

export default OrderHistory;
