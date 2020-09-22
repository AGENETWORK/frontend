import React from 'react';
import AboutUs from './about-us-section';
import IntroductionSection from './introduction-section';
import Services from './services-section';
import WhyUs from './why-us-section';

const HomePage = () => <>
  <IntroductionSection />
  <main id="main">
    <AboutUs />
    <Services />
    <WhyUs />
  </main>
</>;

export default HomePage;
