import React from "react";
import PartnetTabForm from "./partner/partner-tab-form";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PartnetTabForm />
      <Footer />
    </div>
  );
}

export default App;
