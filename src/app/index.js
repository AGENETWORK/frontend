import React from 'react';
import PartnetTabForm from '../partner/partner-tab-form';
import Header from '../header/header';
import Footer from '../footer/footer';
import IntroductionSection from '../intro-section';

const App = () => {
  return (
    <div className="App">
      <Header />
      <IntroductionSection />
      <PartnetTabForm />
      <Footer />
    </div>
  );
};

export default App;
