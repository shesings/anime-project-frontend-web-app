import React from "react";
import './index.css';
const NavigationBar = (
    {
        active = 'home'
    }
) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Animate</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Search</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default NavigationBar;