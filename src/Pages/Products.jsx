// eslint-disable-next-line no-unused-vars
import React from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';



const Products = () => {
  React.useEffect(() => {
    AOS.init({offset: 100, duration: 800, easing: 'ease', delay: 100});
    AOS.refresh();
}, []);
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  )
}

export default Products