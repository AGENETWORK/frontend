import React from "react";
import WOW from "wowjs";
import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../content";

class App extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="back-to-top">
          <i className="fa fa-chevron-up" />
        </a>
      </div>
    );
  }
}

export default App;
