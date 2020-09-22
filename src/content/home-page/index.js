import React from 'react';
import AboutUs from './about-us-section';
import IntroductionSection from './introduction-section';
import Services from './services-section';

const HomePage = () => <>
  <IntroductionSection />
  <main id="main">
    <AboutUs />
    <Services />
  </main>
</>;

export default HomePage;
