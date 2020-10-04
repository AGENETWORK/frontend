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
      </div>
    );
  }
}

export default App;
