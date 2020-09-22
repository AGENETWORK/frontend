import React from 'react';
import AboutUs from './about-us-section';
import IntroductionSection from './introduction-section';

const HomePage = () => <>
  <IntroductionSection />
  <main id="main">
    <AboutUs />
  </main>
</>;

export default HomePage;
