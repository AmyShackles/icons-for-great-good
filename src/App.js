import React from "react";
import axios from "axios";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: ""};
  }

  componentDidMount() {
    fetch("https://robohash.org/.png")
    .then(response => {
      this.setState({
        image: response.url
    });
  }).catch(err => console.log(err.message));
  }
  render() {
    return (
      <React.Fragment>
        <div className="top-bar">
        <Header />
        <Nav />
        </div>
        <main>
        <img src={this.state.image} alt="default robot icon" />
        </main>
        <Footer />
        </React.Fragment>
    );
  }
}
export default App;