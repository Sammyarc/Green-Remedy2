import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Products from './Pages/Products.jsx';
import HealthResources from './Pages/HealthResources.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import Signup from './Pages/Signup.jsx';
import Signin from './Pages/Signin.jsx';
import ProductDetail from './Pages/ProductDetail.jsx';
import Cart from './Pages/Cart.jsx';
import Errorpage from './Pages/ErrorPage.jsx';
import { CartProvider } from './context/CartContext.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Errorpage />}>
      <Route index element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/health-resources' element={<HealthResources />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
