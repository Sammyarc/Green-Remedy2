import React from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import Navbar from '../components/Navbar/Navbar.jsx';
import AboutHero from '../components/Hero/aboutHero.jsx';
import Feature from '../components/Feature/Feature.jsx';
import Video from '../components/Video/Video';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import StoryBanner from '../components/Banner/storyBanner.jsx';
import Missionbanner from '../components/Banner/Missionbanner.jsx';
import AboutFaqs from '../components/FAQs/AboutFaqs.jsx';
import Values from '../components/Feature/Values.jsx';


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
        <Missionbanner />
        <StoryBanner />
        <Video />
        <Values />
        <AboutFaqs />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default AboutUs