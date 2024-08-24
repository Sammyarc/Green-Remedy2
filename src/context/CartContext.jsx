import { createContext, useContext, useReducer, useEffect } from 'react';

// Create the Cart Context
const CartContext = createContext();

// Define the initial state
const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    orders: JSON.parse(localStorage.getItem('orders')) || [] // Initialize orders from localStorage
};

// Generate a random tracking ID
const generateTrackingID = () => {
    return Math.floor(1000000000 + Math.random() * 900000000);
};

// Generate a random order number
const generateOrderID = () => {
    return Math.floor(10000 + Math.random() * 9000);
};

// Cart reducer to handle different actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // eslint-disable-next-line no-case-declarations
            const existingProductIndex = state.cart.findIndex((item) => item.id === action.payload.id);

            if (existingProductIndex !== -1) {
                const updatedCart = state.cart.map(
                    (item, index) => index === existingProductIndex
                        ? { ...item, quantity: item.quantity + action.payload.quantity }
                        : item
                );
                return { ...state, cart: updatedCart };
            }

            // eslint-disable-next-line no-case-declarations
            const newCartItem = {
                ...action.payload,
                trackingID: generateTrackingID(), // Add trackingID here
                OrderID: generateOrderID(), // Add OrderID here
            };

            return {
                ...state,
                cart: [...state.cart, newCartItem]
            };

        case 'ADD_ORDER':
            // eslint-disable-next-line no-case-declarations
            const updatedOrders = [...state.orders, action.payload];
            return {
                ...state,
                orders: updatedOrders
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            };

        case 'UPDATE_QUANTITY':
            // eslint-disable-next-line no-case-declarations
            const cartWithUpdatedQuantity = state.cart.map(
                (item) => item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
            return { ...state, cart: cartWithUpdatedQuantity };

        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            };

        default:
            return state;
    }
};

// CartProvider component to provide cart context
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Save cart and orders state to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(state.orders));
    }, [state.orders]);

    const addToCart = (product, quantity = 1) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: { ...product, quantity }
        });
    };

    const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    const updateQuantity = (productId, quantity) => {
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { id: productId, quantity }
        });
    };

    const addOrder = (orderDetails) => {
        dispatch({ type: 'ADD_ORDER', payload: orderDetails });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                orders: state.orders,
                addToCart,
                removeFromCart,
                updateQuantity,
                addOrder,
                clearCart
            }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);
