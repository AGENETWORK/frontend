import React from 'react';
import PartnetTabForm from '../partner/partner-tab-form';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../content';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <PartnetTabForm /> */}
      <Footer />
    </div>
  );
};

export default App;
