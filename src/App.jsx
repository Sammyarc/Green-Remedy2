// src/App.jsx  eslint-disable-next-line no-unused-vars import React from
// "react"; import { BrowserRouter as Router, Route, Routes } from
// "react-router-dom"; import Home from "./Pages/Home.jsx"; import Products from
// "./Pages/Products.jsx"; import HealthResources from
// "./Pages/HealthResources.jsx"; import AboutUs from "./Pages/AboutUs.jsx";
// import ContactUs from "./Pages/ContactUs.jsx";  import Signup from
// './Pages/Signup.jsx'; import Signin from "./Pages/Signin.jsx"; import
// ProductDetail from "./Pages/ProductDetail.jsx"; import Cart from
// "./Pages/Cart.jsx"; import Errorpage from "./Pages/ErrorPage.jsx"; import
// Checkout from "./Pages/Checkout.jsx"; import OrderHistory from
// "./Pages/OrderHistory.jsx"; import UserInfo from "./Pages/UserInfo.jsx";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
// import SignUpPage from "./Pages/Signup.jsx"; const App = () => {   return (
// <Router>       <Routes>         <Route path="/" element={<Home />}
// errorElement={<Errorpage />} />         <Route path="/products"
// element={<Products />} />         <Route path="/health-resources"
// element={<HealthResources />} />         <Route path="/about"
// element={<AboutUs />} />         <Route path="/contact" element={<ContactUs
// />} />         {/* <Route path="/signup" element={<Signup />} /> */}
// <Route path="/signup/*" element={<SignUpPage />} />         <Route
// path="/signin" element={<Signin />} />         <Route path="/product/:id"
// element={<ProductDetail />} />         <Route path="/checkout"
// element={<Checkout />} />         <Route path="/orderhistory"
// element={<OrderHistory />} />         <Route path="/userinfo"
// element={<UserInfo />} />         <Route           path="/cart"
// element={             <ProtectedRoute>               <Cart />
// </ProtectedRoute>           }         />       </Routes>     </Router>   );
// }; export default App; 
// eslint-disable-next-line no-unused-vars
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import HealthResources from "./Pages/HealthResources.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Signin from "./Pages/Signin.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Cart from "./Pages/Cart.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Checkout from "./Pages/Checkout.jsx";
import OrderHistory from "./Pages/OrderHistory.jsx";
import UserInfo from "./Pages/UserInfo.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import Account from "./Pages/Account.jsx";
// import SignUpPage from "./Pages/Signup.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products" element={<Products />}/>
                <Route path="/health-resources" element={<HealthResources />}/>
                <Route path="/about" element={<AboutUs />}/>
                <Route path="/contact" element={<ContactUs />}/> {/* <Route path="/signup/*" element={<SignUpPage />} /> */}
                <Route path="/signin/*" element={<Signin />}/>
                <Route path="/product/:id" element={<ProductDetail />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/orderhistory" element={<OrderHistory />}/>
                <Route path="/userinfo" element={<UserInfo />}/>
                <Route
                    path="/account"
                    element={<ProtectedRoute > <Account/>
                </ProtectedRoute>
                    }
                />

                <Route
                    path="/checkout"
                    element={<ProtectedRoute > <Checkout/>
                </ProtectedRoute>
                    }
                /> {/* Catch-all route for unknown paths */}
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </Router>
    );
};

export default App;
