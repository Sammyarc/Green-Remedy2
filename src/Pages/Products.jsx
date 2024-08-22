// eslint-disable-next-line no-unused-vars
import ProductHero from '../components/Hero/productHero.jsx';
import Productlisting from '../components/Products/productlisting.jsx';
import Productsfeature from '../components/Feature/Productsfeature.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Newsletter from '../components/Newsletter/Newsletter.jsx';
import Footer from '../components/Footer/Footer.jsx';

const Products = () => {
  return (
    <div>
      <Navbar />
      <ProductHero />
      <Productlisting />
      <Productsfeature />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Products;
