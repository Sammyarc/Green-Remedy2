// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Productdesc from '../components/Products/Productdesc';
import Productsfeature from '../components/Feature/Productsfeature';
import Newsletter from '../components/Newsletter/Newsletter';
import Similarproducts from '../components/Products/Similarproducts';



const ProductDetail = () => {
   

    return (
        <div>
            <Navbar/>
            <Productdesc />
            <Similarproducts />
            <Productsfeature />
            <Newsletter />
            <Footer/>
        </div>
    );
};

export default ProductDetail;
