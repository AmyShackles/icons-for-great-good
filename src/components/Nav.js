import React from "react";
import { Link } from "react-router-dom"

const Nav = props => {
    return (
        
    <nav id="nav" className="navbar navbar-expand-lg bg-info navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li class="nav-item">
                    <Link to="/" className="nav-link">Cats</Link>
                    </li>
                <li className="nav-item">
                    <Link to="/monster" className="nav-link">Monsters</Link>
                </li>
                </ul>
        </div>
    </nav>
    )
}

export default Nav;