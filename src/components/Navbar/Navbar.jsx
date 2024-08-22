import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import Logo from "../../assets/logo/green remedies llogo-black.png";
import Search from "../../assets/Icons/search.svg";
import Signup from "../../assets/Icons/person.svg";
import Cart from "../../assets/Icons/cart.svg";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/"
    }, {
        id: 2,
        name: "Products",
        link: "/products"
    }, {
        id: 3,
        name: "Health-Resources",
        link: "/health-resources"
    }, {
        id: 4,
        name: "About us",
        link: "/about"
    }, {
        id: 5,
        name: "Contact us",
        link: "/contact"
    }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isAuthRoute = () => {
        return location.pathname === "/signin" || location.pathname === "/signup";
    };

    return (
        <div className="xs:px-[2.5vw] bg-milkWhite">
            {/* upper Navbar */}
            <div className="md:py-[1.5vw] py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="Green Remedies Logo"
                                className="xs:w-[27vw] sm:w-[15vw] md:w-[15vw] xs:h-[10vw] sm:h-[5vw] md:h-[5vw]"/>
                        </Link>
                    </div>
                    {/* search button */}
                    <div className="block">
                        <div className="relative">
                            <input
                                type="search"
                                placeholder="Search for herbal remedies"
                                className="w-[40vw] sm:w-[45vw] md:w-[32vw] h-[8vw] sm:h-[4vw] md:h-[3vw] border-2 border-lightTextColor rounded-full pl-[8vw] pr-3 sm:px-[4vw] md:px-[3vw] text-[3vw] sm:text-[1.5vw] md:text-[1vw] outline-none font-OpenSans text-lightTextColor bg-transparent focus:border-darkGreen placeholder:text-[3vw] sm:placeholder:text-[1.5vw] md:placeholder:text-[1vw]"/>
                            <img
                                src={Search}
                                alt="Search Icon"
                                className="absolute top-1/2 -translate-y-1/2 left-[3vw] sm:left-[1.5vw] md:left-[1vw] w-[5vw] sm:w-[2.5vw] md:w-[1.5vw] h-[5vw] sm:h-[2.5vw] md:h-[2vw]"/>
                        </div>
                    </div>

                    {/* signup and cart button */}
                    <div className="hidden md:flex md:gap-[3vw] md:items-center">
                        {/* signup */}
                        <Link
                            // to="/signup"
                            to={isAuthRoute()
                                ? "/account"
                                : "/signup"} className="md:flex md:gap-[0.5vw] md:items-center cursor-pointer font-OpenSans">
                            <div
                                className="md:w-[2.7vw] md:h-[2.7vw] md:rounded-full bg-darkGreen md:flex md:justify-center md:items-center">
                                <img src={Signup} alt="Signup Icon" className="w-[1.7vw]"/>
                            </div>
                            <span className="md:text-[1.3vw] text-textColor font-OpenSans">
                                {/* Sign-in/Sign-up */}
                                {
                                    isAuthRoute()
                                        ? "Account"
                                        : "Sign-in/Sign-up"
                                }
                            </span>
                        </Link>
                        {/* cart button */}
                        <Link
                            to="/cart"
                            className="md:flex md:gap-[0.5vw] md:items-center cursor-pointer">
                            <div
                                className="md:w-[2.7vw] md:h-[2.7vw] rounded-full bg-darkGreen md:flex md:justify-center md:items-center">
                                <img src={Cart} alt="Cart Icon" className="w-[1.7vw]"/>
                            </div>
                            <span className="md:text-[1.3vw] text-textColor font-OpenSans">Cart</span>
                        </Link>
                    </div>

                    {/* Hamburger menu icon */}
                    <div className="md:hidden flex  items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {
                                isOpen
                                    ? (<XIcon className="h-8 w-8 text-darkGreen"/>)
                                    : (<MenuIcon className="h-8 w-8 text-darkGreen"/>)
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Lower Navbar */}

            <div
                className={`${
                isOpen
                    ? "block animate-slideDown opacity-100 absolute top-[17vw] left-0 w-full bg-white" +
                            " shadow-lg z-10"
                    : "hidden"} md:relative md:flex md:justify-center md:items-center md:py-[2vw]`}>
                <ul className="md:flex md:justify-center md:items-center md:gap-[1.5vw]">
                    {
                        Menu.map((data) => (
                            <li key={data.id} className="my-4 mx-4 md:my-0 md:mx-0">
                                <Link
                                    to={data.link}
                                    className="block text-[4.5vw] font-semibold md:text-[1.3vw] text-lightTextColor hover:text-darkGreen transition md:font-medium font-OpenSans"
                                    onClick={() => setIsOpen(false)}>
                                    {data.name}
                                </Link>
                            </li>
                        ))
                    }
                    {/* Signup and Cart links in mobile view */}
                    <li className="my-4 mx-4 md:hidden">
                        <Link
                            // to="/signup"
                            to={isAuthRoute()
                                ? "/account"
                                : "/signup"} className="flex items-center text-[4.5vw] text-lightTextColor hover:text-darkGreen transition font-semibold md:font-medium font-OpenSans" onClick={() => setIsOpen(false)}>
                            {/* Sign-in/Sign-up */}
                            {
                                isAuthRoute()
                                    ? "Account"
                                    : "Sign-in/Sign-up"
                            }
                        </Link>
                    </li>
                    <li className="my-4 mx-4 md:hidden">
                        <Link
                            to="/cart"
                            className="flex items-center text-[4.5vw] text-lightTextColor hover:text-darkGreen transition font-semibold md:font-medium font-OpenSans"
                            onClick={() => setIsOpen(false)}>
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;
