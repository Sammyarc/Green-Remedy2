// eslint-disable-next-line no-unused-vars
import React from 'react';
import Productdesc from '../components/Products/Productdesc';
import Productsfeature from '../components/Feature/Productsfeature';
import Similarproducts from '../components/Products/Similarproducts';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';

const ProductDetail = () => {
  return (
    <div>
      <Navbar />
      <Productdesc />
      <Similarproducts />
      <Productsfeature />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDetail;
