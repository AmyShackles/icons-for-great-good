import React from "react";
import { Title } from "./components/Title.js";
import { Nav } from "./components/Nav.js";
import { Footer } from "./components/Footer.js";
import { Cats } from "./components/Cats.js";
import { Monster } from "./components/Monsters.js";
import { DisembodiedRobotHead } from "./components/DisembodiedRobotHead.js";
import { Robot } from "./components/Robot.js";
import { Human } from './components/Human.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = React.useState();
    return (
      <>
        <Router>
          <div className="top-bar">
          <Title iconType={currentPage}/>
          <Nav />
          </div>
        <main id="main"className="container-fluid vh-100 py-3">

            <Route exact path="/" render={() => <Cats setPage={() => setCurrentPage('Cat')} attribution="David Revoy"/>}/>
            <Route path="/monster" render={() => <Monster setPage={() => setCurrentPage('Monster')} attribution="Hrvoje Novakovic"/>}/>
            <Route path="/disembodied" render={() => <DisembodiedRobotHead setPage={() => setCurrentPage('Disembodied Robot Head')} attribution="Julian Peter Arias"/>}/>
            <Route path="/robot" render={() => <Robot setPage={() => setCurrentPage('Robot')} attribution="Zikri Kader" />}/>
            <Route path="/human" render={() => <Human setPage={() => setCurrentPage('Human')} attribution="Pablo Stanley"/>}/>
        </main>
        <Footer />
        </Router>
        </>
    );
}
export { App }