// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import HealthHero from '../components/HealthResources/HealthHero';
import AOS from 'aos';
import Benefits from '../components/HealthResources/Benefits';
import Remedies from '../components/HealthResources/Remedies';
import HerbalRemedies from '../components/HealthResources/HerbalRemedies';
import Articles from '../components/HealthResources/Articles';
import BlogPost from '../components/HealthResources/BlogPost';
import WatchAndLearn from '../components/HealthResources/WatchAndLearn';
import Faqs from '../components/HealthResources/Faqs';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';

const HealthResources = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: 'ease', delay: 100 });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <HealthHero />
      <Benefits />
      <Remedies />
      <HerbalRemedies />
      <Articles />
      <BlogPost />
      <WatchAndLearn />
      <Faqs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HealthResources;
