import React from "react";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Cats from "./components/Cats.js";
import Monster from "./components/Monsters.js";
import Headless from "./components/Headless.js";
import Robot from "./components/Robot.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: "", input: "", monster: "", headless: "", robot: ""};
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
  handleRobot = (event) => {
    event.preventDefault();
    fetch(`https://robohash.org/${this.state.input}/?set=set1`)
    .then(response => {
      this.setState({
        robot: response.url
      })
    }).catch(err => console.log(err.message));
    this.setState({
      input: ""
    })
  }
  handleHeadless = (event) => {
    event.preventDefault();
    fetch(`https://robohash.org/${this.state.input}/?set=set3`)
    .then(response => {
      this.setState({
        headless: response.url
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
            <Route path="/headless_robot" render={() => <Headless headless={this.state.headless} handleChange={this.handleChange} handleSubmit={this.handleHeadless} attribution="Julian Peter Arias" input={this.state.input}/>}/>
            <Route path="/robot" render={() => <Robot robot={this.state.robot} handleChange={this.handleChange} handleSubmit={this.handleRobot} attribution="Zikri Kader" input={this.state.input}/>}/>
        </main>
        <Footer />
        </Router>
    );
  }
}
export default App;