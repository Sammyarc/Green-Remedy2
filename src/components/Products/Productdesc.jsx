// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {FaStar} from 'react-icons/fa';
import {HiOutlineHeart} from 'react-icons/hi';
import {FaMinus, FaPlus} from 'react-icons/fa';
import Truck from '../../assets/Icons/group.svg';
import Rotate from '../../assets/Icons/3d-rotate.svg';
import productsData from '../../assets/products.json';

const Productdesc = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (
            prevQuantity > 1
                ? prevQuantity - 1
                : 1
        ));
    };

    useEffect(() => {
        const foundProduct = productsData
            .products
            .find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedImage(foundProduct.additionalImages[0]); // Set the first additional image as default
        }
    }, [id]);

    if (!product) 
        return <div>Loading...</div>;
    
    return (
        <div className='border-t-2 border-gray-300'>

            {/* top description */}

            <div
                className='flex flex-col md:flex-row gap-[2vw] items-center px-4 py-4 md:px-[5vw] md:py-[5vw]'>
                {/* Product Images */}
                <div className='flex flex-col-reverse md:flex-row w-full md:w-[50vw]'>
                    {/* Thumbnails */}
                    <div className='flex flex-row mt-[4vw] space-x-[2vw] md:flex-col md:w-[15vw] md:space-y-[0.3vw] md:space-x-[0] md:mt-[0]'>
                        {
                            product
                                .additionalImages
                                .map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className='w-full h-[25vw] md:h-auto cursor-pointer rounded-lg'
                                        onClick={() => setSelectedImage(image)}/>
                                ))
                        }
                    </div>

                    {/* Selected Image */}
                    <div className='w-full h-[65vw] md:w-[80vw] md:h-[35vw] md:ml-4'>
                        <img
                            src={selectedImage}
                            alt={product.name}
                            className='w-full h-full object-cover rounded-lg'/>
                    </div>
                </div>

                {/* Product description */}

                <div className='w-full mt-[5vw] md:mt-[0] md:w-[50vw]'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-Lora font-bold text-textColor text-[6vw] md:text-[2vw]'>{product.name}</h1>
                        <HiOutlineHeart className='text-[7vw] md:text-[1.5vw]'/>
                    </div>
                    <div
                        className='flex items-center pb-[3vw] mt-[0.5vw] md:mt-[0.3vw] md:pb-[1.5vw] border-b-2 border-gray-300'>
                        <span
                            className='text-[4.5vw] md:text-[1.5vw] text-textColor pr-[1vw] border-r-2 border-gray-400 font-semibold'>
                            {
                                new Intl
                                    .NumberFormat('en-NG', {
                                        style: 'currency',
                                        currency: 'NGN',
                                        maximumFractionDigits: 0
                                    })
                                    .format(product.price)
                            }
                        </span>
                        <span className='ml-[1vw] space-x-[1vw] md:ml-[0.5vw] md:space-x-[0.2vw] text-yellow-500 flex items-center'>
                            {
                                [...Array(5)].map((_, index) => {
                                    const isFilled = index < product.rating - 1; // Last star will not be filled
                                    return (
                                        <FaStar
                                            key={index}
                                            className={`h-[3.5vw] w-[3.5vw] md:h-[1.2vw] md:w-[1.2vw] ${isFilled
                                                ? 'text-yellow-500'
                                                : 'text-gray-300'}`}/>
                                    );
                                })
                            }

                            <span className='ml-[1vw] text-[3vw] md:ml-[0.5vw] md:text-[1vw] text-textColor font-OpenSans'>(32 reviews)</span>
                        </span>

                    </div>

                    <p className='mt-[1.5vw] text-[4vw] md:text-[1vw] font-PublicSans text-textColor'>{product.intro}</p>

                    <ul className='list-disc my-[1.5vw] pl-[6vw] md:pl-[2vw] space-y-2'>
                        {
                            product
                                .additionalintro
                                .map((intro, index) => (
                                    <li key={index} className='text-textColor font-PublicSans text-[4vw] md:text-[1vw]'>{intro}</li>
                                ))
                        }
                    </ul>

                    <div className="mt-[5vw] md:mt-[0] flex items-center space-x-2 w-full">
                        {/* Quantity Selector */}
                        <div
                            className="flex items-center justify-between bg-white border border-gray-300 rounded-full w-[40%] md:w-[30%]">
                                <FaMinus  onClick={handleDecrement}
                                className="px-[1.5vw] py-[1.5vw] md:px-[1vw] md:py-[0.1vw] text-[7vw] md:text-[3vw] font-OpenSans font-bold text-textColor cursor-pointer" />
                            <span
                                className="px-[1.5vw] py-[1.5vw] md:px-[1vw] md:py-[0.1vw] text-[5vw] md:text-[1.2vw] font-medium font-OpenSans text-textColor">{quantity}</span>
                             <FaPlus  onClick={handleIncrement}
                                className="px-[1.5vw] py-[1.5vw] md:px-[1vw] md:py-[0.1vw] text-[7vw] md:text-[3vw] font-OpenSans font-bold text-textColor cursor-pointer" />
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            className="px-[1.5vw] py-[1.5vw] md:px-[1vw] md:py-[0.7vw] text-white text-[4vw] md:text-[1vw] bg-darkGreen font-OpenSans font-bold rounded-full hover:bg-green-600 w-[60%] md:w-[70%]">
                            Add to Cart
                        </button>
                    </div>

                    <div className='flex items-center space-x-[1.5vw] md:space-x-[0.5vw] mt-[5vw] md:mt-[1.5vw]'>
                        <img src={Truck} className=''/>
                        <span className='text-[3.2vw] md:text-[1vw] font-medium font-OpenSans text-textColor'>Free worldwide shipping on all orders over N10,000</span>
                    </div>

                    <div className='flex items-center space-x-[1.5vw] md:space-x-[0.5vw] mt-[3vw] md:mt-[1vw]'>
                        <img src={Rotate} className=''/>
                        <span className='text-[3.2vw] md:text-[1vw] font-medium font-OpenSans text-textColor'>Delivers in: 3-7 Working Days Shipping & Return</span>
                    </div>

                </div>

            </div>

            {/* main description */}

            <div className='bg-darkGreen p-[5vw]'>
                <div className='flex items-center'>
                    <h2
                        className='pr-[2vw] md:pr-[1vw] border-r-2 border-gray-100 text-[7vw] md:text-[2vw] font-Lora font-medium text-white'>Description</h2>
                    <span className='pl-[2vw] md:pl-[1vw] text-[6vw] md:text-[1.5vw] font-Lora text-white'>Reviews</span>
                </div>

                <h3 className="text-[4vw] md:text-[1vw] font-semibold font-OpenSans mt-[2.5vw] md:mt-[1.2vw] text-white">{product.title}</h3>
                <p className="mt-[1.5vw] md:mt-[0.5vw] text-[3vw] md:text-[1vw] font-OpenSans text-productBg">{product.description}</p>

                <h3 className="text-[4vw] md:text-[1vw] font-semibold font-OpenSans mt-[2.5vw] md:mt-[1.2vw] text-white">Product Highlights:</h3>
                <ul className="list-disc list-inside mb-[1.5vw] ml-[1vw]">
                    {
                        product
                            .highlights
                            .map((highlight, index) => (
                                <li key={index} className="mt-[1.5vw] md:mt-[0.5vw] text-[3vw] md:text-[1vw] font-OpenSans text-productBg">{highlight}</li>
                            ))
                    }
                </ul>

                <h3 className="text-[4vw] md:text-[1vw] font-semibold font-OpenSans mt-[2.5vw] md:mt-[1.2vw] text-white">How to Use:</h3>
                <ul className="list-disc list-inside mb-[1.5vw] ml-[1vw]">
                    {
                        product
                            .usage
                            .map((use, index) => (
                                <li key={index} className="mt-[1.5vw] md:mt-[0.5vw] text-[3vw] md:text-[1vw] font-OpenSans text-productBg">{use}</li>
                            ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Productdesc