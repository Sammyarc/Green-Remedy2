import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutHero from '../components/Hero/aboutHero.jsx';
import Feature from '../components/Feature/Feature.jsx';
import Video from '../components/Video/Video';
import StoryBanner from '../components/Banner/storyBanner.jsx';
import Missionbanner from '../components/Banner/Missionbanner.jsx';
import AboutFaqs from '../components/FAQs/AboutFaqs.jsx';
import Values from '../components/Feature/Values.jsx';
import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Newsletter from '../components/Newsletter/Newsletter.jsx';
import Footer from '../components/Footer/Footer.jsx';
import TeamSection from '../components/Team/Team.jsx';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: 'ease', delay: 100 });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Feature />
      <Missionbanner />
      <TeamSection />
      <StoryBanner />
      <Video />
      <Values />
      <AboutFaqs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutUs;
