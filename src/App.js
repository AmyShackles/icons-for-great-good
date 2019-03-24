import React from "react";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Cats from "./components/Cats.js";
import Monster from "./components/Monsters.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: "", input: "", monster: ""};
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
  handleMonster = (event) => {
    event.preventDefault();
    fetch(`https://robohash.org/${this.state.input}/?set=set2`)
    .then(response => {
      this.setState({
        monster: response.url
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
      <Router>
        
          <Route path="/" render={(props) => <div className="top-bar"><Header{...props} path="cat"/>
        <Nav/>
        </div>}/>
        
        <main id="main"className="container-fluid vh-100 py-3">
            <Route exact path="/" render={() => <Cats image={this.state.image} handleChange={this.handleChange} handleSubmit={this.handleCat} attribution="David Revoy" input={this.state.input} />}/>
            <Route path="/monster" render={() => <Monster monster={this.state.monster} handleChange={this.handleChange} handleSubmit={this.handleMonster} attribution="Hrvoje Novakovic" input={this.state.input}/>}/>
        </main>
        <Footer />
        </Router>
    );
  }
}
export default App;