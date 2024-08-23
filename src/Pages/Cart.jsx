// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Newsletter from "../components/Newsletter/Newsletter.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const Cart = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  const { cart, removeFromCart, updateQuantity } = useCart();

  React.useEffect(() => {
    if (!isSignedIn) {
      navigate("/signin");
    }
  }, [isSignedIn, navigate]);

  const handleIncrement = (id, currentQuantity) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecrement = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex flex-col md:flex-row border-t-2 border-gray-300 justify-between px-4 py-4 md:px-[5vw] md:py-[5vw]">
          <div className="w-full md:w-3/4 bg-white shadow-lg rounded-lg">
            {cart.length === 0 ? (
              <p className="font-Lora text-[5vw] md:text-[2vw] font-bold flex justify-center items-center my-[3vw] text-textColor">
                Your cart is empty.
              </p>
            ) : (
              <table className="w-full text-left overflow-scroll">
                <thead>
                  <tr className="bg-lightTextColor text-white rounded-t-lg">
                    <th className="p-4"></th>
                    <th className="p-4 font-normal font-Lora text-[5vw] md:text-[1.5vw]">
                      Product
                    </th>
                    <th className="p-4 font-normal font-Lora text-[5vw] md:text-[1.5vw]">
                      Price
                    </th>
                    <th className="p-4 font-normal font-Lora text-[5vw] md:text-[1.5vw]">
                      Quantity
                    </th>
                    <th className="p-4 font-normal font-Lora text-[5vw] md:text-[1.5vw]">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="pl-4 py-4">
                        <FaTimes
                          onClick={() => removeFromCart(item)}
                          className="text-textColor text-[7vw] md:text-[1.2vw] cursor-pointer"
                        />
                      </td>
                      <td className="px-2 py-4 flex items-center">
                        {/* Product Image Placeholder */}
                        <div className="w-16 h-16 bg-gray-200 mr-4">
                          <img
                            src={item.image}
                            alt="Item"
                            className="w-full h-full object-cover rounded-[0.5vw]"
                          />
                        </div>
                        <p className="text-[7vw] md:text-[1vw] font-OpenSans">
                          {item.name}
                        </p>
                      </td>
                      <td className="p-4 text-[7vw] md:text-[1vw] font-OpenSans">{`₦${item.price.toLocaleString()}`}</td>
                      <td className="p-4">
                        <div className="flex items-center justify-between px-[1.5vw] py-[1.5vw] md:px-[1vw] md:py-[0.5vw] bg-white border border-gray-300 w-[8vw] rounded-full">
                          <FaMinus
                            onClick={() =>
                              handleDecrement(item.id, item.quantity)
                            }
                            className="text-[7vw] md:text-[0.8vw] font-OpenSans font-bold text-textColor cursor-pointer"
                          />
                          <span className="px-[1vw] md:px-[0.5vw] text-[5vw] md:text-[1vw] font-medium font-OpenSans text-textColor">
                            {item.quantity}
                          </span>

                          <FaPlus
                            onClick={() =>
                              handleIncrement(item.id, item.quantity)
                            }
                            className="text-[7vw] md:text-[0.8vw] font-OpenSans font-bold text-textColor cursor-pointer"
                          />
                        </div>
                      </td>
                      <td className="p-4 text-[7vw] md:text-[1vw] font-OpenSans">{`₦${(
                        item.price * item.quantity
                      ).toLocaleString()}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Cart Summary */}
          <div className="w-full h-full md:w-1/4 bg-white shadow-lg rounded-lg mt-4 md:mt-0 md:ml-4">
            <h3 className="font-Lora text-[5vw] md:text-[1.5vw] mb-4 bg-lightTextColor rounded-t-lg p-4 text-white">
              Cart Total
            </h3>
            <div className="flex justify-between mb-2 p-4 border-b">
              <span className="text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor">
                SUBTOTAL
              </span>
              <span className="text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor">{`₦${calculateTotal().toLocaleString()}`}</span>
            </div>
            <div className="flex justify-between mb-2 p-4 border-b">
              <span className="text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor">
                DISCOUNT
              </span>
              <span className="text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor">
                --
              </span>
            </div>
            <div className="flex justify-between mb-4 p-4">
              <span className="font-bold text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor">
                TOTAL
              </span>
              <span className="font-bold text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor">{`₦${calculateTotal().toLocaleString()}`}</span>
            </div>
            <button className="w-full bg-darkGreen text-white text-[4vw] md:text-[1vw] font-OpenSans py-4 rounded-b-lg hover:bg-green-600">
              Proceed To Checkout
            </button>
          </div>
        </div>

        {/* Newsletter */}
        <Newsletter />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Cart;
