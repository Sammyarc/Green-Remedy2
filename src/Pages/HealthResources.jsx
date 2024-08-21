// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import HealthHero from '../components/HealthResources/HealthHero';
import AOS from 'aos';

const HealthResources = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: 'ease', delay: 100 });
    AOS.refresh();
  }, []);

  return (
    <div data-aos='zoom-in'>
      <HealthHero />
    </div>
  );
};

export default HealthResources;
