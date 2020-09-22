import React from 'react';
import AboutUs from './about-us-section';
import IntroductionSection from './introduction-section';
import Portfolio from './portfolio-section';
import Services from './services-section';
import Testimonials from './testimonials-section';
import WhyUs from './why-us-section';

const HomePage = () => <>
  <IntroductionSection />
  <main id="main">
    <AboutUs />
    <Services />
    <WhyUs />
    <Portfolio />
    <Testimonials />
  </main>
</>;

export default HomePage;
