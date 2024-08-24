import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../../assets/logo/green remedies llogo-black.png";
import Search from "../../assets/Icons/search.svg";
import SignupIcon from "../../assets/Icons/person.svg";
import CartIcon from "../../assets/Icons/cart.svg";
import { useUser, useAuth, useClerk } from "@clerk/clerk-react";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/products" },
  { id: 3, name: "Health-Resources", link: "/health-resources" },
  { id: 4, name: "About us", link: "/about" },
  { id: 5, name: "Contact us", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();

  const isCartRoute = location.pathname === "/cart";

  return (
    <div className="xs:px-[2.5vw] bg-milkWhite">
      {/* upper Navbar */}
      <div className="md:py-[1.5vw] py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src={Logo}
              alt="Green Remedies Logo"
              className="xs:w-[27vw] sm:w-[15vw] md:w-[15vw] xs:h-[10vw] sm:h-[5vw] md:h-[5vw]"
            />
          </Link>

          {/* Search button */}
          <div className="block">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for herbal remedies"
                className="search-input w-[40vw] sm:w-[45vw] md:w-[32vw] h-[8vw] sm:h-[4vw] md:h-[3vw] border-2 border-lightTextColor rounded-full pl-[8vw] sm:px-[4vw] md:px-[3vw] text-[3vw] sm:text-[1.5vw] md:text-[1vw] outline-none font-OpenSans text-lightTextColor bg-transparent focus:border-darkGreen placeholder:text-[3vw] sm:placeholder:text-[1.5vw] md:placeholder:text-[1vw]"
              />
              <img
                src={Search}
                alt="Search Icon"
                className="absolute top-1/2 -translate-y-1/2 left-[3vw] sm:left-[1.5vw] md:left-[1vw] w-[5vw] sm:w-[2.5vw] md:w-[1.5vw] h-[5vw] sm:h-[2.5vw] md:h-[2vw]"
              />
            </div>
          </div>

          {/* Signup and cart button for Desktop */}
          <div className="hidden md:flex md:gap-[3vw] md:items-center">
            {/* Signup/Account */}
            {isSignedIn ? (
              <div className="relative md:flex md:gap-[0.5vw] md:items-center cursor-pointer font-OpenSans">
                <div className="md:w-[2.7vw] md:h-[2.7vw] md:rounded-full bg-darkGreen md:flex md:justify-center md:items-center">
                  <img
                    src={user.profileImageUrl || SignupIcon}
                    alt="User Icon"
                    className="w-[1.7vw] rounded-full"
                  />
                </div>
                <div className="md:text-[1.3vw] text-textColor font-OpenSans">
                  {user.fullName}
                </div>
                <button
                  onClick={() => signOut()}
                  className="block px-4 py-2 text-sm text-darkGreen hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/signin"
                className="md:flex md:gap-[0.5vw] md:items-center cursor-pointer font-OpenSans"
              >
                <div className="md:w-[2.7vw] md:h-[2.7vw] md:rounded-full bg-darkGreen md:flex md:justify-center md:items-center">
                  <img src={SignupIcon} alt="Signup Icon" className="w-[1.7vw]" />
                </div>
                <span className="md:text-[1.3vw] text-textColor font-OpenSans">
                  Sign-in/Sign-up
                </span>
              </Link>
            )}

            {/* Cart */}
            <Link
              to={isSignedIn || !isCartRoute ? "/cart" : "/signin"}
              className="md:flex md:gap-[0.5vw] md:items-center cursor-pointer"
            >
              <div className="md:w-[2.7vw] md:h-[2.7vw] rounded-full bg-darkGreen md:flex md:justify-center md:items-center">
                <img src={CartIcon} alt="Cart Icon" className="w-[1.7vw]" />
              </div>
              <span className="md:text-[1.3vw] text-textColor font-OpenSans">
                Cart
              </span>
            </Link>
          </div>

          {/* Hamburger menu icon */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <XIcon className="h-8 w-8 text-darkGreen" />
              ) : (
                <MenuIcon className="h-8 w-8 text-darkGreen" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar (Mobile Menu) */}
      <div
        className={`${
          isOpen
            ? "block animate-slideDown opacity-100 absolute top-[17vw] left-0 w-full bg-white shadow-lg z-10"
            : "hidden"
        } md:relative md:flex md:justify-center md:items-center md:py-[2vw]`}
      >
        <ul className="md:flex md:justify-center md:items-center md:gap-[1.5vw]">
          {Menu.map((data) => (
            <li key={data.id} className="my-4 mx-4 md:my-0 md:mx-0">
              <Link
                to={data.link}
                className="block text-[4.5vw] font-semibold md:text-[1.3vw] text-lightTextColor hover:text-darkGreen transition md:font-medium font-OpenSans"
                onClick={() => setIsOpen(false)}
              >
                {data.name}
              </Link>
            </li>
          ))}

          {/* Account/Signup for mobile */}
          <li className="my-4 mx-4 md:hidden">
            {isSignedIn ? (
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={user.profileImageUrl || SignupIcon}
                    alt="User Icon"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-[4.5vw] text-lightTextColor font-OpenSans">
                    {user.fullName || "Account"}
                  </span>
                </div>
                <button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="text-[4vw] text-darkGreen hover:underline font-OpenSans"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/signin"
                className="flex items-center text-[4.5vw] text-lightTextColor hover:text-darkGreen transition font-semibold font-OpenSans"
                onClick={() => setIsOpen(false)}
              >
                Sign-in/Sign-up
              </Link>
            )}
          </li>

          {/* Cart link in mobile view */}
          <li className="my-4 mx-4 md:hidden">
            <Link
              to={isSignedIn || !isCartRoute ? "/cart" : "/signin"}
              className="flex items-center text-[4.5vw] text-lightTextColor hover:text-darkGreen transition font-semibold font-OpenSans"
              onClick={() => setIsOpen(false)}
            >
              <img src={CartIcon} alt="Cart Icon" className="w-6 h-6" />
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
