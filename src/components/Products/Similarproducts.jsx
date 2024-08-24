// eslint-disable-next-line no-unused-vars
import {useState} from 'react';
import {Link} from 'react-router-dom';
import productsData from '../../assets/products.json';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import {useCart} from '../../context/CartContext';
import Cartadd from '../Modals/Cartadd';

const SimilarProducts = () => {
    const {addToCart} = useCart();

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCart = (product) => {
        addToCart(product);
        setIsModalOpen(true);
    };

    const similarProducts = productsData
        .products
        .slice(0, 4);

    return (
        <div className='m-[5vw]'>
            <h2
                className='text-[6vw] md:text-[2.5vw] font-Lora font-bold text-textColor mb-[1vw]'>Similar Products</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[3vw] gap-x-[1.2vw]">
                {
                    similarProducts.map(product => (
                        <div
                            key={product.id}
                            className="bg-productBg ml-[1vw] p-[1.5vw] rounded-[1.5vw]">
                            <Link to={`/product/${product.id}`} onClick={() => window.scrollTo(0, 0)}
                                // Scroll to top when clicked
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[35vw] md:h-[20vw] object-cover rounded-[1vw]"/>
                                <h3
                                    className="mt-[2vw] text-[3.5vw] md:text-[1.5vw] text-center font-Lora font-bold text-lightTextColor">
                                    {product.name}
                                </h3>

                                <p
                                    className="mt-[0.2vw] text-[2.5vw] md:text-[1vw] text-center text-lightTextColor font-OpenSans">
                                    {product.tag}
                                </p>
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
                                    <div className='font-OpenSans text-[3vw] md:text-[1vw] font-semibold'>
                                        ({product.rating})
                                    </div>
                                </div>
                                <p
                                    className="mt-[0.5vw] text-[4vw] md:text-[1.4vw] text-center font-bold text-darkGreen">
                                    {
                                        new Intl
                                            .NumberFormat('en-NG', {
                                                style: 'currency',
                                                currency: 'NGN',
                                                maximumFractionDigits: 0
                                            })
                                            .format(product.price)
                                    }
                                </p>
                            </Link>

                            <button
                                onClick={() => handleAddToCart(product)}
                                className='w-full h-[8vw] flex justify-center items-center rounded-full mt-2 md:h-[3.5vw] text-white text-[2.5vw] md:text-[1vw] font-bold font-OpenSans bg-darkGreen uppercase'>
                                Add to cart
                            </button>
                        </div>
                    ))
                }

                <Cartadd isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            </div>
        </div>
    )
}

export default SimilarProducts;
