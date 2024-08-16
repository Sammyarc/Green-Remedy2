// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const ProductDetail = () => {
    const { id } = useParams();

    return (
        <div>
            <Navbar />
            <Footer />
        </div>
    );
}

export default ProductDetail;