// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import productsData from '../../assets/products.json';
import {FaMinus, FaPlus} from 'react-icons/fa';
import {FaChevronDown} from 'react-icons/fa';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

const Productlisting = () => {
    // State to track which checkboxes are checked in each filter category
    const [checkedFilters, setCheckedFilters] = useState({
        categories: [],
        price: [],
        herbalIngredients: [],
        dietaryPreferences: []
    });

    // Sample options for the sake of example
    const categoryOptions = ['Sleep Aid', 'Detox', 'Digestive Health'];
    const priceOptions = ['N20,000', 'N15,000', 'N10,000'];
    const herbalOptions = ['Chamomile', 'Ginger', 'Ginseng', 'Turmeric'];
    const dietaryOptions = ['Vegetarian', 'Vegan', 'Keto'];

    // Functions to toggle open/close state for each filter section
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isHerbalIngredientsOpen, setIsHerbalIngredientsOpen] = useState(false);
    const [isDietaryPreferencesOpen, setIsDietaryPreferencesOpen] = useState(false);

    const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
    const togglePrice = () => setIsPriceOpen(!isPriceOpen);
    const toggleHerbalIngredients = () => setIsHerbalIngredientsOpen(!isHerbalIngredientsOpen);
    const toggleDietaryPreferences = () => setIsDietaryPreferencesOpen(!isDietaryPreferencesOpen);

    // Function to handle checkbox changes
    const handleCheckboxChange = (category, option) => {
        setCheckedFilters(prevState => {
            const updatedCategory = prevState[category].includes(option)
                ? prevState[category].filter(item => item !== option)
                : [...prevState[category], option];

            return {
                ...prevState,
                [category]: updatedCategory
            };
        });
    };

    // Function to clear all filters
    const clearFilters = () => {
        setCheckedFilters({
            categories: [],
            price: [],
            herbalIngredients: [],
            dietaryPreferences: []
        });
    };

    const [activeTab, setActiveTab] = useState('Shop All');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const tabs = [
        'Shop All',
        'Herbs',
        'Oils',
        'Skincare',
        'Seeds',
        'Plants'
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(9);
    const productListRef = useRef(null);

    useEffect(() => {
        const updateProductsPerPage = () => {
            if (window.innerWidth < 768) { // Mobile screens
                setProductsPerPage(10);
            } else { // Tablets and laptops
                setProductsPerPage(9);
            }
        };

        // Set initial value
        updateProductsPerPage();

        // Update on resize
        window.addEventListener('resize', updateProductsPerPage);

        // Cleanup the event listener on unmount
        return () => window.removeEventListener('resize', updateProductsPerPage);
    }, []);

    // Calculate total pages
    const totalPages = Math.ceil(productsData.products.length / productsPerPage);

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsData.products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page and scroll to top
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        if (productListRef.current) {
            productListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div ref={productListRef} className='flex flex-col md:flex-row px-4 md:px-[5vw] mb-7'>

            {/* Filter Section */}

            <div className='w-full md:w-[15vw]'>

            <div className='flex justify-between items-center gap-5'>
                <h2 className='font-OpenSans font-semibold text-[5.5vw] md:text-[1.5vw] text-lightTextColor'>Filters</h2>
                <button
                    className='border-b-[0.15vw] text-[3.5vw] md:text-[1vw] border-lightTextColor text-lightTextColor font-PublicSans font-medium'
                    onClick={clearFilters}>
                    Clear filters
                </button>
            </div>

            {/* Categories */}
            <div className="py-[2.5vw] md:py-[1.3vw] border-b-[0.15vw] border-lightTextColor">
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={toggleCategory}>
                    <div
                        className='w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] flex justify-center items-center border-2 border-darkGreen'>
                        {
                            isCategoryOpen
                                ? <FaMinus
                                    className="transform transition-transform duration-300 text-[2.5vw] md:text-[1vw] text-lightTextColor"/>
                                : <FaPlus
                                    className="transform transition-transform duration-300 text-[2.5vw] md:text-[1vw] text-lightTextColor"/>
                        }
                    </div>
                    <h3 className="text-[3.5vw] md:text-[1vw] font-bold text-lightTextColor font-OpenSans">Categories</h3>
                </div>
                {
                    isCategoryOpen && (
                        <ul className="pt-[3vw] md:pt-[1.3vw] space-y-3 ml-[1vw]">
                            {categoryOptions.map(option => (
                                <li key={option}>
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="mr-2 w-[3.5vw] h-[3.5vw] md:w-[1.2vw] md:h-[1.2vw] accent-darkGreen"
                                            checked={checkedFilters.categories.includes(option)}
                                            onChange={() => handleCheckboxChange('categories', option)}
                                        />
                                        <span className='font-PublicSans text-[3vw] md:text-[0.9vw]'>{option}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>

            {/* Price */}
            <div className="py-[1.3vw] border-b-[0.15vw] border-lightTextColor">
                <div className="flex gap-2 items-center cursor-pointer" onClick={togglePrice}>
                    <div
                        className='w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] flex justify-center items-center border-2 border-darkGreen'>
                        {
                            isPriceOpen
                                ? <FaMinus
                                    className="transform transition-transform duration-300 text-[2.5vw] md:text-[1vw] text-lightTextColor"/>
                                : <FaPlus
                                    className="transform transition-transform duration-300 text-[2.5vw] md:text-[1vw] text-lightTextColor"/>
                        }
                    </div>
                    <h3 className="text-[3.5vw] md:text-[1vw] font-bold text-lightTextColor font-OpenSans">Price</h3>
                </div>
                {
                    isPriceOpen && (
                        <ul className="pt-[3vw] md:pt-[1.3vw] space-y-3 ml-[1vw]">
                            {priceOptions.map(option => (
                                <li key={option}>
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="mr-2 w-[3.5vw] h-[3.5vw] md:w-[1.2vw] md:h-[1.2vw] accent-darkGreen"
                                            checked={checkedFilters.price.includes(option)}
                                            onChange={() => handleCheckboxChange('price', option)}
                                        />
                                        <span className='font-PublicSans text-[3vw] md:text-[0.9vw]'>{option}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>

            {/* Herbal Ingredients */}
            <div className="py-[1.3vw] border-b-[0.15vw] border-lightTextColor">
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={toggleHerbalIngredients}>
                    <div
                        className='w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] flex justify-center items-center border-2 border-darkGreen'>
                        {
                            isHerbalIngredientsOpen
                                ? <FaMinus
                                    className="transform transition-transform duration-300 text-[2.5vw] md:text-[1vw] text-lightTextColor"/>
                                : <FaPlus
                                    className="transform transition-transform duration-300 text-[2.5vw] md:text-[1vw] text-lightTextColor"/>
                        }
                    </div>
                    <h3 className="text-[3.5vw] md:text-[1vw] font-bold text-lightTextColor font-OpenSans">Herbal Ingredients</h3>
                </div>
                {
                    isHerbalIngredientsOpen && (
                        <ul className="pt-[3vw] md:pt-[1.3vw] space-y-3 ml-[1vw]">
                            {herbalOptions.map(option => (
                                <li key={option}>
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="mr-2 w-[3.5vw] h-[3.5vw] md:w-[1.2vw] md:h-[1.2vw] accent-darkGreen"
                                            checked={checkedFilters.herbalIngredients.includes(option)}
                                            onChange={() => handleCheckboxChange('herbalIngredients', option)}
                                        />
                                        <span className='font-PublicSans text-[3vw] md:text-[0.9vw]'>{option}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>

            {/* Dietary Preferences */}
            <div className="py-[1.3vw] border-b-[0.15vw] border-lightTextColor">
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={toggleDietaryPreferences}>
                    <div
                        className='w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] flex justify-center items-center border-2 border-darkGreen'>
                        {
                            isDietaryPreferencesOpen
                                ? <FaMinus
                                    className="transform transition-transform duration-300 text-[2.5vw] md:text-[1vw] text-lightTextColor"/>
                                : <FaPlus
                                    className="transform transition-transform duration-300 text-[2.5vw] md:text-[1vw] text-lightTextColor"/>
                        }
                    </div>
                    <h3 className="text-[3.5vw] md:text-[1vw] font-bold text-lightTextColor font-OpenSans">Dietary Preferences</h3>
                </div>
                {
                    isDietaryPreferencesOpen && (
                        <ul className="pt-[3vw] md:pt-[1.3vw] space-y-3 ml-[1vw]">
                            {dietaryOptions.map(option => (
                                <li key={option}>
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="mr-2 w-[3.5vw] h-[3.5vw] md:w-[1.2vw] md:h-[1.2vw] accent-darkGreen"
                                            checked={checkedFilters.dietaryPreferences.includes(option)}
                                            onChange={() => handleCheckboxChange('dietaryPreferences', option)}
                                        />
                                        <span className='font-PublicSans text-[3vw] md:text-[0.9vw]'>{option}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>

            </div>

            <div className='w-full mt-[3vw] md:mt-[0]'>

                {/* Tab Section */}

                <div className="flex justify-between items-center md:px-4 md:pl-10">
                    <div className="grid grid-cols-3 gap-[1.5vw] md:gap-[0] md:flex md:space-x-[0.5vw]">
                        {
                            tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-[5vw] py-[1vw] md:px-[3vw] md:py-[0.7vw] text-[3vw] md:text-[0.9vw] flex justify-center items-center rounded-full border font-PublicSans ${
                                    activeTab === tab
                                        ? 'bg-darkGreen text-white border-darkGreen'
                                        : 'text-lightTextColor border-gray-300'} focus:outline-none transition duration-200`}>
                                    {tab}
                                </button>
                            ))
                        }
                    </div>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center px-[2.2vw] py-[1vw] md:px-[1.5vw] md:py-[0.7vw] text-[3vw] md:text-[0.9vw] border-2 border-gray-300 rounded-full text-lightTextColor font-PublicSans focus:outline-none transition duration-200">
                            Sort by
                            <FaChevronDown
                                className={`ml-1 md:ml-2 text-[3vw] md:text-[0.9vw] text-darkGreen transition-transform duration-200 ${
                                isDropdownOpen
                                    ? 'rotate-180'
                                    : ''}`}/>
                        </button>
                        {/* Dropdown content */}
                        {
                            isDropdownOpen && (
                                <div
                                    className="absolute right-0 mt-2 w-[40vw] md:w-[12vw] bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <ul className="text-lightTextColor">
                                        <li className="px-[1vw] py-[0.6vw] font-PublicSans text-[3vw] md:text-[1vw] hover:bg-gray-100 cursor-pointer">Price: Low to High</li>
                                        <li className="px-[1vw] py-[0.6vw] font-PublicSans text-[3vw] md:text-[1vw] hover:bg-gray-100 cursor-pointer">Price: High to Low</li>
                                        <li className="px-[1vw] py-[0.6vw] font-PublicSans text-[3vw] md:text-[1vw] hover:bg-gray-100 cursor-pointer">Newest Arrivals</li>
                                        <li className="px-[1vw] py-[0.6vw] font-PublicSans text-[3vw] md:text-[1vw] hover:bg-gray-100 cursor-pointer">Best Sellers</li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div>
                    {/* Product Grid */}

                    <div 
                        className="grid grid-cols-2 md:grid-cols-3 gap-y-[3vw] gap-x-[1.5vw] mt-[2vw] pb-[2vw] border-b-[0.15vw] border-lightTextColor">
                        {
                            currentProducts.map(product => (
                                <div key={product.id} className="bg-productBg ml-[1vw] p-[2vw] rounded-[1.5vw]">
                                    <Link to={`/product/${product.name}`}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-[35vw] md:h-[20vw] object-cover rounded-[1vw]"/>
                                        <h3
                                            className="mt-[1.2vw] text-[3vw] md:text-[1.5vw] text-center font-Lora font-bold text-lightTextColor">
                                            {product.name}
                                        </h3>

                                        <p
                                            className="mt-[0.2vw] text-[2.2vw] md:text-[1vw] text-center text-lightTextColor font-OpenSans">{product.tag}</p>
                                        <div className="mt-[0.5vw] flex justify-center items-center gap-[0.2vw]">
                                            <div className="flex justify-center items-center gap-[0.4vw]">
                                                <AiFillStar
                                                    className="transform transition-transform duration-300 text-[4vw] md:text-[1.3vw] text-rating"/>
                                                <AiFillStar
                                                    className="transform transition-transform duration-300 text-[4vw] md:text-[1.3vw] text-rating"/>
                                                <AiFillStar
                                                    className="transform transition-transform duration-300 text-[4vw] md:text-[1.3vw] text-rating"/>
                                                <AiFillStar
                                                    className="transform transition-transform duration-300 text-[4vw] md:text-[1.3vw] text-rating"/>
                                                <AiOutlineStar
                                                    className="transform transition-transform duration-300 text-[4vw] md:text-[1.3vw] text-rating"/>
                                            </div>
                                            <div className='font-OpenSans text-[3vw] md:text-[1vw] font-semibold'>({product.rating})</div>
                                        </div>
                                        <p className="mt-[0.5vw] text-[4vw] md:text-[1.4vw] text-center font-bold text-darkGreen">{
                                                new Intl
                                                    .NumberFormat('en-NG', {
                                                        style: 'currency',
                                                        currency: 'NGN',
                                                        maximumFractionDigits: 0
                                                    })
                                                    .format(product.price)
                                            }</p>
                                    </Link>

                                    <button
                                        className='w-full h-[8vw] flex justify-center items-center rounded-full mt-2 md:h-[3.5vw] text-white text-[2.5vw] md:text-[1vw] font-bold font-OpenSans bg-darkGreen uppercase'>
                                        Add to cart
                                    </button>
                                </div>
                            ))
                        }
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center md:justify-end mt-[2vw]">
                        <ul className="flex list-none">
                            {
                                [...Array(totalPages)].map((_, index) => (
                                    <li key={index} className="mx-[1vw] md:mx-[0.3vw]">
                                        <button
                                            onClick={() => paginate(index + 1)}
                                            className={`px-[3vw] py-[1.5vw] md:px-[0.8vw] md:py-[0.4vw] text-[4vw] md:text-[1.4vw] border rounded-[0.4vw] ${
                                            currentPage === index + 1
                                                ? 'bg-darkGreen text-white'
                                                : 'bg-white text-darkGreen'}`}>
                                            {index + 1}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default Productlisting