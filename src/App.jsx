// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import HealthResources from "./Pages/HealthResources.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Signup from "./Pages/Signup.jsx";
import Signin from "./Pages/Signin.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Changed Switch to Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/health-resources" element={<HealthResources />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
