// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import ProductHero from '../components/Hero/productHero.jsx';
import Productlisting from '../components/Products/productlisting.jsx';
import Newsletter from '../components/Newsletter/Newsletter.jsx';



const Products = () => {
  return (
    <div>
      <Navbar />
      <ProductHero />
      <Productlisting />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Products