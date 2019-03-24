import React from "react";
import axios from "axios";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Cats from "./components/Cats.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: "", input: ""};
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  handleCat = (event) => {
    event.preventDefault();
    fetch(`https://robohash.org/${this.state.input}/?set=set4`)
    .then(response => {
      this.setState({
        image: response.url
      })
    })
    .catch(err => console.log(err.message));
    this.setState({
      input: ""
    })
  }
  componentDidMount() {
    fetch("https://robohash.org//?set=set4")
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
        <main className="container-fluid">
          <section id="icon">
            <Cats image={this.state.image} handleChange={this.handleChange} handleCat={this.handleCat} input={this.state.input} />
          </section>

        </main>
        <Footer />
        </React.Fragment>
    );
  }
}
export default App;