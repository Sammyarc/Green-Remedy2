import { createContext, useContext, useReducer } from "react";

// Create the Cart Context
const CartContext = createContext();

// Define the initial state
const initialState = {
  cart: [],
};

// Update the cartReducer to handle quantity updates
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // eslint-disable-next-line no-case-declarations
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      // If the product already exists in the cart
      if (existingProductIndex !== -1) {
        const updatedCart = state.cart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }

      // If the product doesn't exist in the cart, add it
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, quantity: action.payload.quantity },
        ],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "UPDATE_QUANTITY":
      // eslint-disable-next-line no-case-declarations
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        cart: updatedCart,
      };

    default:
      return state;
  }
};

// Add to Cart function
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product, quantity = 1) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } });
  };

  return (
    <CartContext.Provider
      value={{ cart: state.cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
