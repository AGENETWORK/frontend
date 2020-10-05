import React from "react";
import WOW from "wowjs";
import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../content";
import BackToTop from "./back-to-top";

class App extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
        <BackToTop />
      </>
    );
  }
}

export default App;
