// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import ProductHero from '../components/Hero/productHero.jsx';
import Productlisting from '../components/Products/productlisting.jsx';
import Newsletter from '../components/Newsletter/Newsletter.jsx';




const Products = () => {
  React.useEffect(() => {
    AOS.init({offset: 100, duration: 800, easing: 'ease', delay: 100});
    AOS.refresh();
}, []);
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