// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Pages/Home.jsx';
import Products from './Pages/Products.jsx';
import HealthResources from './Pages/HealthResources.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import Signup from './Pages/Signup.jsx';
import Signin from './Pages/Signin.jsx';
import ProductDetail from'./Pages/ProductDetail.jsx';
import Cart from './Pages/Cart.jsx';
import Errorpage from './Pages/ErrorPage.jsx';


const App = () => {
  return (
    <Router>
      <Routes> {/* Changed Switch to Routes */}
        <Route path="/" element={<Home />} errorElement={<Errorpage />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/health-resources" element={<HealthResources />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;