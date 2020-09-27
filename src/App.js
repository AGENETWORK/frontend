/* eslint-disable import/no-unresolved */
import React from "react";
import PartnetTabForm from "./partner/partner-tab-form";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";

function App() {
  /* const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }; */

  return (
    <div className="App">
      <Header />
      <PartnetTabForm />
      <Footer />
    </div>
  );
}

export default App;
