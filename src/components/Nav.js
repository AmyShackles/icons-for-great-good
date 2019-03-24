import React from "react";
import { Link } from "react-router-dom"

const Nav = props => {
    return (
        
    <nav id="nav" className="navbar navbar-expand-lg bg-info navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul id="navbar" className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Cats</Link>
                    </li>
                <li className="nav-item">
                    <Link to="/monster" className="nav-link">Monsters</Link>
                </li>
                <li className="nav-item">
                    <Link to="/headless_robot" className="nav-link">Headless Robots</Link>
                </li>
                <li className="nav-item">
                    <Link to="/robot" className="nav-link">Robots</Link>
                </li>
                </ul>
        </div>
    </nav>
    )
}

export default Nav;