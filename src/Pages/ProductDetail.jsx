// eslint-disable-next-line no-unused-vars
import React from 'react';
import Productdesc from '../components/Products/Productdesc';
import Productsfeature from '../components/Feature/Productsfeature';
import Similarproducts from '../components/Products/Similarproducts';

const ProductDetail = () => {
  return (
    <div>
      <Productdesc />
      <Similarproducts />
      <Productsfeature />
    </div>
  );
};

export default ProductDetail;
