import React from "react";
import './index.css';
const NavigationBar = () => {
    return (
        <nav className="navbar navigation-style navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Animate</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../profile">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../search">Search</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default NavigationBar;