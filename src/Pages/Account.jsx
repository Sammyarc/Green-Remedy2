import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Newsletter from '../components/Newsletter/Newsletter';
import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";

const Account = () => {
    const navigate = useNavigate();
    const { isSignedIn } = useAuth();
    const { user } = useUser();
    const [formData, setFormData] = useState({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.emailAddresses[0]?.emailAddress || '',
        phone: user?.primaryPhoneNumber?.phoneNumber || '',
        address: '',
        state: '',
        zipCode: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);

    React.useEffect(() => {
        if (!isSignedIn) {
            navigate("/signin");
        }
    }, [isSignedIn, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

            // After successful submission
            setShowSuccess(true);

            // Reset form data to default values
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                state: '',
                zipCode: ''
            });


        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div>
            <header>
                <Navbar/>
            </header>

            <main>
                <section>
                    <div className="px-[5vw] py-[5vw] border-t-2 border-gray-300">
                        <h2 className="text-[6.5vw] md:text-[2.5vw] font-bold mb-8 font-Lora text-textColor">
                            Account Settings
                        </h2>

                        <h2 className="text-[4vw] md:text-[1.2vw] font-bold mb-5 font-PublicSans text-textColor">
                            Profile Information
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Form fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[3.5vw] md:text-[1vw] text-textColor">First name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder='Enter your first name'
                                        className="mt-3 h-[10vw] text-[3.5vw] px-[3vw] md:h-[3vw] md:text-[1.1vw] outline-none md:px-[1.5vw] block w-full rounded-full border border-textColor text-textColor font-PublicSans placeholder:text-[3vw] placeholder:md:text-[1.1vw]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[3.5vw] md:text-[1vw] text-textColor">Last name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder='Enter your last name'
                                        className="mt-3 h-[10vw] text-[3.5vw] px-[3vw] md:h-[3vw] md:text-[1.1vw] outline-none md:px-[1.5vw] block w-full rounded-full border border-textColor text-textColor font-PublicSans placeholder:text-[3vw] placeholder:md:text-[1.1vw]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[3.5vw] md:text-[1vw] text-textColor">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Enter your email address'
                                        className="mt-3 h-[10vw] text-[3.5vw] px-[3vw] md:h-[3vw] md:text-[1.1vw] outline-none md:px-[1.5vw] block w-full rounded-full border border-textColor text-textColor font-PublicSans placeholder:text-[3vw] placeholder:md:text-[1.1vw]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[3.5vw] md:text-[1vw] text-textColor">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder='+234'
                                        className="mt-3 h-[10vw] text-[3.5vw] px-[3vw] md:h-[3vw] md:text-[1.1vw] outline-none md:px-[1.5vw] block w-full rounded-full border border-textColor text-textColor font-PublicSans placeholder:text-[3vw] placeholder:md:text-[1.1vw]"
                                    />
                                </div>
                            </div>

                            <h2 className="text-[4vw] md:text-[1.2vw] font-bold mb-5 font-PublicSans text-textColor">
                                Change Password
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[3.5vw] md:text-[1vw] text-textColor">New Password</label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        placeholder='xxxxxxxxx'
                                        className="mt-3 h-[10vw] text-[3.5vw] px-[3vw] md:h-[3vw] md:text-[1.1vw] outline-none md:px-[1.5vw] block w-full rounded-full border border-textColor text-textColor font-PublicSans placeholder:text-[3vw] placeholder:md:text-[1.1vw]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[3.5vw] md:text-[1vw] text-textColor">Confirm New Password</label>
                                    <input
                                        type="password"
                                        name="confirmNewPassword"
                                        placeholder='xxxxxxxxx'
                                        className="mt-3 h-[10vw] text-[3.5vw] px-[3vw] md:h-[3vw] md:text-[1.1vw] outline-none md:px-[1.5vw] block w-full rounded-full border border-textColor text-textColor font-PublicSans placeholder:text-[3vw] placeholder:md:text-[1.1vw]"
                                    />
                                </div>
                            </div>

                            <h2 className="text-[6.5vw] md:text-[1.2vw] font-bold mb-5 font-PublicSans text-textColor">
                                Address
                            </h2>

                            <div>
                                <label className="block text-[3.5vw] md:text-[1vw] text-textColor">Shipping Address</label>
                                <input
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder='Enter your shipping address'
                                    className="mt-3 h-[10vw] text-[3.5vw] px-[3vw] rounded-full md:h-[5vw] md:text-[1.2vw] outline-none md:px-[1.5vw] block w-full md:rounded-[1vw] border border-textColor text-textColor font-PublicSans placeholder:text-[3vw] placeholder:md:text-[1.1vw]"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[3.5vw] md:text-[1vw] text-textColor">State</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        placeholder='Enter your state'
                                        className="mt-3 h-[10vw] text-[3.5vw] px-[3vw] md:h-[3vw] md:text-[1.1vw] outline-none md:px-[1.5vw] block w-full rounded-full border border-textColor text-textColor font-PublicSans placeholder:text-[3vw] placeholder:md:text-[1.1vw]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[3.5vw] md:text-[1vw] text-textColor">Zip Code</label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        placeholder='xxxxx'
                                        className="mt-3 h-[10vw] text-[3.5vw] px-[3vw] md:h-[3vw] md:text-[1.1vw] outline-none md:px-[1.5vw] block w-full rounded-full border border-textColor text-textColor font-PublicSans placeholder:text-[3vw] placeholder:md:text-[1.1vw]"
                                    />
                                </div>
                            </div>

                            <div className="flex">
                                <button
                                    type="submit"
                                    className="mt-6 w-full md:w-auto inline-flex justify-center rounded-full border border-transparent bg-primary px-6 py-3 text-[3.5vw] md:text-[1vw] font-medium text-white bg-darkGreen hover:bg-green-700">
                                    Save Changes
                                </button>
                            </div>
                        </form>

                        {showSuccess && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-4 flex flex-col items-center justify-center">
                                    <h3 className="text-[6.5vw] md:text-[2vw] text-center font-bold text-textColor font-Lora">Success!</h3>
                                    <p className="mt-2 text-textColor text-center font-OpenSans">Your details have been updated successfully.</p>
                                    <button
                                        onClick={() => setShowSuccess(false)}
                                        className="mt-4 inline-flex items-center justify-center rounded-full bg-darkGreen mx-auto w-[50vw] h-[10vw] md:w-[10vw] md:h-[3vw] text-white hover:bg-green-700">
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </section>

                <section>
                    <Newsletter/>
                </section>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Account;
