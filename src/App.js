import React from "react";
import { Title } from "./components/Title.js";
import { Nav } from "./components/Nav.js";
import { Footer } from "./components/Footer.js";
import { Cats } from "./components/Cats.js";
import { Monster } from "./components/Monsters.js";
import { DisembodiedRobotHead } from "./components/DisembodiedRobotHead.js";
import { Robot } from "./components/Robot.js";
import { Human } from "./components/Human.js";
import { Route, useLocation } from "react-router-dom";
import "./App.css";

const App = () => {
    const [currentPage, setCurrentPage] = React.useState();
    const { pathname } = useLocation();
    React.useEffect(() => {
        switch (pathname) {
            case "/disembodied":
                setCurrentPage("Disembodied Robot Head");
                break;
            case "/human":
                setCurrentPage("Human");
                break;
            case "/robot":
                setCurrentPage("Robot");
                break;
            case "/monster":
                setCurrentPage("Monster");
                break;

            default:
                setCurrentPage("Cat");
                break;
        }
    }, [pathname]);

    return (
        <>
            <div className="top-bar">
                <Title iconType={currentPage} />
                <Nav />
            </div>
            <main id="main" className="container-fluid vh-100 py-3">
                <Route
                    exact
                    path="/"
                    render={() => <Cats attribution="David Revoy" />}
                />
                <Route
                    path="/monster"
                    render={() => <Monster attribution="Hrvoje Novakovic" />}
                />
                <Route
                    path="/disembodied"
                    render={() => (
                        <DisembodiedRobotHead attribution="Julian Peter Arias" />
                    )}
                />
                <Route
                    path="/robot"
                    render={() => <Robot attribution="Zikri Kader" />}
                />
                <Route
                    path="/human"
                    render={() => <Human attribution="Pablo Stanley" />}
                />
            </main>
            <Footer />
        </>
    );
};
export { App };
