import React from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import Navbar from '../components/Navbar/Navbar.jsx';
import AboutHero from '../components/Hero/aboutHero.jsx';
import Feature from '../components/Feature/Feature.jsx';
import Video from '../components/Video/Video';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';

const AboutUs = () => {
    React.useEffect(() => {
        AOS.init({offset: 100, duration: 800, easing: 'ease', delay: 100});
        AOS.refresh();
    }, []);
  return (
    <div>
        <Navbar />
        <AboutHero />
        <Feature />
        <Video />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default AboutUs